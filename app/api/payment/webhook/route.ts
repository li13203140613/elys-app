import { NextRequest, NextResponse } from 'next/server'
import { constructWebhookEvent } from '@/lib/payment/stripe'
import { completePayment } from '@/lib/payment/service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    const event = constructWebhookEvent(body, signature)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as {
          id: string
          customer_details?: { email?: string }
        }

        await completePayment(
          session.id,
          session.customer_details?.email || undefined
        )
        break
      }
      default:
        // 忽略其他事件类型
        break
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json(
      { error: 'Webhook 处理失败' },
      { status: 400 }
    )
  }
}
