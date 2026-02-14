import { NextRequest, NextResponse } from 'next/server'
import { getOrderBySessionId } from '@/lib/payment/service'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params

    if (!sessionId) {
      return NextResponse.json({ error: '缺少 session ID' }, { status: 400 })
    }

    const order = await getOrderBySessionId(sessionId)

    if (!order) {
      return NextResponse.json({ status: 'pending' })
    }

    return NextResponse.json(order)
  } catch (err) {
    console.error('Order query error:', err)
    return NextResponse.json({ error: '查询订单失败' }, { status: 500 })
  }
}
