import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { releaseExpiredReservations } from '@/lib/payment/service'

function verifyAdmin(request: NextRequest): boolean {
  const password = request.headers.get('x-admin-password')
  return password === process.env.ADMIN_PASSWORD
}

// Get all invitation codes (admin)
export async function GET(request: NextRequest) {
  if (!verifyAdmin(request)) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  try {
    await releaseExpiredReservations()

    const sql = getDb()

    const codes = await sql`
      SELECT * FROM invitation_codes
      ORDER BY created_at DESC
    `

    const stats = {
      total: codes.length,
      available: codes.filter(c => c.status === 'available').length,
      sold: codes.filter(c => c.status === 'sold').length,
      revenue: codes
        .filter(c => c.status === 'sold')
        .reduce((sum, c) => sum + Number(c.price), 0),
    }

    return NextResponse.json({ codes, stats })
  } catch (err) {
    console.error('Admin fetch error:', err)
    return NextResponse.json({ error: '获取失败' }, { status: 500 })
  }
}

// Add codes (admin)
export async function POST(request: NextRequest) {
  if (!verifyAdmin(request)) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  try {
    const { codes } = await request.json()

    if (!Array.isArray(codes) || codes.length === 0) {
      return NextResponse.json({ error: '请提供邀请码数组' }, { status: 400 })
    }

    const validCodes = codes.filter(
      (c: string) => typeof c === 'string' && /^[A-Z0-9]{6}$/.test(c)
    )

    if (validCodes.length === 0) {
      return NextResponse.json({ error: '没有有效的邀请码（需要 6 位字母数字）' }, { status: 400 })
    }

    const sql = getDb()

    let added = 0
    for (const code of validCodes) {
      try {
        await sql`
          INSERT INTO invitation_codes (code, price, status)
          VALUES (${code}, 9.90, 'available')
          ON CONFLICT (code) DO NOTHING
        `
        added++
      } catch {
        // Skip conflict rows.
      }
    }

    return NextResponse.json({ added })
  } catch (err) {
    console.error('Admin add error:', err)
    return NextResponse.json({ error: '添加失败' }, { status: 500 })
  }
}
