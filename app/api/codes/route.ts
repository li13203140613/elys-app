import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET() {
  try {
    const sql = getDb()

    const codes = await sql`
      SELECT id, code, price
      FROM invitation_codes
      WHERE status = 'available'
      ORDER BY created_at ASC
    `

    // 遮蔽最后一位
    const maskedCodes = codes.map(code => ({
      id: code.id,
      maskedCode: code.code.slice(0, 5) + '*',
      price: code.price,
    }))

    return NextResponse.json({ codes: maskedCodes })
  } catch (err) {
    console.error('Error fetching codes:', err)
    return NextResponse.json({ error: '获取邀请码失败' }, { status: 500 })
  }
}
