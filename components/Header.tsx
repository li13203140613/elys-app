import { Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-zinc-800/50 backdrop-blur-md bg-zinc-950/80 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <Sparkles className="size-4 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Elys
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <span className="text-sm text-zinc-400">Elys 邀请码</span>
        </nav>
      </div>
    </header>
  )
}
