import Link from 'next/link'

const SEO_LINKS = [
  { href: '/elys-ai', label: 'Elys AI' },
  { href: '/elys-app', label: 'Elys App' },
  { href: '/download', label: 'Elys 下载' },
  { href: '/elys-invitation-code', label: 'Elys 邀请码' },
  { href: '/register', label: 'Elys 注册' },
  { href: '/elys-social', label: 'Elys 社交' },
  { href: '/elys-invite-code', label: 'Elys Invite Code' },
]

interface SeoInternalLinksProps {
  currentPath?: string
}

export function SeoInternalLinks({ currentPath }: SeoInternalLinksProps) {
  return (
    <nav className="max-w-4xl mx-auto px-4 py-8 border-t border-zinc-800/50">
      <p className="text-sm text-zinc-500 mb-3">了解更多</p>
      <div className="flex flex-wrap gap-3">
        {SEO_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
              currentPath === link.href
                ? 'border-purple-500/40 text-purple-300 bg-purple-500/10'
                : 'border-zinc-800 text-zinc-400 hover:text-purple-300 hover:border-purple-500/30'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
