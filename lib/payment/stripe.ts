import Stripe from 'stripe'

let _stripe: Stripe | null = null

function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-10-29.clover',
    })
  }
  return _stripe
}

/**
 * 创建邀请码购买的 Stripe Checkout Session
 */
export async function createCheckoutSession(
  codeId: string,
  price: number,
): Promise<{ id: string; url: string }> {
  const session = await getStripe().checkout.sessions.create({
    payment_method_types: ['card', 'alipay', 'wechat_pay'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Elys 邀请码',
            description: '获取 Elys AI 社交 App 专属邀请码',
          },
          unit_amount: Math.round(price * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    payment_method_options: {
      wechat_pay: {
        client: 'web',
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/`,
    metadata: {
      code_id: codeId,
    },
  })

  return {
    id: session.id,
    url: session.url!,
  }
}

/**
 * 获取 Checkout Session 详情
 */
export async function getCheckoutSession(sessionId: string) {
  return await getStripe().checkout.sessions.retrieve(sessionId)
}

/**
 * 验证 Webhook 签名
 */
export function constructWebhookEvent(
  payload: string | Buffer,
  signature: string
): Stripe.Event {
  return getStripe().webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  )
}
