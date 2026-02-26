'use client'

import { Sparkles } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CodeGrid } from '@/components/CodeGrid'
import { useAppSettings } from '@/components/AppSettingsProvider'

function JsonLd() {
  const { language } = useAppSettings()
  const isEnglish = language === 'en'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: isEnglish ? 'Elys Invitation Code' : 'elys邀请码',
    alternateName: isEnglish ? 'elys邀请码' : 'Elys Invitation Code',
    description: isEnglish
      ? 'Official Elys invitation code checkout page with instant delivery.'
      : 'elys邀请码官方购买页面，付款后即时获取 Elys 邀请码。',
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
    inLanguage: isEnglish ? 'en' : 'zh-CN',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function HomePage() {
  const { t } = useAppSettings()

  return (
    <div className="min-h-screen flex flex-col bg-grid">
      <JsonLd />
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 mb-6">
              <Sparkles className="size-3.5 text-purple-400" />
              <span className="text-sm text-purple-300">{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {t.heroTitle}
              </span>
            </h1>

            <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">{t.heroSubtitle}</p>
            <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">{t.heroSupport}</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <CodeGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}
