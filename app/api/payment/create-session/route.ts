import { NextRequest, NextResponse } from 'next/server'
import { createPaymentSession } from '@/lib/payment/service'
import { normalizeCurrency, normalizeLanguage } from '@/lib/i18n'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const codeId = body?.codeId as string | undefined

    if (!codeId) {
      return NextResponse.json({ error: 'Missing invitation code ID' }, { status: 400 })
    }

    const currency = normalizeCurrency(body?.currency)
    const language = normalizeLanguage(body?.language)
    const { url } = await createPaymentSession(codeId, { currency, language })

    return NextResponse.json({ url })
  } catch (err) {
    console.error('Payment session error:', err)
    const message = err instanceof Error ? err.message : 'Failed to create payment session'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
