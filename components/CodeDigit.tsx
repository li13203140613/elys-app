'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

// 所有可能的字符
const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

interface CodeDigitProps {
  /** 真实字符 (用于停止位置的计算) */
  char: string
  /** 动画延迟 (秒) */
  delay?: number
  /** 是否遮蔽 (最后一位) */
  masked?: boolean
  /** 是否已揭示 */
  revealed?: boolean
}

export function CodeDigit({ char, delay = 0, masked = false, revealed = false }: CodeDigitProps) {
  const [isSpinning, setIsSpinning] = useState(true)
  const stripRef = useRef<HTMLDivElement>(null)

  // 找到目标字符在列表中的索引
  const targetIndex = CHARS.indexOf(char.toUpperCase())

  useEffect(() => {
    if (masked && !revealed) return

    const timer = setTimeout(() => {
      setIsSpinning(false)
    }, 2000 + delay * 1000)

    return () => clearTimeout(timer)
  }, [delay, masked, revealed])

  // 遮蔽状态
  if (masked && !revealed) {
    return (
      <div className="relative w-10 h-14 sm:w-12 sm:h-16 overflow-hidden rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-mono font-bold text-purple-400">*</span>
      </div>
    )
  }

  return (
    <div className={cn(
      'relative w-10 h-14 sm:w-12 sm:h-16 overflow-hidden rounded-lg border flex items-center justify-center',
      'bg-zinc-800/80 border-zinc-700/50',
      isSpinning && 'animate-glow-pulse'
    )}>
      {isSpinning ? (
        <div
          ref={stripRef}
          className="absolute flex flex-col items-center"
          style={{
            animation: `slotScroll ${1.5 + delay * 0.3}s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
            animationDelay: `${delay * 0.15}s`,
          }}
        >
          {/* 生成多次循环的字符列表实现滚动效果 */}
          {Array.from({ length: 5 }, () => CHARS.split('')).flat().map((c, i) => (
            <div
              key={i}
              className="w-10 h-14 sm:w-12 sm:h-16 flex items-center justify-center shrink-0"
            >
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white/60">
                {c}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <span className="text-2xl sm:text-3xl font-mono font-bold text-white animate-fade-in">
          {char}
        </span>
      )}
    </div>
  )
}
