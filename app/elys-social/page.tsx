import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/seo/SeoPageLayout'
import { SeoHero } from '@/components/seo/SeoHero'
import { SeoSection } from '@/components/seo/SeoSection'
import { SeoFaq } from '@/components/seo/SeoFaq'
import { SeoCta } from '@/components/seo/SeoCta'
import { SeoInternalLinks } from '@/components/seo/SeoInternalLinks'

export const metadata: Metadata = {
  title: 'Elys 社交 - AI 社交新体验',
  description:
    'Elys 社交将人工智能与社交深度融合。了解 Elys 社交的创新功能、融资背景和市场反应，体验 AI 驱动的全新社交方式。',
  keywords: ['Elys 社交', 'elys 社交', 'AI 社交', 'elys ai 社交', 'AI 社交应用', 'Elys'],
  alternates: { canonical: '/elys-social' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Elys 社交 - AI 社交新体验',
  description: 'Elys 社交将人工智能与社交深度融合，打造 AI 驱动的全新社交体验。',
  author: { '@type': 'Organization', name: 'Elys' },
  publisher: { '@type': 'Organization', name: 'Elys' },
  mainEntityOfPage: 'https://www.elys-app.com/elys-social',
}

const faqItems = [
  {
    q: 'Elys 社交和微信/微博有什么不同？',
    a: 'Elys 社交最大的特点是将 AI 技术深度融入社交。传统社交应用如微信和微博主要提供基础通讯和内容发布功能，而 Elys 社交通过 AI 驱动的赛博分身、智能匹配和记忆飞轮，让社交体验更加智能和高效。',
  },
  {
    q: 'Elys 社交如何保护用户隐私？',
    a: 'Elys 社交非常重视用户隐私保护。Elys 社交采用端到端加密技术保护聊天内容，用户的个人数据不会被出售给第三方。Elys 社交的 AI 功能在保护隐私的前提下运行，确保你的社交数据安全。',
  },
  {
    q: 'Elys 社交适合什么类型的用户？',
    a: 'Elys 社交适合所有对新型社交体验感兴趣的用户。无论你是想通过 AI 认识新朋友、探索创新社交方式，还是想体验赛博分身等前沿功能，Elys 社交都能满足你的需求。',
  },
  {
    q: 'Elys 社交的赛博分身是什么？',
    a: '赛博分身是 Elys 社交的核心功能之一。Elys 社交为每位用户创建一个 AI 数字替身，它能学习你的表达风格和社交偏好，在你不在线时代表你与其他 Elys 社交用户互动，帮你维护社交关系。',
  },
  {
    q: '如何加入 Elys 社交？',
    a: '加入 Elys 社交需要获取邀请码。你可以在本站购买 Elys 邀请码，然后下载 Elys App 并输入邀请码完成注册。注册后即可开始体验 Elys 社交的全部功能。',
  },
]

export default function ElysSocialPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        badge="Elys 社交"
        title="Elys 社交 — AI 社交新体验"
        subtitle="Elys 社交重新定义社交方式，用 AI 技术让每一次连接都更有意义。"
      />

      <SeoSection title="Elys 社交概览">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            <strong>Elys 社交</strong>是一种全新的 AI 驱动社交体验。在传统社交应用中，用户需要自己发现和维护社交关系，这往往需要大量时间和精力。Elys 社交通过人工智能技术改变了这一切——让 AI 帮你更高效地建立有意义的社交连接。
          </p>
          <p>
            Elys 社交不是简单地在社交功能上加一层 AI，而是从底层架构就以 AI 为核心设计。Elys 社交的赛博分身、记忆飞轮和智能匹配引擎三大核心技术协同工作，为每位用户提供个性化的社交体验。在 Elys 社交中，AI 是你的社交助手，帮你发现最合适的社交对象。
          </p>
        </div>
      </SeoSection>

      <SeoSection title="Elys 社交的融资背景">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              Elys 社交的背后是强大的资本支持。Elys 社交获得了<strong className="text-purple-300">阿里巴巴和蚂蚁集团共计 3000 万美元</strong>的投资，这是 AI 社交领域最大的早期投资之一。
            </p>
            <p>
              Elys 社交的创始团队来自阿里巴巴，拥有丰富的社交产品和 AI 技术经验。正是这种技术积累加上充足的资金支持，让 Elys 社交能够快速迭代产品，为用户带来持续优化的 AI 社交体验。
            </p>
            <div className="grid gap-4 sm:grid-cols-3 mt-6">
              {[
                { label: '融资金额', value: '3000 万美元' },
                { label: '投资方', value: '阿里巴巴 & 蚂蚁集团' },
                { label: '创始团队', value: '前阿里巴巴核心成员' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-lg bg-zinc-800/50">
                  <p className="text-2xl font-bold text-purple-400">{item.value}</p>
                  <p className="text-xs text-zinc-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SeoSection>

      <SeoSection title="Elys 社交的市场反应">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            自推出以来，Elys 社交在市场上引起了广泛关注。Elys 社交凭借其创新的 AI 社交理念和出色的产品体验，迅速积累了一批忠实用户。许多用户表示，Elys 社交是他们体验过的最具创新性的社交应用。
          </p>
          <p>
            Elys 社交采用的邀请制注册策略也为产品增添了话题度。用户对 Elys 社交的{' '}
            <Link href="/elys-invitation-code" className="text-purple-400 hover:text-purple-300 underline">
              邀请码
            </Link>{' '}
            需求持续旺盛，这也从侧面反映了市场对 Elys 社交这种新型 AI 社交模式的认可。
          </p>
        </div>
      </SeoSection>

      <SeoSection title="Elys 社交功能特色">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: '🤖',
              title: '赛博分身社交',
              desc: 'Elys 社交的赛博分身功能让你拥有一个 AI 数字替身。即使你不在线，赛博分身也能代表你在 Elys 社交中与他人互动，维护社交关系。',
            },
            {
              icon: '🎯',
              title: 'AI 智能匹配',
              desc: 'Elys 社交基于 AI 算法智能匹配志同道合的朋友。通过分析兴趣、性格和社交偏好，Elys 社交为你推荐最合适的社交对象。',
            },
            {
              icon: '💡',
              title: 'AI 辅助对话',
              desc: 'Elys 社交的 AI 助手能在对话中提供建议和话题灵感，帮你打破社交尴尬。在 Elys 社交中，AI 让每次对话都自然流畅。',
            },
            {
              icon: '🧠',
              title: '记忆飞轮学习',
              desc: 'Elys 社交的记忆飞轮持续学习你的偏好和表达风格。在 Elys 社交中使用得越多，AI 就越了解你，推荐也越精准。',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </SeoSection>

      <SeoSection title="Elys 社交的技术特色">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            Elys 社交在技术上采用了多项前沿的 AI 技术。Elys 社交的自然语言处理能力让 AI 能够深度理解用户的表达意图，而不仅仅是表面的文字匹配。这使得 Elys 社交的推荐更加精准和有意义。
          </p>
          <p>
            在数据处理方面，Elys 社交利用了分布式计算和实时数据流技术，确保 AI 功能的响应速度。无论是赛博分身的实时互动，还是智能匹配的即时推荐，Elys 社交都能做到毫秒级响应，让 AI 社交体验像面对面交流一样流畅。
          </p>
        </div>
      </SeoSection>

      <SeoFaq title="关于 Elys 社交的常见问题" items={faqItems} />

      <SeoCta
        title="加入 Elys 社交"
        description="获取邀请码，下载 Elys App，开启 AI 社交新体验。Elys 社交让你遇见更多有趣的人。"
        buttonText="获取 Elys 邀请码"
        buttonHref="/"
      />

      <SeoInternalLinks currentPath="/elys-social" />
    </SeoPageLayout>
  )
}
