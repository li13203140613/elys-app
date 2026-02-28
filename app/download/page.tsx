import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/seo/SeoPageLayout'
import { SeoHero } from '@/components/seo/SeoHero'
import { SeoSection } from '@/components/seo/SeoSection'
import { SeoFaq } from '@/components/seo/SeoFaq'
import { SeoCta } from '@/components/seo/SeoCta'
import { SeoInternalLinks } from '@/components/seo/SeoInternalLinks'

export const metadata: Metadata = {
  title: 'Elys 下载 - 下载 Elys App (iOS)',
  description:
    '下载 Elys App，体验新一代 AI 社交。支持 iOS 系统，App Store 免费下载 Elys。下载前需获取 Elys 邀请码完成注册。',
  keywords: ['Elys 下载', 'elys 下载', 'elys app 下载', '下载 elys', 'elys iOS', 'Elys App Store'],
  alternates: { canonical: '/download' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Elys',
  applicationCategory: 'SocialNetworkingApplication',
  operatingSystem: 'iOS 16.0+',
  downloadUrl: 'https://apps.apple.com/cn/app/elys/id6754834695',
  description: '下载 Elys App，体验新一代 AI 社交应用。',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: { '@type': 'Organization', name: 'Elys' },
}

const faqItems = [
  {
    q: 'Elys 下载需要付费吗？',
    a: 'Elys 下载完全免费。你可以在 App Store 免费下载 Elys App。但注册 Elys 需要邀请码，你可以在本站购买 Elys 邀请码后完成注册。',
  },
  {
    q: 'Elys 下载支持安卓吗？',
    a: '目前 Elys 下载仅支持 iOS 平台。你可以在 App Store 搜索"Elys"进行下载。安卓版 Elys 正在开发中，预计后续推出。',
  },
  {
    q: 'Elys 下载后无法注册怎么办？',
    a: '如果 Elys 下载后无法注册，说明你还没有邀请码。Elys 采用邀请制注册机制，你需要先获取 Elys 邀请码才能完成注册。可以在本站购买邀请码。',
  },
  {
    q: 'Elys 下载需要什么系统要求？',
    a: 'Elys 下载要求 iOS 16.0 或更高版本，兼容 iPhone 和 iPad。下载 Elys 前请确保你的设备系统版本符合要求。',
  },
]

export default function DownloadPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        badge="Elys 下载"
        title="下载 Elys App (iOS)"
        subtitle="免费下载 Elys App，搭配邀请码即可开启 AI 社交新体验。"
      />

      <SeoSection title="Elys 下载方式">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">扫码下载 Elys</h3>
            <div className="inline-block rounded-xl bg-white p-3 mb-4">
              <Image
                src="/images/elys-appstore-qr.png"
                alt="Elys 下载二维码 - 扫码前往 App Store 下载 Elys App"
                width={200}
                height={200}
              />
            </div>
            <p className="text-sm text-zinc-400">打开手机相机扫描二维码，即可跳转 App Store 下载 Elys</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">App Store 下载 Elys</h3>
            <p className="text-sm text-zinc-400 mb-4">
              点击下方按钮直接前往 App Store 下载 Elys App，或在 App Store 中搜索"Elys"。
            </p>
            <a
              href="https://apps.apple.com/cn/app/elys/id6754834695"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-105"
            >
              前往 App Store 下载 Elys
            </a>
          </div>
        </div>
      </SeoSection>

      <SeoSection title="Elys 下载前须知">
        <div className="space-y-6">
          {[
            {
              step: '1',
              title: '获取 Elys 邀请码',
              desc: (
                <>
                  在下载 Elys 之前，建议先{' '}
                  <Link href="/" className="text-purple-400 hover:text-purple-300 underline">
                    购买 Elys 邀请码
                  </Link>
                  。Elys 采用邀请制注册，下载 Elys 后需要邀请码才能完成注册。
                </>
              ),
            },
            {
              step: '2',
              title: '下载 Elys App',
              desc: '通过上方二维码或 App Store 链接下载 Elys App。Elys 下载完全免费，不会产生任何费用。',
            },
            {
              step: '3',
              title: '输入邀请码完成注册',
              desc: (
                <>
                  下载 Elys 后，打开 App 在注册页面输入你的 Elys 邀请码即可激活账号。详细步骤请参考{' '}
                  <Link href="/register" className="text-purple-400 hover:text-purple-300 underline">
                    Elys 注册教程
                  </Link>
                  。
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex-shrink-0 size-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SeoSection>

      <SeoSection title="Elys 下载系统要求">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: '操作系统', value: 'iOS 16.0 或更高版本' },
              { label: '兼容设备', value: 'iPhone、iPad' },
              { label: '下载大小', value: '约 100MB' },
              { label: '价格', value: '免费下载（注册需邀请码）' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-sm text-zinc-500 min-w-[80px]">{item.label}</span>
                <span className="text-sm text-zinc-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </SeoSection>

      <SeoFaq title="关于 Elys 下载的常见问题" items={faqItems} />

      <SeoCta
        title="下载 Elys 前先获取邀请码"
        description="购买 Elys 邀请码，下载 Elys App，三步完成注册。付款后即时获取邀请码。"
        buttonText="购买 Elys 邀请码"
        buttonHref="/"
      />

      <SeoInternalLinks currentPath="/download" />
    </SeoPageLayout>
  )
}
