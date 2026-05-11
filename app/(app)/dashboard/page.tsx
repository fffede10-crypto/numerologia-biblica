import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { BookOpen, Sun, Heart, Star, ChevronRight, Users } from 'lucide-react'
import ContextoBanner from '@/components/features/ContextoBanner'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { Card } from '@/components/ui/Card'
import { NumberBadge } from '@/components/ui/NumberBadge'
import { Avatar } from '@/components/ui/Avatar'
import { Usuario, PerfilNumerologico } from '@/types'
import { parseAreas } from '@/lib/utils'

const QUICK_LINKS = [
  {
    href: '/numeros',
    icon: BookOpen,
    label: 'Biblioteca',
    desc: '40 números bíblicos',
    color: 'from-purple-50 to-purple-100/50 dark:from-purple-700/30 dark:to-purple-900/20',
    border: 'border-purple-200 dark:border-purple-700/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    href: '/devocional',
    icon: Sun,
    label: 'Devocional',
    desc: 'Reflexión de hoy',
    color: 'from-amber-50 to-amber-100/50 dark:from-amber-700/20 dark:to-amber-900/10',
    border: 'border-amber-200 dark:border-amber-700/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    href: '/favoritos',
    icon: Heart,
    label: 'Favoritos',
    desc: 'Guardados',
    color: 'from-pink-50 to-pink-100/50 dark:from-pink-700/20 dark:to-pink-900/10',
    border: 'border-pink-200 dark:border-pink-700/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    href: '/entorno',
    icon: Users,
    label: 'Mi Entorno',
    desc: 'Personas cercanas',
    color: 'from-blue-50 to-blue-100/50 dark:from-blue-700/20 dark:to-blue-900/10',
    border: 'border-blue-200 dark:border-blue-700/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
]

function getIndiceDiario(): number {
  const ahora = new Date()
  const inicio = new Date(ahora.getFullYear(), 0, 0)
  const diff = ahora.getTime() - inicio.getTime()
  const diaDeLAnio = Math.floor(diff / (1000 * 60 * 60 * 24))
  return diaDeLAnio
}

function mensajePersonalizado(area: string, numero: number, titulo: string): string {
  const msgs: Record<string, string> = {
    relaciones: `Hoy el número ${numero} — ${titulo} — habla sobre cómo Dios ve tus vínculos`,
    trabajo: `Tu número de hoy, el ${numero} — ${titulo} —, te orienta en tu propósito profesional`,
    fe: `El ${numero} — ${titulo} — te invita hoy a profundizar tu camino espiritual`,
    decision: `El simbolismo del ${numero} — ${titulo} — te da luz para esa decisión que estás tomando`,
    sanacion: `Hoy el ${numero} — ${titulo} — te acompaña en tu proceso de sanación`,
    autoconocimiento: `El ${numero} — ${titulo} — te revela hoy algo más sobre quién sos`,
  }
  return msgs[area] ?? `Tu número de hoy es el ${numero} — ${titulo}`
}

export default async function DashboardPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const [{ data: usuario }, { data: perfil }, { data: todosLosNumeros }] = await Promise.all([
    supabaseAdmin
      .from('usuarios')
      .select('nombre, email, fecha_nacimiento, area_orientacion, etapa_vida, vio_bienvenida')
      .eq('id', payload.sub)
      .single<Pick<Usuario, 'nombre' | 'email' | 'fecha_nacimiento' | 'area_orientacion' | 'etapa_vida' | 'vio_bienvenida'>>(),
    supabaseAdmin
      .from('perfiles_numericos')
      .select('numero_destino, numero_alma, numero_personalidad, numero_expresion')
      .eq('usuario_id', payload.sub)
      .maybeSingle<Pick<PerfilNumerologico, 'numero_destino' | 'numero_alma' | 'numero_personalidad' | 'numero_expresion'>>(),
    supabaseAdmin
      .from('numeros_biblicos')
      .select('numero, titulo, significado_principal')
      .order('numero', { ascending: true }),
  ])

  if (!usuario?.vio_bienvenida) redirect('/onboarding/bienvenida')
  if (!perfil?.numero_destino) redirect('/mi-perfil')

  const displayName = usuario?.nombre ?? usuario?.email?.split('@')[0] ?? 'Bienvenido'
  const hora = new Date().getHours()
  const saludo = hora < 12 ? 'Buenos días' : hora < 19 ? 'Buenas tardes' : 'Buenas noches'
  const tienePeril = perfil?.numero_destino != null
  const areas = parseAreas(usuario?.area_orientacion)
  const area = areas[0] ?? null   // primera área para el mensaje personalizado

  const numeros = todosLosNumeros ?? []
  const indiceDiario = numeros.length > 0 ? getIndiceDiario() % numeros.length : 0
  const numeroDeLDia = numeros[indiceDiario]

  const subtitulo = area && numeroDeLDia
    ? mensajePersonalizado(area, numeroDeLDia.numero, numeroDeLDia.titulo)
    : tienePeril
    ? 'Aquí está tu resumen numérico bíblico'
    : 'Completa tu perfil para descubrir tus números personales'

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

      {/* Saludo */}
      <div className="flex items-center gap-4">
        <Avatar name={displayName} size="lg" />
        <div>
          <p className="text-gray-500 dark:text-slate-400 text-sm">{saludo}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white capitalize">
            {displayName}
          </h1>
          <p className="text-gray-500 dark:text-slate-400 mt-0.5 text-sm max-w-lg">{subtitulo}</p>
        </div>
      </div>

      {/* Banner de contexto */}
      {areas.length === 0 && tienePeril && <ContextoBanner />}

      {/* Número del Día */}
      {numeroDeLDia && (
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 dark:from-purple-900/20 to-transparent pointer-events-none" />
          <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4 font-medium">
            Número del Día
          </p>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold text-4xl shrink-0 shadow-lg shadow-purple-500/20">
              {numeroDeLDia.numero}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{numeroDeLDia.titulo}</h2>
              {(numeroDeLDia as any).significado_principal && (
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {(numeroDeLDia as any).significado_principal}
                </p>
              )}
              <Link
                href="/devocional"
                className="inline-flex items-center gap-1 mt-3 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
              >
                Ver devocional de hoy <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </Card>
      )}

      {/* Perfil numérico */}
      {tienePeril && (
        <Card className="relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Star size={16} className="text-amber-500" />
              Tu Perfil Numérico
            </h2>
            <Link
              href="/mi-perfil"
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 transition-colors"
            >
              Ver detalle <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <NumberBadge number={perfil!.numero_destino} label="Destino" description="Tu misión de vida" />
            <NumberBadge number={perfil!.numero_expresion} label="Expresión" description="Tus talentos" />
            <NumberBadge number={perfil!.numero_alma} label="Alma" description="Tu motivación" />
            <NumberBadge number={perfil!.numero_personalidad} label="Personalidad" description="Cómo te ven" />
          </div>
        </Card>
      )}

      {/* Versículo del día */}
      <Card className="bg-gradient-to-br from-amber-50 to-white dark:from-[#1A1035] dark:to-[#120D28] border-amber-200 dark:border-amber-500/20">
        <p className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 font-medium">
          Palabra de hoy
        </p>
        <blockquote className="font-scripture text-lg text-gray-700 dark:text-slate-200 leading-relaxed italic mb-2">
          "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
        </blockquote>
        <cite className="text-sm text-gray-400 dark:text-slate-500 not-italic">— Salmo 119:105</cite>
      </Card>

      {/* Accesos rápidos */}
      <div>
        <h2 className="text-base font-semibold text-gray-700 dark:text-slate-300 mb-4">Explorar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {QUICK_LINKS.map(({ href, icon: Icon, label, desc, color, border, iconColor }) => (
            <Link
              key={href}
              href={href}
              className={`group flex flex-col gap-3 p-4 rounded-xl bg-gradient-to-br border ${color} ${border} hover:shadow-md transition-all hover:scale-[1.02]`}
            >
              <div className="w-9 h-9 rounded-lg bg-white/80 dark:bg-white/5 flex items-center justify-center">
                <Icon size={18} className={iconColor} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
                <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
