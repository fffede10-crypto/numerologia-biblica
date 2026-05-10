'use client'

import { CheckCircle2 } from 'lucide-react'

interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <div
      aria-live="polite"
      className={`fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-green-600 text-white text-sm font-medium shadow-lg shadow-green-500/20 whitespace-nowrap">
        <CheckCircle2 size={16} className="shrink-0" />
        {message}
      </div>
    </div>
  )
}
