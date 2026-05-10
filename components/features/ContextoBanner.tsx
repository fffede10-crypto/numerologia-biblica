'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Compass, X, ChevronRight } from 'lucide-react'

export default function ContextoBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="relative flex items-start gap-3 p-4 rounded-xl border border-purple-200 dark:border-purple-800/30 border-l-4 border-l-purple-400 bg-purple-50 dark:bg-purple-950/20">
      <Compass size={18} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white">Personalizá tu experiencia</p>
        <p className="text-xs text-gray-600 dark:text-slate-400 mt-0.5 leading-relaxed">
          Contanos en qué área de tu vida buscás orientación para que el devocional y las reflexiones sean más relevantes para vos.
        </p>
        <Link
          href="/onboarding/situacion"
          className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          Completar ahora <ChevronRight size={12} />
        </Link>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Cerrar banner"
        className="shrink-0 p-1 rounded text-gray-400 dark:text-slate-600 hover:text-gray-600 dark:hover:text-slate-400 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  )
}
