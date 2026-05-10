'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

interface FavoriteButtonProps {
  numeroBiblicoId: number
  initialFav: boolean
}

export default function FavoriteButton({ numeroBiblicoId, initialFav }: FavoriteButtonProps) {
  const [isFav, setIsFav] = useState(initialFav)
  const [loading, setLoading] = useState(false)

  async function toggle() {
    if (loading) return
    setLoading(true)
    const method = isFav ? 'DELETE' : 'POST'
    try {
      const res = await fetch('/api/favoritos', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numero_id: numeroBiblicoId }),
      })
      if (res.ok) setIsFav(!isFav)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium text-sm transition-all disabled:opacity-50 ${
        isFav
          ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-500/20'
          : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-600/60 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      <Heart
        size={16}
        className={`transition-all ${isFav ? 'fill-current' : ''} ${loading ? 'animate-pulse' : ''}`}
      />
      {isFav ? 'En favoritos' : 'Agregar a favoritos'}
    </button>
  )
}
