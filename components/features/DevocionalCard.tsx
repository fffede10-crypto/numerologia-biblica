'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Loader2, BookOpen, ChevronRight } from 'lucide-react'
import { NumeroBiblico } from '@/types'
import { Card } from '@/components/ui/Card'
import ShareButton from '@/components/ui/ShareButton'

interface DevocionalCardProps {
  numero: NumeroBiblico
  completadoHoy: boolean
  streak: number
}

export default function DevocionalCard({ numero, completadoHoy, streak }: DevocionalCardProps) {
  const [completado, setCompletado] = useState(completadoHoy)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const isMaster = numero.numero === 11 || numero.numero === 22 || numero.numero === 33

  async function marcarCompletado() {
    if (completado || loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/devocional', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numero_id: numero.id }),
      })
      if (res.ok) {
        setCompletado(true)
      } else {
        const data = await res.json()
        setError(data.error ?? 'No se pudo guardar. Intentá de nuevo.')
      }
    } catch {
      setError('Error de conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-5">

      {/* Encabezado */}
      <div className="flex items-center gap-4">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-lg ${
          isMaster
            ? 'bg-amber-500 text-white shadow-amber-500/20'
            : 'bg-purple-600 text-white shadow-purple-500/20'
        }`}>
          {numero.numero}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{numero.titulo}</h2>
          {isMaster && <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">Número Maestro</span>}
        </div>
      </div>

      {/* Versículo ancla */}
      <Card className="bg-gradient-to-br from-amber-50 to-white dark:from-[#1A1035] dark:to-[#120D28] border-amber-200 dark:border-amber-500/20">
        <p className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 font-medium">
          {numero.versiculo_ancla?.cita}
        </p>
        <blockquote className="font-scripture text-lg text-gray-700 dark:text-slate-200 leading-relaxed italic">
          &ldquo;{numero.versiculo_ancla?.texto}&rdquo;
        </blockquote>
      </Card>

      {/* Compartir */}
      {numero.versiculo_ancla && (
        <div className="flex justify-end">
          <ShareButton
            titulo={numero.titulo}
            versiculo={numero.versiculo_ancla}
            aplicacionDevocional={numero.aplicacion_devocional}
          />
        </div>
      )}

      {/* Reflexión */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={15} className="text-purple-600 dark:text-purple-400" />
          <h3 className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">Reflexión</h3>
        </div>
        <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm">{numero.significado_principal}</p>
      </Card>

      {/* Aplicación devocional */}
      {numero.aplicacion_devocional && (
        <Card>
          <h3 className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-3">
            Aplicación de hoy
          </h3>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm">{numero.aplicacion_devocional}</p>
        </Card>
      )}

      {/* Oración */}
      {numero.oracion_sugerida && (
        <Card className="bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-700/40">
          <h3 className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-3">Oración</h3>
          <p className="font-scripture text-gray-700 dark:text-slate-200 leading-relaxed italic text-sm">{numero.oracion_sugerida}</p>
        </Card>
      )}

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      {/* Botón completar */}
      <button
        onClick={marcarCompletado}
        disabled={completado || loading}
        className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 ${
          completado
            ? 'bg-green-50 dark:bg-green-800/40 border border-green-300 dark:border-green-600/50 text-green-700 dark:text-green-300 cursor-default'
            : loading
            ? 'bg-purple-500 text-white cursor-wait opacity-80'
            : 'bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-500 text-white shadow-lg shadow-purple-500/20'
        }`}
      >
        {completado ? (
          <><CheckCircle2 size={18} /> Devocional completado</>
        ) : loading ? (
          <><Loader2 size={18} className="animate-spin" /> Guardando…</>
        ) : (
          <><CheckCircle2 size={18} /> Completar devocional de hoy</>
        )}
      </button>

      {/* Streak */}
      {streak > 0 && (
        <p className="text-center text-xs text-gray-500 dark:text-slate-500">
          🔥 {streak} día{streak !== 1 ? 's' : ''} consecutivo{streak !== 1 ? 's' : ''} de devocional
        </p>
      )}

      <div className="text-center pt-1">
        <Link
          href={`/numeros/${numero.id}`}
          className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-1"
        >
          Ver más sobre el número {numero.numero} <ChevronRight size={14} />
        </Link>
      </div>

    </div>
  )
}
