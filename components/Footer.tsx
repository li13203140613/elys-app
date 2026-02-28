'use client'

import Link from 'next/link'
import { useAppSettings } from './AppSettingsProvider'

const FOOTER_LINKS = [
  { href: '/elys-ai', label: 'Elys AI' },
  { href: '/elys-app', label: 'Elys App' },
  { href: '/download', label: '下载' },
  { href: '/elys-invitation-code', label: '邀请码' },
  { href: '/register', label: '注册' },
  { href: '/elys-social', label: '社交' },
  { href: '/elys-invite-code', label: 'Invite Code' },
]

export function Footer() {
  const { t } = useAppSettings()

  return (
    <footer className="border-t border-zinc-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 hover:text-purple-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>{t.footerLeft}</p>
          <p>{t.footerRight}</p>
        </div>
      </div>
    </footer>
  )
}
