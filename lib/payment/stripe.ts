import Stripe from 'stripe'
import {
  AppCurrency,
  AppLanguage,
  convertUsdToCurrency,
  getStripeLocale,
  toMinorUnits,
} from '@/lib/i18n'

let _stripe: Stripe | null = null

function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-10-29.clover',
    })
  }
  return _stripe
}

interface CreateCheckoutSessionInput {
  codeId: string
  usdPrice: number
  currency: AppCurrency
  language: AppLanguage
}

function getPaymentMethodTypes(currency: AppCurrency): Stripe.Checkout.SessionCreateParams.PaymentMethodType[] {
  if (currency === 'cny') {
    return ['card', 'alipay', 'wechat_pay']
  }
  return ['card']
}

/**
 * Create Stripe Checkout Session for invitation code purchase.
 */
export async function createCheckoutSession(
  input: CreateCheckoutSessionInput
): Promise<{ id: string; url: string }> {
  const priceInCurrency = convertUsdToCurrency(input.usdPrice, input.currency)
  const unitAmount = toMinorUnits(priceInCurrency, input.currency)

  const session = await getStripe().checkout.sessions.create({
    payment_method_types: getPaymentMethodTypes(input.currency),
    line_items: [
      {
        price_data: {
          currency: input.currency,
          product_data: {
            name: 'Elys Invitation Code',
            description: 'Official invitation code for Elys app signup',
          },
          unit_amount: unitAmount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    payment_method_options: input.currency === 'cny'
      ? {
          wechat_pay: {
            client: 'web',
          },
        }
      : undefined,
    locale: getStripeLocale(input.language),
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/`,
    metadata: {
      code_id: input.codeId,
      currency: input.currency,
      language: input.language,
    },
  })

  return {
    id: session.id,
    url: session.url!,
  }
}

/**
 * Get checkout session details.
 */
export async function getCheckoutSession(sessionId: string) {
  return await getStripe().checkout.sessions.retrieve(sessionId)
}

/**
 * Verify webhook signature.
 */
export function constructWebhookEvent(payload: string | Buffer, signature: string): Stripe.Event {
  return getStripe().webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  )
}
