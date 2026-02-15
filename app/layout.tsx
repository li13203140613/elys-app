import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Elys 邀请码 - 购买 Elys 官方邀请码 | 限量 $9.9',
    template: '%s | Elys 邀请码',
  },
  description: '官方渠道购买 Elys 邀请码，$9.9 即可获取 Elys App 专属邀请码。Elys 是新一代 AI 社交应用，支持支付宝、微信支付、信用卡，即买即用。',
  keywords: ['elys', 'elys邀请码', 'elys 邀请码', 'elys app', 'elys注册', 'elys邀请码购买', 'elys invitation code', 'elys ai'],
  metadataBase: new URL('https://www.elys-app.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Elys 邀请码 - 购买 Elys 官方邀请码',
    description: '官方渠道购买 Elys 邀请码，$9.9 即可获取 Elys App 专属邀请码。新一代 AI 社交应用，即买即用。',
    url: 'https://www.elys-app.com',
    siteName: 'Elys 邀请码',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elys 邀请码 - 购买 Elys 官方邀请码',
    description: '官方渠道购买 Elys 邀请码，$9.9 即可获取 Elys App 专属邀请码。',
  },
  robots: {
    index: true,
    follow: true,
  },
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
