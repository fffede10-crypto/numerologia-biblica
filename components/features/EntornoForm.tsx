'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, User, Calendar, Heart, ChevronRight, Sparkles } from 'lucide-react'
import {
  calcularNumeroDestino,
  calcularNumeroExpresion,
  calcularNumeroAlma,
  calcularNumeroPersonalidad,
} from '@/lib/calculos-numerologicos'
import { NumberBadge } from '@/components/ui/NumberBadge'
import { RelacionEntorno } from '@/types'

const RELACIONES: { value: RelacionEntorno; label: string; emoji: string }[] = [
  { value: 'pareja',   label: 'Pareja',   emoji: '💑' },
  { value: 'hijo',     label: 'Hijo',     emoji: '👦' },
  { value: 'hija',     label: 'Hija',     emoji: '👧' },
  { value: 'padre',    label: 'Padre',    emoji: '👨' },
  { value: 'madre',    label: 'Madre',    emoji: '👩' },
  { value: 'hermano',  label: 'Hermano',  emoji: '🤝' },
  { value: 'hermana',  label: 'Hermana',  emoji: '🤝' },
  { value: 'jefe',     label: 'Jefe',     emoji: '💼' },
  { value: 'amigo',    label: 'Amigo',    emoji: '🤜' },
  { value: 'amiga',    label: 'Amiga',    emoji: '🤜' },
  { value: 'otro',     label: 'Otro',     emoji: '👤' },
]

export default function EntornoForm() {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState('')
  const [relacion, setRelacion] = useState<RelacionEntorno | ''>('')
  const [relacionCustom, setRelacionCustom] = useState('')
  const [notas, setNotas] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [preview, setPreview] = useState({
    destino: null as number | null,
    expresion: null as number | null,
    alma: null as number | null,
    personalidad: null as number | null,
  })

  useEffect(() => {
    if (nombre.trim().length >= 2) {
      setPreview({
        destino: fecha.length === 10 ? calcularNumeroDestino(fecha) : null,
        expresion: calcularNumeroExpresion(nombre),
        alma: calcularNumeroAlma(nombre),
        personalidad: calcularNumeroPersonalidad(nombre),
      })
    } else {
      setPreview({ destino: null, expresion: null, alma: null, personalidad: null })
    }
  }, [nombre, fecha])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!relacion) { setError('Seleccioná una relación'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/entorno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre.trim(),
          fecha_nacimiento: fecha,
          relacion,
          relacion_custom: relacionCustom.trim() || null,
          notas: notas.trim() || null,
        }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Error guardando'); return }
      router.push(`/entorno/${data.perfil.id}`)
      router.refresh()
    } catch {
      setError('Error de conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const tienePreview = Object.values(preview).some((v) => v !== null)

  const inputClass =
    'w-full bg-gray-50 dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none transition-colors text-sm'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
          <User size={14} className="inline mr-1.5 text-purple-500 dark:text-purple-400" />
          Nombre completo
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Ana García López"
          required
          className={inputClass}
        />
      </div>

      {/* Fecha */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
          <Calendar size={14} className="inline mr-1.5 text-purple-500 dark:text-purple-400" />
          Fecha de nacimiento
        </label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
          max={new Date().toISOString().split('T')[0]}
          className="w-full bg-gray-50 dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none transition-colors text-sm [color-scheme:light] dark:[color-scheme:dark]"
        />
      </div>

      {/* Relación */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
          <Heart size={14} className="inline mr-1.5 text-purple-500 dark:text-purple-400" />
          Relación
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {RELACIONES.map(({ value, label, emoji }) => (
            <button
              key={value}
              type="button"
              onClick={() => setRelacion(value)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl border text-sm font-medium transition-all ${
                relacion === value
                  ? 'bg-purple-700/30 border-purple-600 text-purple-700 dark:text-purple-200'
                  : 'bg-white dark:bg-[#1A1035] border-gray-200 dark:border-purple-900/40 text-gray-600 dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-700/60 hover:text-purple-700 dark:hover:text-white'
              }`}
            >
              <span className="text-xl leading-none">{emoji}</span>
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>

        {relacion === 'otro' && (
          <input
            type="text"
            value={relacionCustom}
            onChange={(e) => setRelacionCustom(e.target.value)}
            placeholder="¿Cuál es la relación?"
            className={`mt-3 ${inputClass}`}
          />
        )}
      </div>

      {/* Preview */}
      {tienePreview && (
        <div className="bg-gray-50 dark:bg-[#1A1035] border border-purple-100 dark:border-purple-700/30 rounded-xl p-5">
          <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest font-medium text-center mb-4">
            Números de {nombre.split(' ')[0] || 'esta persona'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <NumberBadge number={preview.destino}      label="Destino"       description="Misión de vida" />
            <NumberBadge number={preview.expresion}    label="Expresión"     description="Sus talentos" />
            <NumberBadge number={preview.alma}         label="Alma"          description="Su motivación" />
            <NumberBadge number={preview.personalidad} label="Personalidad"  description="Cómo la ven" />
          </div>
        </div>
      )}

      {/* Notas */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
          Notas personales <span className="text-gray-400 dark:text-slate-500 font-normal">(opcional)</span>
        </label>
        <textarea
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          placeholder="Observaciones, dinámicas de relación, oraciones…"
          rows={3}
          className="w-full bg-gray-50 dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none transition-colors text-sm resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !nombre.trim() || !fecha || !relacion}
        className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        {loading
          ? <><Loader2 size={18} className="animate-spin" /> Calculando y guardando…</>
          : <><Sparkles size={18} /> Guardar perfil <ChevronRight size={16} /></>
        }
      </button>
    </form>
  )
}
