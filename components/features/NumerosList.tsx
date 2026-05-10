'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Star, CheckCircle2 } from 'lucide-react'
import { NumeroBiblico } from '@/types'
import { Badge } from '@/components/ui/Badge'

interface NumerosListProps {
  numeros: NumeroBiblico[]
  favoritosIds: number[]
  visitadosIds: number[]
}

type BadgeVariant = 'basico' | 'intermedio' | 'avanzado' | 'maestro' | 'default'

const NIVELES = [
  { key: 'Todos',      label: 'Todos' },
  { key: 'basico',     label: 'Básico' },
  { key: 'intermedio', label: 'Intermedio' },
  { key: 'avanzado',   label: 'Avanzado' },
  { key: 'maestro',    label: 'Maestro' },
]

const NIVEL_LABELS: Record<string, string> = {
  basico:     'Básico',
  intermedio: 'Intermedio',
  avanzado:   'Avanzado',
  maestro:    'Maestro',
}

export default function NumerosList({ numeros, favoritosIds, visitadosIds }: NumerosListProps) {
  const [query, setQuery] = useState('')
  const [nivel, setNivel] = useState('Todos')

  const filtrados = useMemo(() => {
    let result = numeros
    const q = query.toLowerCase().trim()
    if (q) {
      result = result.filter(
        (n) =>
          n.titulo.toLowerCase().includes(q) ||
          String(n.numero).includes(q) ||
          n.significado_principal.toLowerCase().includes(q)
      )
    }
    if (nivel !== 'Todos') {
      result = result.filter((n) => n.nivel_profundidad === nivel)
    }
    return result
  }, [numeros, query, nivel])

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500" />
        <input
          type="text"
          placeholder="Buscar por número o nombre…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 rounded-xl pl-10 pr-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-600 shadow-sm transition-colors text-sm"
        />
      </div>

      {/* Level filter pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {NIVELES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setNivel(key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              nivel === key
                ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                : 'bg-white dark:bg-[#1A1035] text-gray-600 dark:text-slate-400 border-gray-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filtrados.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-slate-500">
          <p className="text-lg">Sin resultados para &ldquo;{query}&rdquo;</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtrados.map((numero) => {
            const isFav = favoritosIds.includes(numero.id)
            const isMaster = numero.numero === 11 || numero.numero === 22 || numero.numero === 33
            const nivelVariant = (numero.nivel_profundidad as BadgeVariant | null) ?? 'default'

            const isVisto = visitadosIds.includes(numero.id)

            return (
              <Link
                key={numero.id}
                href={`/numeros/${numero.id}`}
                className="group relative flex flex-col gap-3 p-4 bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-600/60 rounded-xl transition-all hover:shadow-md hover:scale-[1.02]"
              >
                {isFav && (
                  <Star size={12} className="absolute top-2.5 right-2.5 text-amber-500 fill-amber-500" />
                )}
                {isVisto && (
                  <CheckCircle2 size={12} className="absolute top-2.5 left-2.5 text-green-500 fill-green-100 dark:fill-green-900/40" />
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl transition-all group-hover:scale-105 shadow-md ${
                    isMaster
                      ? 'bg-amber-500 text-white shadow-amber-500/20'
                      : 'bg-purple-600 text-white shadow-purple-500/20'
                  }`}
                >
                  {numero.numero}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{numero.titulo}</p>
                  {numero.nivel_profundidad && nivelVariant !== 'default' && (
                    <div className="mt-1.5">
                      <Badge label={NIVEL_LABELS[numero.nivel_profundidad] ?? numero.nivel_profundidad} variant={nivelVariant} />
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      )}

      <p className="text-center text-xs text-gray-400 dark:text-slate-600">
        {filtrados.length} de {numeros.length} números
      </p>
    </div>
  )
}
