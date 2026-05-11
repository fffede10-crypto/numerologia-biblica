'use client'

import { useState } from 'react'
import { Loader2, ChevronLeft } from 'lucide-react'

type Opcion = { value: string; emoji: string; label: string; desc: string }

const AREAS: Opcion[] = [
  { value: 'relaciones', emoji: '💑', label: 'Relaciones y vínculos', desc: 'Pareja, familia, amistades, conflictos' },
  { value: 'trabajo', emoji: '💼', label: 'Trabajo y propósito', desc: 'Carrera, vocación, decisiones profesionales' },
  { value: 'fe', emoji: '🙏', label: 'Fe y crecimiento espiritual', desc: 'Profundizar mi relación con Dios' },
  { value: 'decision', emoji: '💡', label: 'Una decisión importante', desc: 'Necesito claridad para elegir' },
  { value: 'sanacion', emoji: '💚', label: 'Sanación y bienestar', desc: 'Atravesando un momento difícil' },
  { value: 'autoconocimiento', emoji: '🔍', label: 'Autoconocimiento', desc: 'Entender mejor quién soy' },
]

const ETAPAS: Opcion[] = [
  { value: 'comienzo', emoji: '🌱', label: 'Nuevo comienzo', desc: 'mudanza, nuevo trabajo, nueva relación' },
  { value: 'prueba', emoji: '🔥', label: 'En medio de una prueba', desc: 'crisis, pérdida, conflicto' },
  { value: 'estabilidad', emoji: '🌿', label: 'Buscando estabilidad', desc: 'quiero consolidar lo que tengo' },
  { value: 'transicion', emoji: '🦋', label: 'En transición', desc: 'siento que algo está cambiando' },
  { value: 'crecimiento', emoji: '🏔️', label: 'Crecimiento activo', desc: 'estoy en un buen momento y quiero más' },
  { value: 'servicio', emoji: '🤲', label: 'Sirviendo a otros', desc: 'soy líder, pastor, padre/madre, cuidador' },
]

const TITULOS = [
  '¿En qué área de tu vida buscás orientación ahora mismo?',
  '¿En qué etapa de vida estás?',
  '¿Qué querés que Dios hable a tu vida en esta temporada?',
]

function OpcionCard({
  opcion,
  seleccionada,
  onSeleccionar,
}: {
  opcion: Opcion
  seleccionada: boolean
  onSeleccionar: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSeleccionar}
      className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-150 active:scale-[0.98] ${
        seleccionada
          ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/30'
          : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-purple-400 dark:hover:border-purple-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/10'
      }`}
    >
      <span className="text-2xl shrink-0 leading-none">{opcion.emoji}</span>
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-sm ${seleccionada ? 'text-purple-900 dark:text-white' : 'text-gray-800 dark:text-slate-200'}`}>
          {opcion.label}
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">{opcion.desc}</p>
      </div>
      <div
        className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          seleccionada ? 'border-purple-500 bg-purple-500' : 'border-gray-300 dark:border-white/20'
        }`}
      >
        {seleccionada && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </button>
  )
}

interface SituacionFormProps {
  areaInicial?: string | null
  etapaInicial?: string | null
  isActualizando?: boolean
}

export default function SituacionForm({ areaInicial, etapaInicial, isActualizando = false }: SituacionFormProps) {
  const [paso, setPaso] = useState(1)
  const [visible, setVisible] = useState(true)
  const [area, setArea] = useState<string | null>(areaInicial ?? null)
  const [etapa, setEtapa] = useState<string | null>(etapaInicial ?? null)
  const [intencion, setIntencion] = useState('')
  const [guardando, setGuardando] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const avanzar = () => {
    setVisible(false)
    setTimeout(() => {
      setPaso(p => p + 1)
      setVisible(true)
    }, 200)
  }

  const anterior = () => {
    setVisible(false)
    setTimeout(() => {
      setPaso(p => p - 1)
      setVisible(true)
    }, 200)
  }

  const guardar = async () => {
    if (!area || !etapa) return
    setGuardando(true)
    setErrorMsg(null)
    try {
      const res = await fetch('/api/usuario/situacion', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          area_orientacion: area,
          etapa_vida: etapa,
          intencion_actual: intencion.trim() || null,
        }),
      })
      if (!res.ok) throw new Error()
      window.location.href = isActualizando ? '/mi-perfil' : '/dashboard'
    } catch {
      setErrorMsg('Hubo un problema. Intentá de nuevo.')
      setGuardando(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Barra de progreso */}
      <div className="space-y-3">
        <div className="flex justify-between text-xs text-gray-500 dark:text-slate-500">
          <span>Paso {paso} de 3</span>
          <span>{Math.round((paso / 3) * 100)}%</span>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(n => (
            <div
              key={n}
              className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                n < paso
                  ? 'bg-purple-500'
                  : n === paso
                  ? 'bg-gradient-to-r from-purple-600 to-purple-400'
                  : 'bg-gray-200 dark:bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contenido del paso */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 leading-snug">
          {TITULOS[paso - 1]}
        </h2>

        {paso === 1 && (
          <div className="space-y-3">
            {AREAS.map(op => (
              <OpcionCard
                key={op.value}
                opcion={op}
                seleccionada={area === op.value}
                onSeleccionar={() => setArea(op.value)}
              />
            ))}
            <button
              type="button"
              onClick={avanzar}
              disabled={!area}
              className="w-full mt-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white"
            >
              Siguiente
            </button>
            <button
              type="button"
              onClick={() => { window.location.href = isActualizando ? '/mi-perfil' : '/dashboard' }}
              className="w-full py-2.5 text-sm text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
            >
              Saltear por ahora
            </button>
          </div>
        )}

        {paso === 2 && (
          <div className="space-y-3">
            {ETAPAS.map(op => (
              <OpcionCard
                key={op.value}
                opcion={op}
                seleccionada={etapa === op.value}
                onSeleccionar={() => setEtapa(op.value)}
              />
            ))}
            <button
              type="button"
              onClick={avanzar}
              disabled={!etapa}
              className="w-full mt-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white"
            >
              Siguiente
            </button>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={anterior}
                className="flex items-center gap-1.5 py-2.5 px-4 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 border border-gray-200 dark:border-white/10 rounded-xl transition-colors"
              >
                <ChevronLeft size={14} /> Anterior
              </button>
              <button
                type="button"
                onClick={() => { window.location.href = isActualizando ? '/mi-perfil' : '/dashboard' }}
                className="flex-1 py-2.5 text-sm text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors text-center"
              >
                Saltear por ahora
              </button>
            </div>
          </div>
        )}

        {paso === 3 && (
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-slate-400 text-sm">Opcional · máx. 200 caracteres</p>
            <textarea
              value={intencion}
              onChange={e => setIntencion(e.target.value.slice(0, 200))}
              placeholder="Ej: Necesito claridad sobre si cambiar de trabajo..."
              rows={4}
              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-600 text-sm resize-none focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/80 focus:bg-purple-50 dark:focus:bg-purple-900/10 transition-all"
            />
            <p className="text-right text-xs text-gray-400 dark:text-slate-600">{intencion.length}/200</p>
            {errorMsg && <p className="text-red-600 dark:text-red-400 text-sm">{errorMsg}</p>}
            <button
              onClick={guardar}
              disabled={guardando}
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all disabled:opacity-60 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            >
              {guardando ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Guardando...
                </>
              ) : (
                isActualizando ? 'Guardar cambios' : 'Comenzar mi camino'
              )}
            </button>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={anterior}
                className="flex items-center gap-1.5 py-2.5 px-4 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 border border-gray-200 dark:border-white/10 rounded-xl transition-colors"
              >
                <ChevronLeft size={14} /> Anterior
              </button>
              <button
                type="button"
                onClick={() => { window.location.href = isActualizando ? '/mi-perfil' : '/dashboard' }}
                className="flex-1 py-2.5 text-sm text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors text-center"
              >
                Saltear por ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
