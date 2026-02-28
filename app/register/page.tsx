import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/seo/SeoPageLayout'
import { SeoHero } from '@/components/seo/SeoHero'
import { SeoSection } from '@/components/seo/SeoSection'
import { SeoFaq } from '@/components/seo/SeoFaq'
import { SeoCta } from '@/components/seo/SeoCta'
import { SeoInternalLinks } from '@/components/seo/SeoInternalLinks'

export const metadata: Metadata = {
  title: 'Elys 注册 - 注册教程与邀请码使用指南',
  description:
    'Elys 注册完整教程：获取邀请码、下载 App、完成注册三步搞定。详细图文指南教你如何快速注册 Elys 账号。',
  keywords: ['Elys 注册', 'elys 注册', 'elys 注册教程', 'elys 怎么注册', 'elys 邀请码注册'],
  alternates: { canonical: '/register' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Elys 注册教程 - 如何注册 Elys 账号',
  description: '三步完成 Elys 注册：获取邀请码、下载 Elys App、输入邀请码注册。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: '获取 Elys 邀请码',
      text: '在本站购买 Elys 邀请码，付款后立即获取完整邀请码。',
      url: 'https://www.elys-app.com',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '下载 Elys App',
      text: '前往 App Store 搜索"Elys"下载安装 Elys App。',
      url: 'https://apps.apple.com/app/elys-ai/id6741419484',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '输入邀请码完成注册',
      text: '打开 Elys App，在注册页面输入你的邀请码，即可完成 Elys 注册。',
    },
  ],
}

const faqItems = [
  {
    q: 'Elys 注册需要什么条件？',
    a: 'Elys 注册唯一需要的就是一个有效的 Elys 邀请码。Elys 采用邀请制注册，没有邀请码无法完成 Elys 注册。你可以在本站购买 Elys 邀请码。',
  },
  {
    q: 'Elys 注册需要手机号吗？',
    a: 'Elys 注册可以使用手机号或邮箱。在 Elys 注册过程中，你需要先输入邀请码验证，然后选择手机号或邮箱方式完成 Elys 注册。',
  },
  {
    q: 'Elys 注册失败怎么办？',
    a: '如果 Elys 注册失败，请检查：1. 邀请码是否正确输入（注意大小写）；2. 邀请码是否已被使用；3. 网络连接是否正常。如果问题持续，请联系客服获取帮助。',
  },
  {
    q: 'Elys 注册后可以修改信息吗？',
    a: '完成 Elys 注册后，你可以在 App 的设置页面修改个人信息，包括头像、昵称、简介等。部分信息（如注册邮箱/手机号）可能需要验证后才能修改。',
  },
  {
    q: '一个 Elys 邀请码可以注册几个账号？',
    a: '一个 Elys 邀请码只能用于一次 Elys 注册。如果你需要注册多个 Elys 账号，需要分别购买对应数量的邀请码。',
  },
]

export default function RegisterPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        badge="Elys 注册教程"
        title="Elys 注册 — 三步完成注册"
        subtitle="从获取邀请码到成功注册 Elys，只需简单三步。跟随本教程轻松完成 Elys 注册。"
      />

      <SeoSection title="Elys 注册三步流程">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: '1',
              title: '获取 Elys 邀请码',
              desc: '在本站购买 Elys 邀请码，支持支付宝、微信支付和信用卡。付款后立即获取完整邀请码，复制保存备用。',
              link: { text: '购买邀请码 →', href: '/' },
            },
            {
              step: '2',
              title: '下载 Elys App',
              desc: '前往 App Store 搜索"Elys"并下载安装。Elys App 免费下载，支持 iOS 16.0 及以上版本。',
              link: { text: '查看下载指南 →', href: '/download' },
            },
            {
              step: '3',
              title: '输入邀请码注册',
              desc: '打开 Elys App，在注册页面输入你的邀请码。验证通过后，设置手机号/邮箱和密码，完成 Elys 注册。',
              link: null,
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="absolute -top-3 -left-3 size-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {item.step}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">{item.desc}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    {item.link.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </SeoSection>

      <SeoSection title="Elys 注册详细步骤说明">
        <div className="space-y-6">
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-zinc-100">第一步：获取 Elys 邀请码</h3>
            <p>
              Elys 注册的第一步是获取一个有效的 Elys 邀请码。在本站首页，你可以看到当前可用的 Elys 邀请码。点击"立即购买"按钮，选择支付方式（支付宝、微信支付或信用卡），完成付款后页面会立即显示完整的 Elys 邀请码。请务必复制并妥善保存这个邀请码，它是完成 Elys 注册的关键。
            </p>
          </div>

          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-zinc-100">第二步：下载 Elys App</h3>
            <p>
              获取 Elys 邀请码后，你需要{' '}
              <Link href="/download" className="text-purple-400 hover:text-purple-300 underline">
                下载 Elys App
              </Link>
              。打开 App Store，搜索"Elys"，找到 Elys AI 应用并下载安装。Elys App 免费下载，不会产生任何费用。下载完成后打开 Elys App，你会看到注册页面。
            </p>
          </div>

          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-zinc-100">第三步：输入邀请码完成 Elys 注册</h3>
            <p>
              在 Elys App 的注册页面，你会看到一个邀请码输入框。将之前复制的 Elys 邀请码粘贴到输入框中（注意区分大小写），点击确认。系统验证邀请码有效后，你需要设置手机号或邮箱以及登录密码。全部填写完成后，点击注册按钮，你的 Elys 账号就创建成功了。
            </p>
            <p>
              完成 Elys 注册后，你可以开始设置个人资料，包括头像、昵称和兴趣标签等。这些信息将帮助{' '}
              <Link href="/elys-ai" className="text-purple-400 hover:text-purple-300 underline">
                Elys AI
              </Link>{' '}
              更好地为你匹配社交对象。
            </p>
          </div>
        </div>
      </SeoSection>

      <SeoFaq title="关于 Elys 注册的常见问题" items={faqItems} />

      <SeoCta
        title="准备好注册 Elys 了吗？"
        description="第一步：获取 Elys 邀请码。付款后即时获取，然后按照教程轻松完成 Elys 注册。"
        buttonText="获取邀请码，开始注册"
        buttonHref="/"
      />

      <SeoInternalLinks currentPath="/register" />
    </SeoPageLayout>
  )
}
