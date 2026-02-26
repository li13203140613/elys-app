'use client'

import { useState } from 'react'
import { Loader2, ShoppingCart } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useAppSettings } from './AppSettingsProvider'

interface PaymentButtonProps {
  codeId: string
  disabled?: boolean
  onLoadingChange?: (loading: boolean) => void
}

export function PaymentButton({ codeId, disabled, onLoadingChange }: PaymentButtonProps) {
  const [loading, setLoading] = useState(false)
  const { currency, language, t } = useAppSettings()

  async function handlePurchase() {
    setLoading(true)
    onLoadingChange?.(true)

    try {
      const res = await fetch('/api/payment/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codeId, currency, language }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || t.createSessionError)
      }

      window.location.href = data.url
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t.purchaseError)
      setLoading(false)
      onLoadingChange?.(false)
    }
  }

  return (
    <Button
      onClick={handlePurchase}
      disabled={disabled || loading}
      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/20"
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          {t.processing}
        </>
      ) : (
        <>
          <ShoppingCart className="size-4" />
          {t.buyNow}
        </>
      )}
    </Button>
  )
}
