'use client'

import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Copy, Loader2, XCircle } from 'lucide-react'
import { toast } from 'sonner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { useAppSettings } from '@/components/AppSettingsProvider'

type PaymentStatus = 'loading' | 'pending' | 'completed' | 'expired' | 'failed'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const { t } = useAppSettings()

  const [status, setStatus] = useState<PaymentStatus>('loading')
  const [code, setCode] = useState<string | null>(null)
  const [pollCount, setPollCount] = useState(0)

  useEffect(() => {
    if (!sessionId) {
      setStatus('failed')
      return
    }

    async function checkOrder() {
      try {
        const res = await fetch(`/api/order/${sessionId}`)
        const data = await res.json()

        if (data.status === 'completed' && data.code) {
          setStatus('completed')
          setCode(data.code)
          return
        }

        if (data.status === 'pending') {
          setStatus('pending')
          return
        }

        if (data.status === 'expired') {
          setStatus('expired')
          return
        }

        setStatus('failed')
      } catch {
        setStatus('failed')
      }
    }

    checkOrder()
  }, [sessionId, pollCount])

  useEffect(() => {
    if (status !== 'pending') {
      return
    }

    if (pollCount >= 30) {
      setStatus('failed')
      return
    }

    const timer = window.setTimeout(() => {
      setPollCount((prev) => prev + 1)
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [status, pollCount])

  function copyCode() {
    if (!code) {
      return
    }
    navigator.clipboard.writeText(code)
    toast.success(t.copySuccess)
  }

  return (
    <div className="max-w-md w-full text-center">
      {(status === 'loading' || status === 'pending') && (
        <div className="space-y-6">
          <Loader2 className="size-16 text-purple-400 animate-spin mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-white">{t.successCheckingTitle}</h1>
            <p className="text-zinc-400 mt-2">{t.successCheckingDesc}</p>
          </div>
        </div>
      )}

      {status === 'completed' && code && (
        <div className="space-y-8">
          <div className="space-y-4">
            <CheckCircle className="size-16 text-emerald-400 mx-auto" />
            <h1 className="text-2xl font-bold text-white">{t.successTitle}</h1>
            <p className="text-zinc-400">{t.successDesc}</p>
          </div>

          <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8">
            <div className="flex gap-3 justify-center">
              {code.split('').map((char, i) => (
                <div
                  key={i}
                  className="w-12 h-16 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center"
                >
                  <span className="text-3xl font-mono font-bold text-emerald-400">{char}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={copyCode}
              variant="outline"
              className="mt-6 w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
            >
              <Copy className="size-4" />
              {t.copyCode}
            </Button>
          </div>

          <div className="space-y-2 text-sm text-zinc-500">
            <p>{t.keepSafe}</p>
            <p>{t.useHint}</p>
          </div>

          <Link href="/">
            <Button variant="ghost" className="text-zinc-400 hover:text-white">
              {t.backHome}
            </Button>
          </Link>

          <p className="text-sm text-zinc-500">
            {t.supportPrefix}{' '}
            <a href="mailto:lixiaofei160@gmail.com" className="text-purple-400 hover:text-purple-300 underline">
              lixiaofei160@gmail.com
            </a>{' '}
            {t.supportSuffix}
          </p>
        </div>
      )}

      {status === 'expired' && (
        <div className="space-y-6">
          <XCircle className="size-16 text-amber-400 mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-white">{t.expiredTitle}</h1>
            <p className="text-zinc-400 mt-2">{t.expiredDesc}</p>
          </div>
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white">
              {t.backHome}
            </Button>
          </Link>
        </div>
      )}

      {status === 'failed' && (
        <div className="space-y-6">
          <XCircle className="size-16 text-red-400 mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-white">{t.failedTitle}</h1>
            <p className="text-zinc-400 mt-2">{!sessionId ? t.invalidLink : t.timeoutDesc}</p>
          </div>
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white">
              {t.backHome}
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <Suspense
          fallback={
            <div className="text-center">
              <Loader2 className="size-16 text-purple-400 animate-spin mx-auto" />
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
