'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Pencil, X, Loader2, Save, User, Calendar } from 'lucide-react'
import {
  calcularNumeroDestino,
  calcularNumeroExpresion,
  calcularNumeroAlma,
  calcularNumeroPersonalidad,
} from '@/lib/calculos-numerologicos'

interface PerfilEditorProps {
  nombreInicial: string
  fechaInicial: string
}

export default function PerfilEditor({ nombreInicial, fechaInicial }: PerfilEditorProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [nombre, setNombre] = useState(nombreInicial)
  const [fecha, setFecha] = useState(fechaInicial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function previewChanged() {
    if (!nombre.trim() || fecha.length !== 10) return null
    return {
      destino: calcularNumeroDestino(fecha),
      expresion: calcularNumeroExpresion(nombre),
      alma: calcularNumeroAlma(nombre),
      personalidad: calcularNumeroPersonalidad(nombre),
    }
  }

  const preview = previewChanged()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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
        setError(data.error ?? 'Error actualizando perfil')
        return
      }
      setOpen(false)
      router.refresh()
    } catch {
      setError('Error de conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-600/50 px-3 py-1.5 rounded-lg transition-all"
      >
        <Pencil size={14} /> Editar datos
      </button>
    )
  }

  return (
    <div className="bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-700/40 rounded-xl p-6 space-y-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
          Actualizar perfil
        </h3>
        <button
          onClick={() => setOpen(false)}
          className="text-gray-400 dark:text-slate-500 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1.5">
            <User size={12} className="inline mr-1 text-purple-500 dark:text-purple-400" />
            Nombre completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full bg-gray-50 dark:bg-[#0F0A1E] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1.5">
            <Calendar size={12} className="inline mr-1 text-purple-500 dark:text-purple-400" />
            Fecha de nacimiento
          </label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            max={new Date().toISOString().split('T')[0]}
            className="w-full bg-gray-50 dark:bg-[#0F0A1E] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none transition-colors [color-scheme:light] dark:[color-scheme:dark]"
          />
        </div>

        {preview && (
          <div className="grid grid-cols-4 gap-3 py-3 px-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800/20">
            {[
              { val: preview.destino, label: 'Destino' },
              { val: preview.expresion, label: 'Expresión' },
              { val: preview.alma, label: 'Alma' },
              { val: preview.personalidad, label: 'Personalidad' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className={`text-xl font-bold ${val === 11 || val === 22 || val === 33 ? 'text-amber-500' : 'text-purple-700 dark:text-purple-300'}`}>
                  {val}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-slate-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex-1 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading || !nombre.trim() || !fecha}
            className="flex-1 flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 text-white font-medium py-2.5 rounded-lg text-sm transition-colors"
          >
            {loading
              ? <><Loader2 size={15} className="animate-spin" /> Guardando…</>
              : <><Save size={15} /> Guardar cambios</>
            }
          </button>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 text-center">
          Tus números se actualizarán automáticamente con los nuevos datos
        </p>
      </form>
    </div>
  )
}
