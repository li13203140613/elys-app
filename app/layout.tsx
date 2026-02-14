import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elys 邀请码 - 购买 Elys 官方邀请码 | 限量 ¥9.9',
  description: '官方渠道购买 Elys 邀请码，¥9.9 即可获取 Elys App 专属邀请码。Elys 是新一代 AI 社交应用，支持支付宝、微信支付，即买即用。',
  keywords: ['elys', 'elys邀请码', 'elys 邀请码', 'elys app', 'elys注册', 'elys邀请码购买'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#0a0a0f] antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
