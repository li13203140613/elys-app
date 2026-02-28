import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/seo/SeoPageLayout'
import { SeoHero } from '@/components/seo/SeoHero'
import { SeoSection } from '@/components/seo/SeoSection'
import { SeoFaq } from '@/components/seo/SeoFaq'
import { SeoCta } from '@/components/seo/SeoCta'
import { SeoInternalLinks } from '@/components/seo/SeoInternalLinks'

export const metadata: Metadata = {
  title: 'Elys AI 邀请码 - 什么是 Elys 邀请码',
  description:
    'Elys AI 邀请码是注册 Elys App 的必备凭证。了解什么是 Elys AI 邀请码、为什么需要邀请码、如何获取 Elys AI 邀请码。',
  keywords: [
    'Elys AI 邀请码',
    'elys 邀请码',
    'elys ai 邀请码',
    'elys invitation code',
    '邀请码购买',
  ],
  alternates: { canonical: '/elys-invitation-code' },
}

const faqItems = [
  {
    q: '什么是 Elys AI 邀请码？',
    a: 'Elys AI 邀请码是注册 Elys App 所需的专属激活凭证。每个 Elys AI 邀请码由 6 位字母数字组成，仅限使用一次。输入有效的 Elys AI 邀请码后即可成功注册 Elys 账号。',
  },
  {
    q: 'Elys AI 邀请码多少钱？',
    a: 'Elys AI 邀请码的价格约为 9.9 美元（折合人民币约 71 元）。本站提供 Elys AI 邀请码的官方购买渠道，支持支付宝、微信支付和信用卡付款。',
  },
  {
    q: 'Elys AI 邀请码可以重复使用吗？',
    a: '不可以。每个 Elys AI 邀请码只能使用一次，激活后将与你的 Elys 账号绑定。如果你需要为朋友获取 Elys AI 邀请码，需要额外购买。',
  },
  {
    q: 'Elys AI 邀请码有有效期吗？',
    a: 'Elys AI 邀请码在未使用的情况下长期有效。但建议购买 Elys AI 邀请码后尽快使用，以免遗忘或丢失。购买后请立即复制保存你的 Elys AI 邀请码。',
  },
  {
    q: '在哪里输入 Elys AI 邀请码？',
    a: '下载 Elys App 后，打开应用进入注册页面，你会看到输入 Elys AI 邀请码的输入框。粘贴或输入你的 Elys AI 邀请码，点击确认即可完成注册。',
  },
  {
    q: '购买的 Elys AI 邀请码无法使用怎么办？',
    a: '如果你购买的 Elys AI 邀请码无法使用，请检查是否输入正确（注意大小写）。如确认无误仍无法使用，请联系客服邮箱获取支持。',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function ElysInvitationCodePage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        badge="Elys AI 邀请码"
        title="什么是 Elys AI 邀请码？"
        subtitle="了解 Elys AI 邀请码的作用、获取方式和使用方法，轻松注册 Elys 账号。"
      />

      <SeoSection title="Elys AI 邀请码是什么？">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            <strong>Elys AI 邀请码</strong>是注册{' '}
            <Link href="/elys-ai" className="text-purple-400 hover:text-purple-300 underline">
              Elys AI
            </Link>{' '}
            应用的必备激活凭证。Elys 采用邀请制注册机制，这意味着你需要持有一个有效的 Elys AI 邀请码才能创建账号并开始使用 Elys 的全部功能。
          </p>
          <p>
            每个 Elys AI 邀请码由 6 位字母和数字组成，具有唯一性。当你在 Elys App 注册页面输入 Elys AI 邀请码后，系统会验证该邀请码的有效性，验证通过后你的 Elys 账号即刻激活。每个 Elys AI 邀请码仅可使用一次，使用后将与你的账号永久绑定。
          </p>
        </div>
      </SeoSection>

      <SeoSection title="为什么需要 Elys AI 邀请码？">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: '🛡️',
              title: '保障社区质量',
              desc: 'Elys AI 邀请码机制确保每一位新用户都经过筛选，维护高质量的社区环境，让你在 Elys 中遇到真正有价值的社交对象。',
            },
            {
              icon: '📈',
              title: '控制增长节奏',
              desc: '通过 Elys AI 邀请码控制用户增长速度，确保服务器性能和用户体验。Elys 团队希望每位用户都能获得最佳的 AI 社交体验。',
            },
            {
              icon: '✨',
              title: '营造稀缺价值',
              desc: '持有 Elys AI 邀请码意味着你是 Elys 早期用户的一员。这种邀请制为 Elys 社区赋予了独特的归属感和价值感。',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SeoSection>

      <SeoSection title="如何获取 Elys AI 邀请码？">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            获取 Elys AI 邀请码最便捷的方式是通过本站购买。我们提供正规的 Elys AI 邀请码购买渠道，支持支付宝、微信支付和国际信用卡，付款后立即获取完整的 Elys AI 邀请码。
          </p>
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-3">本站购买 Elys AI 邀请码的优势</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>付款后即时获取 Elys AI 邀请码，无需等待</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>支持支付宝、微信支付、Visa/Mastercard 等多种支付方式</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>Elys AI 邀请码由 Stripe 安全支付保障</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>匿名购买，无需注册账号</span>
              </li>
            </ul>
          </div>
          <p>
            除了购买，你也可以关注 Elys 官方社交媒体账号，不定期会有免费 Elys AI 邀请码赠送活动。此外，已注册的 Elys 用户有时也会获得额外的 Elys AI 邀请码可以分享给朋友。
          </p>
        </div>
      </SeoSection>

      <SeoSection title="Elys AI 邀请码使用注意事项">
        <div className="space-y-3 text-zinc-300 leading-relaxed">
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>每个 Elys AI 邀请码仅限使用一次，使用后将失效</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>购买 Elys AI 邀请码后请立即复制保存，避免页面关闭后丢失</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>输入 Elys AI 邀请码时请注意区分大小写</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>请勿将你的 Elys AI 邀请码分享给他人，以免被抢先使用</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span>
                使用 Elys AI 邀请码前，请先{' '}
                <Link href="/download" className="text-purple-400 hover:text-purple-300 underline">
                  下载 Elys App
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </SeoSection>

      <SeoFaq title="关于 Elys AI 邀请码的常见问题" items={faqItems} />

      <SeoCta
        title="立即购买 Elys AI 邀请码"
        description="一键购买 Elys AI 邀请码，付款后即时获取。支持支付宝、微信支付和信用卡，安全便捷。"
        buttonText="购买 Elys AI 邀请码"
        buttonHref="/"
      />

      <SeoInternalLinks currentPath="/elys-invitation-code" />
    </SeoPageLayout>
  )
}
