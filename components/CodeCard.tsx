'use client'

import { useState } from 'react'
import { CodeDigit } from './CodeDigit'
import { PaymentButton } from './PaymentButton'
import { useAppSettings } from './AppSettingsProvider'

interface CodeCardProps {
  id: string
  maskedCode: string
  price: number
  index: number
}

export function CodeCard({ id, maskedCode, price, index }: CodeCardProps) {
  const [isPurchasing, setIsPurchasing] = useState(false)
  const chars = maskedCode.split('')
  const { formatPriceFromUsd, t } = useAppSettings()

  return (
    <div
      className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm p-6 transition-all hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-zinc-500 font-mono">
            ELYS-{String(index + 1).padStart(3, '0')}
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
            {t.cardAvailable}
          </span>
        </div>

        <div className="flex gap-1.5 sm:gap-2 justify-center my-6">
          {chars.map((char, i) => (
            <CodeDigit key={i} char={char} delay={i * 0.8} masked={char === '*'} />
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{formatPriceFromUsd(price)}</span>
            <span className="text-xs text-zinc-500">{t.perCode}</span>
          </div>

          <PaymentButton
            codeId={id}
            disabled={isPurchasing}
            onLoadingChange={setIsPurchasing}
          />
        </div>
      </div>
    </div>
  )
}
