import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Sun, Zap } from 'lucide-react'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { NumeroBiblico, DevocionalCompletado } from '@/types'
import DevocionalCard from '@/components/features/DevocionalCard'
import { getAccionDiaria } from '@/lib/acciones-diarias'

function getIndiceDiario(): number {
  const ahora = new Date()
  const inicio = new Date(ahora.getFullYear(), 0, 0)
  const diff = ahora.getTime() - inicio.getTime()
  const diaDeLAnio = Math.floor(diff / (1000 * 60 * 60 * 24))
  return diaDeLAnio % 40
}

function calcularStreak(historial: Pick<DevocionalCompletado, 'fecha'>[]): number {
  if (!historial.length) return 0
  const fechas = historial.map((h) => h.fecha).sort().reverse()
  const hoy = new Date().toISOString().split('T')[0]
  if (fechas[0] !== hoy) return 0

  let streak = 1
  for (let i = 1; i < fechas.length; i++) {
    const esperada = new Date(hoy)
    esperada.setDate(esperada.getDate() - i)
    if (fechas[i] === esperada.toISOString().split('T')[0]) streak++
    else break
  }
  return streak
}

function textoParaSituacion(area: string, numero: NumeroBiblico): string {
  const n = numero.numero
  const t = numero.titulo
  const msgs: Record<string, string> = {
    relaciones: `En tus relaciones y vínculos, el ${n} — ${t} — te recuerda que Dios diseñó cada conexión con propósito. Deja que este número hable a los lazos que querés sanar o profundizar.`,
    trabajo: `En tu búsqueda de propósito, el ${n} — ${t} — te orienta: las mejores decisiones vocacionales nacen de la alineación con el diseño divino que este número revela.`,
    fe: `Para tu crecimiento espiritual, el ${n} — ${t} — es una puerta. Entra hoy con expectativa: lo que este número revela sobre Dios es exactamente lo que necesitás para crecer.`,
    decision: `Ante la decisión que estás tomando, el ${n} — ${t} — te da claridad. Las Escrituras usaron este número en momentos clave de elección. Confía en esa luz hoy.`,
    sanacion: `En este momento difícil, el ${n} — ${t} — te acompaña. Dios habló a través de este número en tiempos de restauración. Su proceso de sanidad sigue activo en tu vida.`,
    autoconocimiento: `En tu proceso de conocerte, el ${n} — ${t} — te revela algo sobre tu identidad diseñada por Dios. Lo que estás descubriendo hoy no es casualidad.`,
  }
  return msgs[area] ?? ''
}

export default async function DevocionalPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const hoy = new Date().toISOString().split('T')[0]

  const [{ data: todosLosNumeros }, { data: historialData }, { data: completadoHoy }, { data: usuario }] =
    await Promise.all([
      supabaseAdmin
        .from('numeros_biblicos')
        .select('*')
        .order('numero', { ascending: true })
        .returns<NumeroBiblico[]>(),
      supabaseAdmin
        .from('devocional_completado')
        .select('fecha')
        .eq('usuario_id', payload.sub)
        .order('fecha', { ascending: false })
        .limit(60)
        .returns<Pick<DevocionalCompletado, 'fecha'>[]>(),
      supabaseAdmin
        .from('devocional_completado')
        .select('id')
        .eq('usuario_id', payload.sub)
        .eq('fecha', hoy)
        .maybeSingle(),
      supabaseAdmin
        .from('usuarios')
        .select('area_orientacion')
        .eq('id', payload.sub)
        .single(),
    ])

  const numeros = todosLosNumeros ?? []
  if (!numeros.length) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center text-gray-400 dark:text-slate-400">
        No hay números disponibles aún.
      </div>
    )
  }

  const indice = getIndiceDiario() % numeros.length
  const numeroDeLDia = numeros[indice]
  const historial = historialData ?? []
  const streak = calcularStreak(historial)
  const area = usuario?.area_orientacion ?? null

  const fechaDisplay = new Date().toLocaleDateString('es-AR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })

  const textoContextual = area ? textoParaSituacion(area, numeroDeLDia) : ''
  const accionDiaria = getAccionDiaria(numeroDeLDia.numero, area)

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-700/20 border border-amber-200 dark:border-amber-700/30 flex items-center justify-center shrink-0">
          <Sun size={20} className="text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Devocional Diario</h1>
          <p className="text-sm text-gray-500 dark:text-slate-400 capitalize mt-0.5">{fechaDisplay}</p>
        </div>
      </div>

      <ProgressDots historial={historial} />

      {historial.length === 0 && (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/5 dark:to-[#1A1035] border border-amber-200 dark:border-amber-500/30 rounded-xl p-5">
          <p className="text-2xl mb-2">🔥</p>
          <p className="font-semibold text-gray-900 dark:text-white mb-1">¡Hoy empieza tu primera racha!</p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Completá el devocional cada día para construir tu racha. Cada número que meditás se convierte en sabiduría que Dios usa en tu vida.
          </p>
        </div>
      )}

      <DevocionalCard
        numero={numeroDeLDia}
        completadoHoy={!!completadoHoy}
        streak={streak}
      />

      {textoContextual && (
        <div className="bg-white dark:bg-[#1A1035] border border-purple-200 dark:border-purple-900/40 rounded-xl p-5">
          <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3 font-medium">
            Para tu situación
          </p>
          <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">{textoContextual}</p>
        </div>
      )}

      <div className="bg-gradient-to-br from-amber-50 dark:from-amber-500/5 to-white dark:to-[#1A1035] border border-amber-200 dark:border-amber-500/30 rounded-xl p-5">
        <p className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 font-medium flex items-center gap-2">
          <Zap size={13} className="shrink-0" />
          Tu acción de hoy
        </p>
        <p className="text-gray-700 dark:text-slate-100 text-sm leading-relaxed mb-4">{accionDiaria.accion}</p>
        <p className="font-scripture text-gray-500 dark:text-slate-400 text-sm italic leading-relaxed">
          &ldquo;{accionDiaria.versiculo.texto}&rdquo;
          <span className="not-italic ml-1">— {accionDiaria.versiculo.cita}</span>
        </p>
      </div>

    </div>
  )
}

function ProgressDots({ historial }: { historial: Pick<DevocionalCompletado, 'fecha'>[] }) {
  const fechasSet = new Set(historial.map((h) => h.fecha))
  const hoy = new Date()
  const diasEnMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate()
  const dias = Array.from({ length: diasEnMes }, (_, i) =>
    new Date(hoy.getFullYear(), hoy.getMonth(), i + 1).toISOString().split('T')[0]
  )
  const diaHoy = hoy.toISOString().split('T')[0]

  return (
    <div className="bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 rounded-xl p-4">
      <p className="text-xs text-gray-500 dark:text-slate-500 mb-3 uppercase tracking-wider">
        Progreso de {hoy.toLocaleDateString('es-AR', { month: 'long' })}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {dias.map((fecha) => {
          const completado = fechasSet.has(fecha)
          const esHoy = fecha === diaHoy
          const esFuturo = fecha > diaHoy
          return (
            <div
              key={fecha}
              title={fecha}
              className={`w-6 h-6 rounded-md text-[10px] font-medium flex items-center justify-center transition-colors ${
                completado ? 'bg-purple-600 text-white'
                : esHoy ? 'border-2 border-purple-500 text-purple-600 dark:text-purple-400'
                : esFuturo ? 'bg-gray-100 dark:bg-white/5 text-gray-300 dark:text-slate-700'
                : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-slate-600'
              }`}
            >
              {new Date(fecha + 'T12:00:00').getDate()}
            </div>
          )
        })}
      </div>
    </div>
  )
}
