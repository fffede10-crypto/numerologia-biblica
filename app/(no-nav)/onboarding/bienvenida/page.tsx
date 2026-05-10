import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { BookOpen, Check, X } from 'lucide-react'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import BienvenidaButton from './BienvenidaButton'

const QUE_ES = [
  'Un estudio del simbolismo numérico tal como aparece en las Escrituras',
  'Una herramienta de reflexión, oración y discernimiento bíblico',
  'Contenido fundamentado en el Antiguo y Nuevo Testamento',
  'Una guía para conectar los patrones de Dios en Su Palabra con tu vida',
]

const QUE_NO_ES = [
  'No es adivinación ni predicción del futuro',
  'No son "números de ángeles" ni mensajes de espíritus guías',
  'No reemplaza la Escritura, la oración ni el consejo pastoral',
  'No es numerología New Age ni práctica esotérica',
]

export default async function BienvenidaPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const { data: usuario } = await supabaseAdmin
    .from('usuarios')
    .select('vio_bienvenida')
    .eq('id', payload.sub)
    .single()

  if (usuario?.vio_bienvenida) redirect('/dashboard')

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-[#0F0A1E] flex flex-col items-center justify-center px-4 py-14">
      <div className="w-full max-w-2xl space-y-8">

        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/40 flex items-center justify-center mx-auto mb-5">
            <BookOpen size={28} className="text-purple-200" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Antes de empezar
          </h1>
          <p className="text-amber-600 dark:text-[#F59E0B] font-medium text-sm md:text-base">
            Entendé qué es y qué no es este estudio
          </p>
        </div>

        {/* Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* QUÉ ES */}
          <div className="bg-white dark:bg-[#1A1035] border border-green-200 dark:border-green-800/40 rounded-xl p-5">
            <h2 className="text-green-600 dark:text-green-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Qué ES
            </h2>
            <ul className="space-y-3">
              {QUE_ES.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-700/40 flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-green-600 dark:text-green-400" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QUÉ NO ES */}
          <div className="bg-white dark:bg-[#1A1035] border border-red-200 dark:border-red-800/40 rounded-xl p-5">
            <h2 className="text-red-500 dark:text-red-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Qué NO ES
            </h2>
            <ul className="space-y-3">
              {QUE_NO_ES.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-700/40 flex items-center justify-center mt-0.5">
                    <X size={11} className="text-red-500 dark:text-red-400" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cita bíblica */}
        <div className="text-center py-2">
          <div className="w-12 h-px bg-amber-400/30 mx-auto mb-6" />
          <blockquote className="font-scripture text-xl md:text-2xl text-amber-600 dark:text-[#F59E0B] italic leading-relaxed mb-3">
            "Toda la Escritura es inspirada por Dios y útil para enseñar."
          </blockquote>
          <cite className="text-sm text-gray-500 dark:text-slate-500 not-italic">— 2 Timoteo 3:16</cite>
          <div className="w-12 h-px bg-amber-400/30 mx-auto mt-6" />
        </div>

        {/* Párrafo de cierre */}
        <p className="text-gray-600 dark:text-slate-400 text-sm text-center leading-relaxed max-w-lg mx-auto">
          Este estudio busca hacer lo que los intérpretes bíblicos han hecho por siglos: leer los números de la Palabra con profundidad, reverencia y aplicación práctica a la vida cristiana.
        </p>

        {/* Botón */}
        <div className="flex justify-center pt-2">
          <BienvenidaButton />
        </div>

        {/* Indicador de progreso */}
        <p className="text-center text-xs text-gray-400 dark:text-slate-600">
          Paso 1 de 3 — A continuación ingresarás tu nombre y fecha de nacimiento
        </p>

      </div>
    </div>
  )
}
