import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Star, Pencil } from 'lucide-react'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { Card } from '@/components/ui/Card'
import { NumberBadge } from '@/components/ui/NumberBadge'
import { Avatar } from '@/components/ui/Avatar'
import PerfilEditor from '@/components/features/PerfilEditor'
import ContextoBanner from '@/components/features/ContextoBanner'
import { PerfilNumerologico, NumeroBiblico, Usuario } from '@/types'

const AREA_LABELS: Record<string, { emoji: string; label: string }> = {
  relaciones:       { emoji: '💑', label: 'Relaciones y vínculos' },
  trabajo:          { emoji: '💼', label: 'Trabajo y propósito' },
  fe:               { emoji: '🙏', label: 'Fe y crecimiento espiritual' },
  decision:         { emoji: '💡', label: 'Una decisión importante' },
  sanacion:         { emoji: '💚', label: 'Sanación y bienestar' },
  autoconocimiento: { emoji: '🔍', label: 'Autoconocimiento' },
}

const ETAPA_LABELS: Record<string, { emoji: string; label: string }> = {
  comienzo:    { emoji: '🌱', label: 'Nuevo comienzo' },
  prueba:      { emoji: '🔥', label: 'En medio de una prueba' },
  estabilidad: { emoji: '🌿', label: 'Buscando estabilidad' },
  transicion:  { emoji: '🦋', label: 'En transición' },
  crecimiento: { emoji: '🏔️', label: 'Crecimiento activo' },
  servicio:    { emoji: '🤲', label: 'Sirviendo a otros' },
}

const NUMERO_INFO = [
  {
    key: 'numero_destino' as const,
    label: 'Número de Destino',
    description: 'Tu misión de vida',
    detail: 'Revela el propósito central de tu existencia, la tarea que viniste a cumplir según el plan divino.',
    color: 'border-l-purple-500',
  },
  {
    key: 'numero_expresion' as const,
    label: 'Número de Expresión',
    description: 'Tus talentos naturales',
    detail: 'Muestra los dones y capacidades que Dios depositó en ti para cumplir tu propósito.',
    color: 'border-l-amber-500',
  },
  {
    key: 'numero_alma' as const,
    label: 'Número del Alma',
    description: 'Tu motivación profunda',
    detail: 'Refleja el deseo más íntimo de tu corazón, lo que tu alma anhela en lo más profundo.',
    color: 'border-l-green-500',
  },
  {
    key: 'numero_personalidad' as const,
    label: 'Número de Personalidad',
    description: 'Cómo te perciben otros',
    detail: 'Describe la imagen que proyectás al mundo y cómo los demás te perciben.',
    color: 'border-l-blue-500',
  },
]

export default async function MiPerfilPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const [{ data: perfil }, { data: usuario }] = await Promise.all([
    supabaseAdmin
      .from('perfiles_numericos')
      .select('*')
      .eq('usuario_id', payload.sub)
      .maybeSingle<PerfilNumerologico>(),
    supabaseAdmin
      .from('usuarios')
      .select('nombre, email, fecha_nacimiento, area_orientacion, etapa_vida')
      .eq('id', payload.sub)
      .single<Pick<Usuario, 'nombre' | 'email' | 'fecha_nacimiento' | 'area_orientacion' | 'etapa_vida'>>(),
  ])

  if (!perfil) redirect('/onboarding')

  const todosLosNumeros = [
    perfil.numero_destino,
    perfil.numero_expresion,
    perfil.numero_alma,
    perfil.numero_personalidad,
  ].filter((n): n is number => n !== null)

  const numerosUnicos = Array.from(new Set(todosLosNumeros))

  const { data: numerosData } = await supabaseAdmin
    .from('numeros_biblicos')
    .select('id, numero, titulo')
    .in('numero', numerosUnicos)
    .returns<Pick<NumeroBiblico, 'id' | 'numero' | 'titulo'>[]>()

  const numeroMap = new Map(numerosData?.map((n) => [n.numero, n]) ?? [])

  const displayName = perfil.nombre_completo ?? usuario?.nombre ?? usuario?.email ?? ''
  const fechaDisplay = perfil.fecha_nacimiento
    ? new Date(perfil.fecha_nacimiento + 'T12:00:00').toLocaleDateString('es-AR', {
        day: 'numeric', month: 'long', year: 'numeric',
      })
    : ''

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar name={displayName} size="lg" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white capitalize">{displayName}</h1>
            {fechaDisplay && (
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">{fechaDisplay}</p>
            )}
          </div>
        </div>
        <PerfilEditor
          nombreInicial={perfil.nombre_completo ?? ''}
          fechaInicial={perfil.fecha_nacimiento ?? ''}
        />
      </div>

      {/* Banner de contexto */}
      {!usuario?.area_orientacion && <ContextoBanner />}

      {/* Resumen de 4 números */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 dark:from-purple-900/20 to-transparent pointer-events-none" />
        <div className="flex items-center gap-2 mb-6">
          <Star size={16} className="text-amber-500" />
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Tu Perfil Numérico Bíblico
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {NUMERO_INFO.map(({ key, label, description }) => (
            <NumberBadge
              key={key}
              number={perfil[key]}
              label={label.split(' ').slice(-1)[0]}
              description={description}
              size="lg"
            />
          ))}
        </div>
      </Card>

      {/* Detalle de cada número */}
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-gray-700 dark:text-slate-300">Significado de tus números</h2>

        {NUMERO_INFO.map(({ key, label, description, detail, color }) => {
          const numero = perfil[key]
          if (!numero) return null
          const numBiblico = numeroMap.get(numero)
          const isMaster = numero === 11 || numero === 22 || numero === 33

          return (
            <Card key={key} className={`border-l-4 ${color} pl-4 hover:shadow-md transition-all`}>
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${
                    isMaster
                      ? 'bg-amber-500 text-white'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  {numero}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{label}</p>
                      <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">{description}</p>
                    </div>
                    {numBiblico && (
                      <Link
                        href={`/numeros/${numBiblico.id}`}
                        className="shrink-0 flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      >
                        Ver <ChevronRight size={12} />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-400 mt-2 leading-relaxed">{detail}</p>
                  {isMaster && (
                    <span className="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                      Número Maestro
                    </span>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Mi contexto actual */}
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-gray-700 dark:text-slate-300">Mi contexto actual</h2>
        {usuario?.area_orientacion ? (
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3 flex-1 min-w-0">
                {(() => {
                  const area = AREA_LABELS[usuario.area_orientacion!]
                  const etapa = usuario.etapa_vida ? ETAPA_LABELS[usuario.etapa_vida] : null
                  return (
                    <>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1">Área de orientación</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {area ? `${area.emoji} ${area.label}` : usuario.area_orientacion}
                        </p>
                      </div>
                      {etapa && (
                        <div>
                          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1">Etapa de vida</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {etapa.emoji} {etapa.label}
                          </p>
                        </div>
                      )}
                    </>
                  )
                })()}
              </div>
              <Link
                href="/onboarding/situacion?modo=actualizar"
                className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors px-3 py-1.5 rounded-lg border border-purple-200 dark:border-purple-700/40 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                <Pencil size={12} /> Actualizar
              </Link>
            </div>
          </Card>
        ) : (
          <Card className="border-l-4 border-l-purple-400">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              🧭 Personalizá tu devocional
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              Contanos en qué área de tu vida buscás orientación para que las reflexiones y acciones diarias sean más relevantes para vos.
            </p>
            <Link
              href="/onboarding/situacion"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
            >
              Completar ahora <ChevronRight size={14} />
            </Link>
          </Card>
        )}
      </div>

      {/* Nota al pie */}
      <div className="text-center pt-2 pb-4">
        <p className="font-scripture text-gray-400 dark:text-slate-500 text-sm italic">
          "Antes que te formase en el vientre te conocí."
        </p>
        <p className="text-xs text-gray-400 dark:text-slate-600 mt-1">— Jeremías 1:5</p>
      </div>

    </div>
  )
}
