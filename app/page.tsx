import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CodeGrid } from '@/components/CodeGrid'
import { Sparkles } from 'lucide-react'

function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Elys 邀请码',
    description: 'Elys 新一代 AI 社交应用官方邀请码，购买后即刻获取，在 Elys App 注册页面输入即可激活。',
    brand: {
      '@type': 'Brand',
      name: 'Elys',
    },
    offers: {
      '@type': 'Offer',
      price: '9.90',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.elys-app.com',
      seller: {
        '@type': 'Organization',
        name: 'Elys',
      },
    },
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Elys 邀请码',
    url: 'https://www.elys-app.com',
    description: '官方渠道购买 Elys 邀请码，$9.9 即可获取 Elys App 专属邀请码。',
  }

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '什么是 Elys 邀请码？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Elys 邀请码是注册 Elys AI 社交应用所需的 6 位专属激活码，每个邀请码仅可使用一次。',
        },
      },
      {
        '@type': 'Question',
        name: 'Elys 邀请码多少钱？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Elys 邀请码售价 $9.9/个，支持信用卡、支付宝、微信支付，付款后立即显示完整邀请码。',
        },
      },
      {
        '@type': 'Question',
        name: '如何使用 Elys 邀请码？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '购买成功后，复制 6 位邀请码，在 Elys App 注册页面输入即可激活账号。',
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid">
      <JsonLd />
      <Header />

      <main className="flex-1">
        {/* Hero 区域 */}
        <section className="relative overflow-hidden">
          {/* 背景光效 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 mb-6">
              <Sparkles className="size-3.5 text-purple-400" />
              <span className="text-sm text-purple-300">Elys 邀请码限量发售中</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                购买 Elys 邀请码
              </span>
            </h1>

            <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
              Elys — 新一代 AI 社交应用，¥9.9 获取 Elys 邀请码，即刻加入
            </p>

            <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">
              支持支付宝 / 微信支付，付款后立即显示完整 Elys 邀请码
            </p>
          </div>
        </section>

        {/* 邀请码列表 */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <CodeGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}
