import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/seo/SeoPageLayout'
import { SeoHero } from '@/components/seo/SeoHero'
import { SeoSection } from '@/components/seo/SeoSection'
import { SeoFaq } from '@/components/seo/SeoFaq'
import { SeoCta } from '@/components/seo/SeoCta'
import { SeoInternalLinks } from '@/components/seo/SeoInternalLinks'

export const metadata: Metadata = {
  title: 'Elys AI - 新一代 AI 社交应用',
  description:
    'Elys AI 是一款融合人工智能与社交的创新应用。了解 Elys AI 的核心功能、技术亮点，获取 Elys AI 邀请码开启全新社交体验。',
  keywords: ['Elys AI', 'elys ai', 'AI 社交', 'AI 社交应用', 'elys 邀请码', 'Elys'],
  alternates: { canonical: '/elys-ai' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Elys AI - 新一代 AI 社交应用',
  description:
    'Elys AI 是一款融合人工智能与社交的创新应用，提供赛博分身、记忆飞轮、AI 原生社交等功能。',
  author: { '@type': 'Organization', name: 'Elys' },
  publisher: { '@type': 'Organization', name: 'Elys' },
  mainEntityOfPage: 'https://www.elys-app.com/elys-ai',
}

const faqItems = [
  {
    q: 'Elys AI 是什么？',
    a: 'Elys AI 是一款新一代 AI 社交应用，利用先进的人工智能技术，为用户提供赛博分身、记忆飞轮、AI 原生社交等创新功能。Elys AI 由前阿里团队打造，获得阿里巴巴和蚂蚁集团 3000 万美元投资。',
  },
  {
    q: 'Elys AI 有哪些核心功能？',
    a: 'Elys AI 的核心功能包括：赛博分身（创建你的 AI 数字替身）、记忆飞轮（AI 持续学习你的偏好）、AI 原生社交（智能匹配志同道合的朋友）。Elys AI 让社交变得更加高效和有趣。',
  },
  {
    q: '如何开始使用 Elys AI？',
    a: '使用 Elys AI 需要先获取 Elys AI 邀请码。你可以在本站购买 Elys AI 邀请码，付款后立即获取。然后下载 Elys App，在注册页面输入邀请码即可激活 Elys AI 账号。',
  },
  {
    q: 'Elys AI 和其他 AI 应用有什么不同？',
    a: 'Elys AI 不同于传统 AI 聊天工具，它是一款以社交为核心的 AI 应用。Elys AI 将 AI 技术深度融入社交场景，通过赛博分身和记忆飞轮技术，让 AI 真正理解你、帮助你建立有意义的社交连接。',
  },
]

export default function ElysAiPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        badge="探索 Elys AI"
        title="Elys AI — 新一代 AI 社交应用"
        subtitle="Elys AI 将人工智能与社交深度融合，为你打造前所未有的智能社交体验。"
      />

      <SeoSection title="什么是 Elys AI？">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            <strong>Elys AI</strong> 是一款革命性的 AI 社交应用，由前阿里巴巴团队倾力打造。Elys AI 的核心理念是将先进的人工智能技术与社交场景深度融合，让每一位用户都能享受到 AI 驱动的全新社交体验。
          </p>
          <p>
            不同于传统的社交软件，Elys AI 引入了多项创新技术，包括赛博分身、记忆飞轮和 AI 原生社交匹配等。Elys AI 能够真正理解你的兴趣和偏好，为你智能推荐最合适的社交对象。目前，Elys AI 采用邀请制注册，你需要持有{' '}
            <Link href="/elys-invitation-code" className="text-purple-400 hover:text-purple-300 underline">
              Elys AI 邀请码
            </Link>{' '}
            才能体验这款应用。
          </p>
        </div>
      </SeoSection>

      <SeoSection title="Elys AI 核心功能">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: '🤖',
              name: '赛博分身',
              desc: 'Elys AI 为每位用户生成独一无二的 AI 数字替身。你的赛博分身能代表你与其他 Elys AI 用户互动，即使你不在线，它也能帮你维护社交关系。',
            },
            {
              icon: '🧠',
              name: '记忆飞轮',
              desc: 'Elys AI 的记忆飞轮技术会持续学习你的偏好和表达风格。使用 Elys AI 越多，它就越了解你，为你提供更精准的社交推荐。',
            },
            {
              icon: '💬',
              name: 'AI 原生社交',
              desc: 'Elys AI 从底层重新定义社交。通过 AI 原生社交引擎，Elys AI 能智能匹配志同道合的朋友，让你的每一次社交互动都有价值。',
            },
          ].map((feature) => (
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

      <SeoSection title="Elys AI 技术亮点">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            Elys AI 背后拥有强大的技术团队和资金支持。Elys AI 获得了阿里巴巴和蚂蚁集团共计 3000 万美元的投资，这使得 Elys AI 能够在 AI 技术研发上持续投入，保持行业领先地位。
          </p>
          <p>
            Elys AI 采用了最新的大语言模型和多模态 AI 技术，能够理解文本、图像、语音等多种信息形式。Elys AI 的推荐算法基于深度学习，能够从海量数据中精准捕捉用户的社交偏好，实现真正智能化的社交匹配。
          </p>
          <p>
            在隐私保护方面，Elys AI 采用了端到端加密和本地化处理等先进技术，确保用户的个人数据安全。Elys AI 承诺绝不出售用户数据，让你在享受 AI 社交的同时无需担心隐私泄露。
          </p>
        </div>
      </SeoSection>

      <SeoFaq title="关于 Elys AI 的常见问题" items={faqItems} />

      <SeoCta
        title="立即获取 Elys AI 邀请码"
        description="购买 Elys AI 邀请码，开启你的 AI 社交之旅。付款后即时获取邀请码，注册 Elys AI 体验全新社交方式。"
        buttonText="购买 Elys AI 邀请码"
        buttonHref="/"
      />

      <SeoInternalLinks currentPath="/elys-ai" />
    </SeoPageLayout>
  )
}
