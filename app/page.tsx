import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CodeGrid } from '@/components/CodeGrid'
import { Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid">
      <Header />

      <main className="flex-1">
        {/* Hero 区域 */}
        <section className="relative overflow-hidden">
          {/* 背景光效 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 mb-6">
              <Sparkles className="size-3.5 text-purple-400" />
              <span className="text-sm text-purple-300">Elys 邀请码限量发售中</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                购买 Elys 邀请码
              </span>
            </h1>

            <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
              Elys — 新一代 AI 社交应用，¥9.9 获取 Elys 邀请码，即刻加入
            </p>

            <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">
              支持支付宝 / 微信支付，付款后立即显示完整 Elys 邀请码
            </p>
          </div>
        </section>

        {/* 邀请码列表 */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <CodeGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}
