import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, BookOpen } from 'lucide-react'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { EntornoPerfil, NumeroBiblico, RelacionEntorno } from '@/types'
import { Card } from '@/components/ui/Card'
import EntornoDeleteButton from '@/components/features/EntornoDeleteButton'

const RELACION_INFO: Record<RelacionEntorno, { label: string; emoji: string }> = {
  pareja:  { label: 'Pareja',   emoji: '💑' },
  hijo:    { label: 'Hijo',     emoji: '👦' },
  hija:    { label: 'Hija',     emoji: '👧' },
  padre:   { label: 'Padre',    emoji: '👨' },
  madre:   { label: 'Madre',    emoji: '👩' },
  hermano: { label: 'Hermano',  emoji: '🤝' },
  hermana: { label: 'Hermana',  emoji: '🤝' },
  jefe:    { label: 'Jefe',     emoji: '💼' },
  amigo:   { label: 'Amigo',    emoji: '🤜' },
  amiga:   { label: 'Amiga',    emoji: '🤜' },
  otro:    { label: 'Otro',     emoji: '👤' },
}

const NUMERO_LABELS: { key: keyof Pick<EntornoPerfil, 'numero_destino' | 'numero_expresion' | 'numero_alma' | 'numero_personalidad'>; label: string; description: string }[] = [
  { key: 'numero_destino',      label: 'Destino',      description: 'Misión de vida' },
  { key: 'numero_expresion',    label: 'Expresión',    description: 'Sus talentos' },
  { key: 'numero_alma',         label: 'Alma',         description: 'Su motivación' },
  { key: 'numero_personalidad', label: 'Personalidad', description: 'Cómo la ven' },
]

interface Props {
  params: { id: string }
}

function formatFecha(iso: string) {
  const [y, m, d] = iso.split('-')
  const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  return `${parseInt(d)} de ${meses[parseInt(m) - 1]} de ${y}`
}

export default async function EntornoPerfilPage({ params }: Props) {
  const token = cookies().get('nb_token')?.value
  if (!token) redirect('/login')
  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const { data: perfil } = await supabaseAdmin
    .from('entorno_perfiles')
    .select('*')
    .eq('id', params.id)
    .eq('usuario_id', payload.sub)
    .single<EntornoPerfil>()

  if (!perfil) notFound()

  const numeros = [
    perfil.numero_destino,
    perfil.numero_expresion,
    perfil.numero_alma,
    perfil.numero_personalidad,
  ].filter((n): n is number => n !== null)

  const uniqueNumeros = Array.from(new Set(numeros))

  let numerosMap: Record<number, NumeroBiblico> = {}

  if (uniqueNumeros.length > 0) {
    const { data: biblicos } = await supabaseAdmin
      .from('numeros_biblicos')
      .select('*')
      .in('numero', uniqueNumeros)
      .returns<NumeroBiblico[]>()

    if (biblicos) {
      for (const b of biblicos) numerosMap[b.numero] = b
    }
  }

  const rel = RELACION_INFO[perfil.relacion]
  const displayLabel = perfil.relacion === 'otro' && perfil.relacion_custom
    ? perfil.relacion_custom
    : rel.label

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

      {/* Back */}
      <Link
        href="/entorno"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <ChevronLeft size={15} />
        Mi Entorno
      </Link>

      {/* Header */}
      <div className="bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-3xl shrink-0">
            {rel.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{perfil.nombre}</h1>
            <p className="text-purple-600 dark:text-purple-300 text-sm mt-0.5">{displayLabel}</p>
            <p className="text-gray-500 dark:text-slate-500 text-xs mt-1">{formatFecha(perfil.fecha_nacimiento)}</p>
          </div>
        </div>

        {/* 4 numbers */}
        <div className="grid grid-cols-4 gap-3 mt-6">
          {NUMERO_LABELS.map(({ key, label, description }) => {
            const n = perfil[key] as number | null
            if (n === null) return null
            const isMaster = [11, 22, 33].includes(n)
            return (
              <div key={key} className="flex flex-col items-center gap-1.5">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                  isMaster
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-300 shadow-[0_0_16px_rgba(245,158,11,0.15)]'
                    : 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                }`}>
                  {n}
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700 dark:text-slate-300">{label}</p>
                  <p className="text-[10px] text-gray-500 dark:text-slate-500 leading-none">{description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Notas */}
        {perfil.notas && (
          <div className="mt-5 pt-5 border-t border-gray-200 dark:border-purple-900/30">
            <p className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider mb-1.5">Notas personales</p>
            <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">{perfil.notas}</p>
          </div>
        )}
      </div>

      {/* Biblical meaning per number */}
      {NUMERO_LABELS.map(({ key, label }) => {
        const n = perfil[key] as number | null
        if (n === null) return null
        const biblico = numerosMap[n]
        if (!biblico) return null

        const isMaster = [11, 22, 33].includes(n)

        return (
          <div key={key} className="space-y-3">
            {/* Section header */}
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border ${
                isMaster
                  ? 'border-amber-500/60 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-300'
                  : 'border-purple-500/60 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
              }`}>
                {n}
              </div>
              <div>
                <span className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider">{label} · </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{biblico.titulo}</span>
              </div>
              <Link
                href={`/numeros/${biblico.id}`}
                className="ml-auto text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-1"
              >
                <BookOpen size={12} />
                Ver completo
              </Link>
            </div>

            {/* Verse */}
            {biblico.versiculo_ancla && (
              <Card className="border-amber-200 dark:border-amber-900/20 bg-gradient-to-br from-amber-50 dark:from-[#1A1035] to-white dark:to-[#120D28]">
                <p className="text-xs text-amber-600 dark:text-amber-500/80 uppercase tracking-widest mb-2 font-medium">
                  {biblico.versiculo_ancla.cita}
                </p>
                <blockquote className="font-scripture text-gray-700 dark:text-slate-200 leading-relaxed italic text-sm">
                  &ldquo;{biblico.versiculo_ancla.texto}&rdquo;
                </blockquote>
              </Card>
            )}

            {/* Significado + aplicación */}
            <Card>
              {biblico.significado_principal && (
                <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">{biblico.significado_principal}</p>
              )}
              {biblico.aplicacion_devocional && (
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-purple-900/30">
                  <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1.5">Aplicación personal</p>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{biblico.aplicacion_devocional}</p>
                </div>
              )}
            </Card>
          </div>
        )
      })}

      {/* Footer actions */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-purple-900/30">
        <Link
          href="/entorno"
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-slate-500 hover:text-gray-700 dark:hover:text-slate-300 transition-colors"
        >
          <ChevronLeft size={14} />
          Volver a Mi Entorno
        </Link>
        <EntornoDeleteButton perfilId={perfil.id} />
      </div>

    </div>
  )
}
