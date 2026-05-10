'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ChevronRight, BookOpen } from 'lucide-react'
import { NumeroBiblico } from '@/types'

interface FavoritoItem {
  id: string
  numero_id: number
  numero: NumeroBiblico
}

interface FavoritosGridProps {
  items: FavoritoItem[]
}

export default function FavoritosGrid({ items: initialItems }: FavoritosGridProps) {
  const [items, setItems] = useState(initialItems)
  const [removing, setRemoving] = useState<Set<number>>(new Set())

  async function handleRemove(numeroBiblicoId: number) {
    setRemoving((prev) => new Set(prev).add(numeroBiblicoId))
    try {
      const res = await fetch('/api/favoritos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numero_id: numeroBiblicoId }),
      })
      if (res.ok) {
        setItems((prev) => prev.filter((item) => item.numero_id !== numeroBiblicoId))
      }
    } finally {
      setRemoving((prev) => {
        const next = new Set(prev)
        next.delete(numeroBiblicoId)
        return next
      })
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 flex items-center justify-center">
          <Heart size={28} className="text-gray-400 dark:text-slate-600" />
        </div>
        <div>
          <p className="text-gray-700 dark:text-slate-300 font-medium">Aún no tenés favoritos</p>
          <p className="text-gray-500 dark:text-slate-500 text-sm mt-1">
            Explorá la biblioteca y guardá los números que más te resuenen.
          </p>
        </div>
        <Link
          href="/numeros"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm mt-2"
        >
          <BookOpen size={16} /> Explorar biblioteca
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map(({ numero_id, numero }) => {
        const isMaster = numero.numero === 11 || numero.numero === 22 || numero.numero === 33
        const isRemoving = removing.has(numero_id)

        return (
          <div
            key={numero_id}
            className={`group flex items-center gap-4 bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-700/60 rounded-xl p-4 transition-all hover:shadow-md ${
              isRemoving ? 'opacity-50 scale-95' : ''
            }`}
          >
            {/* Badge numérico */}
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 shadow-md ${
                isMaster
                  ? 'bg-amber-500 text-white shadow-amber-500/20'
                  : 'bg-purple-600 text-white shadow-purple-500/20'
              }`}
            >
              {numero.numero}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{numero.titulo}</p>
              <p className="text-xs text-gray-500 dark:text-slate-500 line-clamp-1 mt-0.5">
                {numero.significado_principal}
              </p>
              {isMaster && (
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">Número Maestro</span>
              )}
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => handleRemove(numero_id)}
                disabled={isRemoving}
                aria-label="Quitar de favoritos"
                className="p-2 rounded-lg text-gray-400 dark:text-slate-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors disabled:opacity-40"
              >
                <Heart size={16} className="fill-current" />
              </button>
              <Link
                href={`/numeros/${numero.id}`}
                className="p-2 rounded-lg text-gray-400 dark:text-slate-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              >
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
