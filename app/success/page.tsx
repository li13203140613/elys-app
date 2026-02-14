'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, Copy, Loader2, XCircle } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const [status, setStatus] = useState<'loading' | 'completed' | 'pending' | 'failed'>('loading')
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
        } else if (data.status === 'pending') {
          setStatus('pending')
          setPollCount(prev => prev + 1)
        } else {
          setStatus('failed')
        }
      } catch {
        setStatus('failed')
      }
    }

    checkOrder()
  }, [sessionId, pollCount])

  // 轮询：pending 状态每 2 秒检查一次，最多 30 次
  useEffect(() => {
    if (status !== 'pending' || pollCount >= 30) return

    const timer = setTimeout(() => {
      setPollCount(prev => prev + 1)
    }, 2000)

    return () => clearTimeout(timer)
  }, [status, pollCount])

  function copyCode() {
    if (code) {
      navigator.clipboard.writeText(code)
      toast.success('邀请码已复制到剪贴板')
    }
  }

  return (
    <div className="max-w-md w-full text-center">
      {status === 'loading' || status === 'pending' ? (
        <div className="space-y-6">
          <Loader2 className="size-16 text-purple-400 animate-spin mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-white">正在确认支付...</h1>
            <p className="text-zinc-400 mt-2">请稍候，我们正在验证您的支付状态</p>
          </div>
        </div>
      ) : status === 'completed' && code ? (
        <div className="space-y-8">
          <div className="space-y-4">
            <CheckCircle className="size-16 text-emerald-400 mx-auto" />
            <h1 className="text-2xl font-bold text-white">Elys 邀请码购买成功!</h1>
            <p className="text-zinc-400">您的 Elys 邀请码如下，请妥善保存</p>
          </div>

          <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8">
            <div className="flex gap-3 justify-center">
              {code.split('').map((char, i) => (
                <div
                  key={i}
                  className="w-12 h-16 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center"
                >
                  <span className="text-3xl font-mono font-bold text-emerald-400">
                    {char}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={copyCode}
              variant="outline"
              className="mt-6 w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
            >
              <Copy className="size-4" />
              复制邀请码
            </Button>
          </div>

          <div className="space-y-2 text-sm text-zinc-500">
            <p>请妥善保管您的 Elys 邀请码</p>
            <p>在 Elys App 注册页面输入此邀请码即可激活</p>
          </div>

          <Link href="/">
            <Button variant="ghost" className="text-zinc-400 hover:text-white">
              返回首页
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <XCircle className="size-16 text-red-400 mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-white">支付未完成</h1>
            <p className="text-zinc-400 mt-2">
              {!sessionId ? '无效的访问链接' : '支付验证超时，请联系客服'}
            </p>
          </div>
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white">
              返回首页
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
              <p className="text-zinc-400 mt-4">加载中...</p>
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
