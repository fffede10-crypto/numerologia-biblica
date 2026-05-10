'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, User, Calendar, ChevronRight, Loader2 } from 'lucide-react'
import {
  calcularNumeroDestino,
  calcularNumeroExpresion,
  calcularNumeroAlma,
  calcularNumeroPersonalidad,
} from '@/lib/calculos-numerologicos'
import { NumberBadge } from '@/components/ui/NumberBadge'

interface Preview {
  destino: number | null
  expresion: number | null
  alma: number | null
  personalidad: number | null
}

export default function OnboardingForm() {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState('')
  const [preview, setPreview] = useState<Preview>({ destino: null, expresion: null, alma: null, personalidad: null })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const nombreValido = nombre.trim().length >= 2
    const fechaValida = fecha.length === 10

    if (nombreValido && fechaValida) {
      setPreview({
        destino: calcularNumeroDestino(fecha),
        expresion: calcularNumeroExpresion(nombre),
        alma: calcularNumeroAlma(nombre),
        personalidad: calcularNumeroPersonalidad(nombre),
      })
    } else if (nombreValido) {
      setPreview({
        destino: null,
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
    if (!nombre.trim() || !fecha) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/perfil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_completo: nombre.trim(), fecha_nacimiento: fecha }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Error guardando el perfil')
        return
      }

      router.push('/mi-perfil')
      router.refresh()
    } catch {
      setError('Error de conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const tienePreview = Object.values(preview).some((v) => v !== null)

  return (
    <div className="space-y-8">

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
            <User size={14} className="inline mr-1.5 text-purple-500 dark:text-purple-400" />
            Nombre completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: María Elena García"
            required
            className="w-full bg-gray-50 dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none transition-colors text-sm"
          />
          <p className="text-xs text-gray-500 dark:text-slate-500 mt-1.5">
            Incluí todos tus nombres y apellidos tal como aparecen en tu documento.
          </p>
        </div>

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

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !nombre.trim() || !fecha}
          className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          {loading ? (
            <><Loader2 size={18} className="animate-spin" /> Calculando…</>
          ) : (
            <><Sparkles size={18} /> Revelar mis números<ChevronRight size={16} /></>
          )}
        </button>
      </form>

      {/* Preview en tiempo real */}
      {tienePreview && (
        <div className="bg-gray-50 dark:bg-[#1A1035] border border-purple-100 dark:border-purple-700/30 rounded-xl p-6 space-y-4">
          <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest font-medium text-center">
            Vista previa de tus números
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <NumberBadge
              number={preview.destino}
              label="Destino"
              description="Tu misión de vida"
            />
            <NumberBadge
              number={preview.expresion}
              label="Expresión"
              description="Tus talentos"
            />
            <NumberBadge
              number={preview.alma}
              label="Alma"
              description="Tu motivación"
            />
            <NumberBadge
              number={preview.personalidad}
              label="Personalidad"
              description="Cómo te ven"
            />
          </div>

          {preview.destino && (
            <p className="text-center text-xs text-gray-500 dark:text-slate-500 pt-2">
              Guardá tu perfil para acceder al significado bíblico de cada número.
            </p>
          )}
        </div>
      )}

    </div>
  )
}
