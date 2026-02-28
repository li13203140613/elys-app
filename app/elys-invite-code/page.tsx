import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/seo/SeoPageLayout'
import { SeoHero } from '@/components/seo/SeoHero'
import { SeoSection } from '@/components/seo/SeoSection'
import { SeoFaq } from '@/components/seo/SeoFaq'
import { SeoCta } from '@/components/seo/SeoCta'
import { SeoInternalLinks } from '@/components/seo/SeoInternalLinks'

export const metadata: Metadata = {
  title: { absolute: 'Elys Invite Code - How to Get an Elys Invitation Code' },
  description:
    'Learn what an Elys invite code is, why you need one, and how to get an Elys invite code. Buy your Elys invite code instantly and start using the AI social app.',
  keywords: [
    'elys invite code',
    'elys invitation code',
    'elys code',
    'buy elys invite code',
    'elys app invite code',
  ],
  alternates: { canonical: '/elys-invite-code' },
}

const faqItems = [
  {
    q: 'What is an Elys invite code?',
    a: 'An Elys invite code is a unique 6-character activation key required to register on the Elys app. Elys uses an invite-only system, so you need a valid Elys invite code to create your account and access all features. Each Elys invite code can only be used once.',
  },
  {
    q: 'Why do I need an Elys invite code?',
    a: 'Elys requires an invite code to maintain community quality and ensure a great user experience. The Elys invite code system helps the team manage growth and provide premium AI social features to every user. Without an Elys invite code, you cannot complete registration.',
  },
  {
    q: 'How much does an Elys invite code cost?',
    a: 'An Elys invite code costs approximately $9.90 USD. You can purchase an Elys invite code on this website using credit card, Alipay, or WeChat Pay. Your Elys invite code is delivered instantly after payment.',
  },
  {
    q: 'How do I use my Elys invite code?',
    a: 'After purchasing your Elys invite code, download the Elys app from the App Store. Open the app, go to the registration page, and enter your Elys invite code in the invitation code field. Once verified, complete your profile setup to finish registration.',
  },
  {
    q: 'Can I share my Elys invite code with others?',
    a: 'Each Elys invite code can only be used once. Once you use your Elys invite code to register, it becomes permanently linked to your account. If your friends want to join Elys, they will need to get their own Elys invite code.',
  },
  {
    q: 'What if my Elys invite code does not work?',
    a: 'If your Elys invite code is not working, please double-check that you have entered it correctly (codes are case-sensitive). If the Elys invite code was already used by someone else, it will no longer be valid. Contact our support team for assistance.',
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

export default function ElysInviteCodePage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        badge="Elys Invite Code"
        title="How to Get an Elys Invite Code"
        subtitle="Everything you need to know about the Elys invite code — what it is, why you need one, and how to get started."
      />

      <SeoSection title="What Is an Elys Invite Code?">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            An <strong>Elys invite code</strong> is a unique activation key that you need to register on the Elys app. Elys is a next-generation{' '}
            <Link href="/elys-ai" className="text-purple-400 hover:text-purple-300 underline">
              AI social application
            </Link>{' '}
            that uses an invite-only registration system. Without a valid Elys invite code, you cannot create an account or access any of the app&apos;s features.
          </p>
          <p>
            Each Elys invite code consists of 6 alphanumeric characters and is unique. When you enter your Elys invite code on the registration page, the system verifies its validity. Once verified, your Elys invite code is permanently bound to your account and cannot be reused.
          </p>
        </div>
      </SeoSection>

      <SeoSection title="Why Do You Need an Elys Invite Code?">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: '🛡️',
              title: 'Community Quality',
              desc: 'The Elys invite code system ensures that every new user is vetted, maintaining a high-quality community where meaningful connections happen.',
            },
            {
              icon: '📈',
              title: 'Controlled Growth',
              desc: 'By using Elys invite codes, the team can manage user growth to ensure server performance and a smooth AI social experience for everyone.',
            },
            {
              icon: '✨',
              title: 'Early Adopter Value',
              desc: 'Holding an Elys invite code means you are among the earliest users of this innovative AI social platform, with exclusive access to cutting-edge features.',
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

      <SeoSection title="How to Get an Elys Invite Code">
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            The easiest way to get an Elys invite code is to purchase one on this website. We offer a reliable and instant Elys invite code purchasing experience with multiple payment options.
          </p>
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-3">
              Why Buy Your Elys Invite Code Here?
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>Instant delivery — get your Elys invite code immediately after payment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>Multiple payment methods — credit card, Alipay, WeChat Pay</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>Secure checkout powered by Stripe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>No account required — anonymous purchase of your Elys invite code</span>
              </li>
            </ul>
          </div>
        </div>
      </SeoSection>

      <SeoSection title="How to Use Your Elys Invite Code">
        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Purchase Your Elys Invite Code',
              desc: 'Visit our homepage and buy an Elys invite code. After payment, the full Elys invite code will be displayed on screen. Copy and save it immediately.',
            },
            {
              step: '2',
              title: 'Download the Elys App',
              desc: 'Go to the App Store and search for "Elys" to download the app. The Elys app is free to download and requires iOS 16.0 or later.',
            },
            {
              step: '3',
              title: 'Enter Your Elys Invite Code',
              desc: 'Open the Elys app, navigate to the registration page, and enter your Elys invite code. After verification, set up your profile to complete registration.',
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

      <SeoFaq title="Frequently Asked Questions About Elys Invite Codes" items={faqItems} />

      <SeoCta
        title="Get Your Elys Invite Code Now"
        description="Purchase an Elys invite code instantly. Secure payment, immediate delivery. Start your AI social journey today."
        buttonText="Buy Elys Invite Code"
        buttonHref="/en"
      />

      <SeoInternalLinks currentPath="/elys-invite-code" />
    </SeoPageLayout>
  )
}
