'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { AppCurrency, AppLanguage, CURRENCY_OPTIONS, LANGUAGE_OPTIONS } from '@/lib/i18n'
import { useAppSettings } from './AppSettingsProvider'

export function Header() {
  const { language, currency, setLanguage, setCurrency, t } = useAppSettings()

  return (
    <header className="border-b border-zinc-800/50 backdrop-blur-md bg-zinc-950/80 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 min-h-16 py-2 flex flex-col gap-2 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="size-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Elys
            </span>
          </Link>
          <nav className="hidden sm:flex items-center gap-3 ml-4 border-l border-zinc-800 pl-4">
            <Link href="/" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              {language === 'en' ? 'Buy Elys Invite Code' : '购买 Elys 邀请码'}
            </Link>
            <Link href="/elys-ai" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              {language === 'en' ? 'About Elys' : '关于 Elys'}
            </Link>
            <Link href="/download" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              {language === 'en' ? 'Download' : 'Elys 下载'}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span>{t.languageLabel}</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as AppLanguage)}
              className="h-8 rounded-md border border-zinc-700 bg-zinc-900 px-2 text-xs text-zinc-100 outline-none focus:border-purple-500"
            >
              {LANGUAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span>{t.currencyLabel}</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as AppCurrency)}
              className="h-8 rounded-md border border-zinc-700 bg-zinc-900 px-2 text-xs text-zinc-100 outline-none focus:border-purple-500"
            >
              {CURRENCY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </header>
  )
}
