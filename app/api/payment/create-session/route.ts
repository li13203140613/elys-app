import { NextRequest, NextResponse } from 'next/server'
import { createPaymentSession } from '@/lib/payment/service'

export async function POST(request: NextRequest) {
  try {
    const { codeId } = await request.json()

    if (!codeId) {
      return NextResponse.json({ error: '缺少邀请码 ID' }, { status: 400 })
    }

    const { url } = await createPaymentSession(codeId)

    return NextResponse.json({ url })
  } catch (err) {
    console.error('Payment session error:', err)
    const message = err instanceof Error ? err.message : '创建支付会话失败'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
