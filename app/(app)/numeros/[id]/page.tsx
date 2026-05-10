import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, BookOpen, ScrollText } from 'lucide-react'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { NumeroBiblico } from '@/types'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import FavoriteButton from '@/components/features/FavoriteButton'
import ShareButton from '@/components/ui/ShareButton'
import MarcarVisto from '@/components/features/MarcarVisto'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props) {
  const { data } = await supabaseAdmin
    .from('numeros_biblicos')
    .select('numero, titulo')
    .eq('id', params.id)
    .single<Pick<NumeroBiblico, 'numero' | 'titulo'>>()

  if (!data) return { title: 'Número no encontrado' }
  return { title: `${data.numero} — ${data.titulo} | Numerología Bíblica` }
}

type BadgeVariant = 'basico' | 'intermedio' | 'avanzado' | 'maestro' | 'default'
const NIVEL_LABELS: Record<string, string> = {
  basico:     'Básico',
  intermedio: 'Intermedio',
  avanzado:   'Avanzado',
  maestro:    'Maestro',
}

export default async function NumeroDetallePage({ params }: Props) {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const [{ data: numero }, { data: favorito }] = await Promise.all([
    supabaseAdmin
      .from('numeros_biblicos')
      .select('*')
      .eq('id', params.id)
      .single<NumeroBiblico>(),
    supabaseAdmin
      .from('favoritos')
      .select('id')
      .eq('usuario_id', payload.sub)
      .eq('numero_id', params.id)
      .maybeSingle(),
  ])

  if (!numero) notFound()

  const isMaster = numero.numero === 11 || numero.numero === 22 || numero.numero === 33
  const nivelVariant = (numero.nivel_profundidad as BadgeVariant | null) ?? 'default'

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <MarcarVisto numeroId={numero.id} />

      {/* Navegación */}
      <div className="flex items-center justify-between gap-2">
        <Link
          href="/numeros"
          className="flex items-center gap-1 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors shrink-0"
        >
          <ChevronLeft size={16} /> Biblioteca
        </Link>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {numero.versiculo_ancla && (
            <ShareButton
              titulo={numero.titulo}
              versiculo={numero.versiculo_ancla}
              aplicacionDevocional={numero.aplicacion_devocional}
            />
          )}
          <FavoriteButton numeroBiblicoId={numero.id} initialFav={!!favorito} />
        </div>
      </div>

      {/* Encabezado */}
      <div className="flex items-center gap-5">
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shrink-0 shadow-xl ${
            isMaster
              ? 'bg-amber-500 text-white shadow-amber-500/25'
              : 'bg-purple-600 text-white shadow-purple-500/25'
          }`}
        >
          {numero.numero}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{numero.titulo}</h1>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {isMaster && (
              <Badge label="Número Maestro" variant="maestro" />
            )}
            {numero.nivel_profundidad && nivelVariant !== 'default' && (
              <Badge
                label={NIVEL_LABELS[numero.nivel_profundidad] ?? numero.nivel_profundidad}
                variant={nivelVariant}
              />
            )}
          </div>
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

      {/* Significado principal */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-purple-600 dark:text-purple-400" />
          <h2 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">Significado</h2>
        </div>
        <p className="text-gray-600 dark:text-slate-300 leading-relaxed">{numero.significado_principal}</p>
      </Card>

      {/* Palabras hebrea / griega */}
      {(numero.palabra_hebrea || numero.palabra_griega) && (
        <Card>
          <h2 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4">
            Raíces Bíblicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {numero.palabra_hebrea && (
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1">Hebreo</p>
                <p className="text-gray-700 dark:text-slate-300 text-sm">{numero.palabra_hebrea}</p>
              </div>
            )}
            {numero.palabra_griega && (
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1">Griego</p>
                <p className="text-gray-700 dark:text-slate-300 text-sm">{numero.palabra_griega}</p>
              </div>
            )}
            {numero.valor_numerico_hebreo && (
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1">Valor numérico</p>
                <p className="text-gray-700 dark:text-slate-300 text-sm">{numero.valor_numerico_hebreo}</p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Referencias bíblicas */}
      {numero.referencias?.length > 0 && (
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <ScrollText size={16} className="text-purple-600 dark:text-purple-400" />
            <h2 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
              Referencias Bíblicas
            </h2>
          </div>
          <div className="space-y-4">
            {numero.referencias.map((ref, i) => (
              <div key={i} className="border-l-2 border-purple-400 dark:border-purple-800/50 pl-4">
                <p className="text-amber-600 dark:text-amber-400 text-sm font-medium">{ref.cita}</p>
                <p className="text-gray-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">{ref.contexto}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Aplicación devocional */}
      {numero.aplicacion_devocional && (
        <Card>
          <h2 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-3">
            Aplicación Personal
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed">{numero.aplicacion_devocional}</p>
        </Card>
      )}

      {/* Oración */}
      {numero.oracion_sugerida && (
        <Card className="bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-700/40">
          <h2 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-3">Oración</h2>
          <p className="font-scripture text-gray-700 dark:text-slate-200 leading-relaxed italic">{numero.oracion_sugerida}</p>
        </Card>
      )}

      <div className="flex justify-center pt-2 pb-4">
        <Link
          href="/numeros"
          className="text-sm text-gray-400 dark:text-slate-500 hover:text-gray-700 dark:hover:text-slate-300 transition-colors flex items-center gap-1"
        >
          <ChevronLeft size={14} /> Volver a la biblioteca
        </Link>
      </div>

    </div>
  )
}
