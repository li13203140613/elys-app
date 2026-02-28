import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/seo/SeoPageLayout'
import { SeoHero } from '@/components/seo/SeoHero'
import { SeoSection } from '@/components/seo/SeoSection'
import { SeoFaq } from '@/components/seo/SeoFaq'
import { SeoCta } from '@/components/seo/SeoCta'
import { SeoInternalLinks } from '@/components/seo/SeoInternalLinks'

export const metadata: Metadata = {
  title: 'Elys App - 产品功能与下载指南',
  description:
    'Elys App 是新一代 AI 社交应用，提供赛博分身、记忆飞轮、智能匹配等功能。了解 Elys App 功能特色，下载 Elys App 开始体验。',
  keywords: ['Elys App', 'elys app', 'elys 下载', 'elys 功能', 'AI 社交 app', 'Elys'],
  alternates: { canonical: '/elys-app' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Elys App',
  applicationCategory: 'SocialNetworkingApplication',
  operatingSystem: 'iOS',
  description: 'Elys App 是新一代 AI 社交应用，融合赛博分身和记忆飞轮技术。',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: { '@type': 'Organization', name: 'Elys' },
}

const features = [
  {
    icon: '🤖',
    name: '赛博分身',
    desc: 'Elys App 为你创建 AI 数字替身，即使离线也能代表你社交。赛博分身是 Elys App 最具创新性的功能之一。',
  },
  {
    icon: '🧠',
    name: '记忆飞轮',
    desc: 'Elys App 的记忆飞轮持续学习你的偏好。你使用 Elys App 越多，它就越懂你。',
  },
  {
    icon: '💬',
    name: '智能匹配',
    desc: 'Elys App 利用 AI 算法智能匹配志同道合的朋友，让你在 Elys App 中找到真正有共鸣的人。',
  },
  {
    icon: '🎨',
    name: '个性化体验',
    desc: 'Elys App 根据你的兴趣和风格定制社交体验，每个人在 Elys App 中都有独特的社交旅程。',
  },
  {
    icon: '🔒',
    name: '隐私安全',
    desc: 'Elys App 采用端到端加密技术，保护你的聊天内容和个人信息。在 Elys App 中社交，安全有保障。',
  },
  {
    icon: '⚡',
    name: '极速响应',
    desc: 'Elys App 优化了 AI 响应速度，对话体验流畅自然。Elys App 让 AI 社交像面对面聊天一样即时。',
  },
]

const faqItems = [
  {
    q: 'Elys App 是什么类型的应用？',
    a: 'Elys App 是一款 AI 社交应用，将人工智能与社交深度融合。Elys App 通过赛博分身、记忆飞轮等创新功能，为用户提供智能化的社交体验。Elys App 目前支持 iOS 平台。',
  },
  {
    q: 'Elys App 支持哪些平台？',
    a: 'Elys App 目前支持 iOS 平台，你可以在 App Store 搜索"Elys"下载 Elys App。安卓版 Elys App 正在开发中，敬请期待。',
  },
  {
    q: '使用 Elys App 需要付费吗？',
    a: 'Elys App 本身免费下载，但注册 Elys App 需要邀请码。你可以在本站购买 Elys App 邀请码，付款后立即获取，用于激活 Elys App 账号。',
  },
  {
    q: 'Elys App 和普通社交应用有什么区别？',
    a: 'Elys App 最大的特点是将 AI 技术深度融入社交。普通社交应用只提供基础通讯，而 Elys App 通过 AI 理解你的偏好、为你匹配合适的人、甚至能代表你社交。Elys App 是真正的 AI 原生社交应用。',
  },
]

export default function ElysAppPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        badge="了解 Elys App"
        title="Elys App — 产品功能与下载指南"
        subtitle="探索 Elys App 的六大核心功能，了解这款 AI 社交应用如何改变你的社交方式。"
      />

      <SeoSection title="Elys App 概览">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            <strong>Elys App</strong> 是由前阿里巴巴团队打造的新一代 AI 社交应用。Elys App 融合了最前沿的人工智能技术，旨在为用户提供更智能、更高效、更有温度的社交体验。
          </p>
          <p>
            自发布以来，Elys App 凭借其创新的赛博分身和记忆飞轮功能迅速吸引了大量用户关注。Elys App 目前采用邀请制注册，确保社区质量。如果你想体验 Elys App，可以先{' '}
            <Link href="/elys-invitation-code" className="text-purple-400 hover:text-purple-300 underline">
              获取 Elys 邀请码
            </Link>
            ，然后{' '}
            <Link href="/download" className="text-purple-400 hover:text-purple-300 underline">
              下载 Elys App
            </Link>{' '}
            完成注册。
          </p>
        </div>
      </SeoSection>

      <SeoSection title="Elys App 六大功能特色">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{feature.name}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </SeoSection>

      <SeoSection title="Elys App 技术亮点">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            Elys App 的背后是强大的 AI 技术支撑。Elys App 利用大语言模型实现自然对话，通过多模态 AI 理解文本和图像信息。Elys App 的推荐引擎基于深度学习，能精准匹配用户偏好。
          </p>
          <p>
            Elys App 在用户体验方面也下足了功夫。界面设计简洁直观，交互流畅自然。Elys App 的 AI 响应速度经过优化，确保对话体验不会有延迟感。无论是文字聊天还是语音交流，Elys App 都能提供出色的体验。
          </p>
        </div>
      </SeoSection>

      <SeoFaq title="关于 Elys App 的常见问题" items={faqItems} />

      <SeoCta
        title="立即体验 Elys App"
        description="获取邀请码，下载 Elys App，开启 AI 社交新时代。Elys App 让社交变得更智能。"
        buttonText="获取邀请码 & 下载 Elys App"
        buttonHref="/"
      />

      <SeoInternalLinks currentPath="/elys-app" />
    </SeoPageLayout>
  )
}
