import type { Metadata } from 'next'
import Script from 'next/script'
import { AppSettingsProvider } from '@/components/AppSettingsProvider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'elys邀请码 - Elys 邀请码购买',
    template: '%s | elys邀请码',
  },
  description:
    'elys邀请码官方购买渠道，支持人民币、日元、港币、美元支付，付款后即时获取 Elys 邀请码。',
  keywords: [
    'elys邀请码',
    'elys 邀请码',
    'elys',
    'elys invitation code',
    'elys app',
    'elys register',
    'elys ai',
  ],
  metadataBase: new URL('https://www.elys-app.com'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'en-US': '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'elys邀请码 - Elys 邀请码购买',
    description: 'elys邀请码官方购买渠道，付款后即时获取邀请码。',
    url: 'https://www.elys-app.com',
    siteName: 'elys邀请码',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'elys邀请码 - Elys 邀请码购买',
    description: 'elys邀请码官方购买渠道，付款后即时获取邀请码。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-40S9YFKDHN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-40S9YFKDHN');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-[#0a0a0f] antialiased">
        <AppSettingsProvider>
          {children}
          <Toaster />
        </AppSettingsProvider>
      </body>
    </html>
  )
}
