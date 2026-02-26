import { getDb } from '@/lib/db'
import { AppCurrency, AppLanguage } from '@/lib/i18n'
import { createCheckoutSession } from './stripe'

const RESERVE_TIMEOUT_MINUTES = 5

interface PaymentPreferences {
  currency: AppCurrency
  language: AppLanguage
}

/**
 * Release codes that were reserved but not paid within timeout.
 */
export async function releaseExpiredReservations() {
  const sql = getDb()
  const cutoff = new Date(Date.now() - RESERVE_TIMEOUT_MINUTES * 60 * 1000).toISOString()

  await sql`
    WITH expired_codes AS (
      UPDATE invitation_codes
      SET status = 'available', stripe_session_id = NULL, reserved_at = NULL
      WHERE status = 'reserved' AND reserved_at < ${cutoff}
      RETURNING stripe_session_id
    )
    UPDATE orders
    SET status = 'expired'
    WHERE status = 'pending'
      AND stripe_session_id IN (
        SELECT stripe_session_id
        FROM expired_codes
        WHERE stripe_session_id IS NOT NULL
      )
  `
}

/**
 * Create payment session: reserve code + create Stripe session + create order.
 */
export async function createPaymentSession(codeId: string, preferences: PaymentPreferences) {
  const sql = getDb()

  await releaseExpiredReservations()

  const codes = await sql`
    UPDATE invitation_codes
    SET status = 'reserved', reserved_at = NOW()
    WHERE id = ${codeId} AND status = 'available'
    RETURNING *
  `

  if (codes.length === 0) {
    throw new Error('Invitation code is not available')
  }

  const code = codes[0]
  const { id: sessionId, url } = await createCheckoutSession({
    codeId,
    usdPrice: Number(code.price),
    currency: preferences.currency,
    language: preferences.language,
  })

  await sql`
    UPDATE invitation_codes
    SET stripe_session_id = ${sessionId}
    WHERE id = ${codeId}
  `

  await sql`
    INSERT INTO orders (code_id, stripe_session_id, amount, status)
    VALUES (${codeId}, ${sessionId}, ${code.price}, 'pending')
  `

  return { url, sessionId }
}

/**
 * Complete payment: mark code sold and order completed.
 */
export async function completePayment(sessionId: string, buyerEmail?: string) {
  const sql = getDb()

  const orders = await sql`
    SELECT o.*, ic.code as invitation_code
    FROM orders o
    JOIN invitation_codes ic ON o.code_id = ic.id
    WHERE o.stripe_session_id = ${sessionId}
    LIMIT 1
  `

  if (orders.length === 0) {
    console.error('Order not found for session:', sessionId)
    return
  }

  const order = orders[0]

  if (order.status === 'completed') {
    return
  }

  if (order.status !== 'pending') {
    return
  }

  const soldCodes = await sql`
    UPDATE invitation_codes
    SET status = 'sold', buyer_email = ${buyerEmail ?? null}, sold_at = NOW()
    WHERE id = ${order.code_id}
      AND status = 'reserved'
      AND stripe_session_id = ${sessionId}
    RETURNING id
  `

  if (soldCodes.length === 0) {
    return
  }

  await sql`
    UPDATE orders
    SET status = 'completed', buyer_email = ${buyerEmail ?? null}, completed_at = NOW()
    WHERE stripe_session_id = ${sessionId}
  `
}

/**
 * Query order status.
 */
export async function getOrderBySessionId(sessionId: string) {
  const sql = getDb()

  await releaseExpiredReservations()

  const orders = await sql`
    SELECT o.status, o.buyer_email, ic.code
    FROM orders o
    JOIN invitation_codes ic ON o.code_id = ic.id
    WHERE o.stripe_session_id = ${sessionId}
    LIMIT 1
  `

  if (orders.length === 0) {
    return null
  }

  const order = orders[0]

  return {
    status: order.status,
    code: order.status === 'completed' ? order.code : null,
    email: order.buyer_email,
  }
}
