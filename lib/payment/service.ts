import { getDb } from '@/lib/db'
import { createCheckoutSession } from './stripe'

const RESERVE_TIMEOUT_MINUTES = 15

/**
 * 释放超时的预留邀请码
 */
async function releaseExpiredReservations() {
  const sql = getDb()
  const cutoff = new Date(Date.now() - RESERVE_TIMEOUT_MINUTES * 60 * 1000).toISOString()

  await sql`
    UPDATE invitation_codes
    SET status = 'available', stripe_session_id = NULL, reserved_at = NULL
    WHERE status = 'reserved' AND reserved_at < ${cutoff}
  `
}

/**
 * 创建支付会话：锁定邀请码 + 创建 Stripe 会话 + 创建订单
 */
export async function createPaymentSession(codeId: string) {
  const sql = getDb()

  // 先释放超时的预留
  await releaseExpiredReservations()

  // 检查邀请码状态并锁定（原子操作）
  const codes = await sql`
    UPDATE invitation_codes
    SET status = 'reserved', reserved_at = NOW()
    WHERE id = ${codeId} AND status = 'available'
    RETURNING *
  `

  if (codes.length === 0) {
    throw new Error('邀请码不存在或已被购买')
  }

  const code = codes[0]

  // 创建 Stripe Checkout Session
  const { id: sessionId, url } = await createCheckoutSession(codeId, code.price)

  // 更新邀请码的 stripe_session_id
  await sql`
    UPDATE invitation_codes
    SET stripe_session_id = ${sessionId}
    WHERE id = ${codeId}
  `

  // 创建订单记录
  await sql`
    INSERT INTO orders (code_id, stripe_session_id, amount, status)
    VALUES (${codeId}, ${sessionId}, ${code.price}, 'pending')
  `

  return { url, sessionId }
}

/**
 * 完成支付：标记邀请码已售 + 更新订单状态
 */
export async function completePayment(sessionId: string, buyerEmail?: string) {
  const sql = getDb()

  // 查找订单
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

  // 幂等检查
  if (order.status === 'completed') {
    return
  }

  // 更新订单状态
  await sql`
    UPDATE orders
    SET status = 'completed', buyer_email = ${buyerEmail ?? null}, completed_at = NOW()
    WHERE stripe_session_id = ${sessionId}
  `

  // 标记邀请码已售
  await sql`
    UPDATE invitation_codes
    SET status = 'sold', buyer_email = ${buyerEmail ?? null}, sold_at = NOW()
    WHERE id = ${order.code_id}
  `
}

/**
 * 查询订单状态
 */
export async function getOrderBySessionId(sessionId: string) {
  const sql = getDb()

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
