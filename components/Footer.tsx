'use client'

import { useAppSettings } from './AppSettingsProvider'

export function Footer() {
  const { t } = useAppSettings()

  return (
    <footer className="border-t border-zinc-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>{t.footerLeft}</p>
          <p>{t.footerRight}</p>
        </div>
      </div>
    </footer>
  )
}
