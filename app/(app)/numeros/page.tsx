import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { NumeroBiblico, PerfilNumerologico } from '@/types'
import NumerosList from '@/components/features/NumerosList'

export const revalidate = 3600

const NUMERO_CONFIG: {
  key: keyof Pick<PerfilNumerologico, 'numero_destino' | 'numero_expresion' | 'numero_alma' | 'numero_personalidad'>
  label: string
  bg: string
  ring: string
}[] = [
  { key: 'numero_destino',      label: 'Destino',      bg: 'bg-purple-600', ring: 'ring-purple-500/30' },
  { key: 'numero_expresion',    label: 'Expresión',    bg: 'bg-amber-500',  ring: 'ring-amber-500/30'  },
  { key: 'numero_alma',         label: 'Alma',         bg: 'bg-green-600',  ring: 'ring-green-500/30'  },
  { key: 'numero_personalidad', label: 'Personalidad', bg: 'bg-blue-600',   ring: 'ring-blue-500/30'   },
]

export default async function NumerosPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const [{ data: numeros }, { data: favoritos }, { data: perfil }, { data: vistos }] = await Promise.all([
    supabaseAdmin
      .from('numeros_biblicos')
      .select('*')
      .order('numero', { ascending: true })
      .returns<NumeroBiblico[]>(),
    supabaseAdmin
      .from('favoritos')
      .select('numero_id')
      .eq('usuario_id', payload.sub),
    supabaseAdmin
      .from('perfiles_numericos')
      .select('numero_destino, numero_expresion, numero_alma, numero_personalidad')
      .eq('usuario_id', payload.sub)
      .single<Pick<PerfilNumerologico, 'numero_destino' | 'numero_expresion' | 'numero_alma' | 'numero_personalidad'>>(),
    supabaseAdmin
      .from('numeros_vistos')
      .select('numero_id')
      .eq('usuario_id', payload.sub),
  ])

  const favoritosIds = favoritos?.map((f) => f.numero_id) ?? []
  const visitadosIds = vistos?.map((v) => v.numero_id) ?? []
  const allNumeros = numeros ?? []

  const numerosMap: Record<number, NumeroBiblico> = {}
  for (const n of allNumeros) numerosMap[n.numero] = n

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Biblioteca de Números</h1>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
          {allNumeros.length} números con significado bíblico profundo
        </p>
      </div>

      {/* Tus números */}
      {perfil && (
        <div className="space-y-3">
          <p className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider font-medium">Tus números</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {NUMERO_CONFIG.map(({ key, label, bg, ring }) => {
              const n = perfil[key]
              if (!n) return null
              const biblico = numerosMap[n]
              return (
                <Link
                  key={key}
                  href={biblico ? `/numeros/${biblico.id}` : '#'}
                  className={`flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-600/60 rounded-xl transition-all hover:shadow-md ring-2 ${ring}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md ${bg}`}>
                    {n}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-700 dark:text-slate-300">{label}</p>
                    {biblico && (
                      <p className="text-[10px] text-gray-400 dark:text-slate-500 leading-tight mt-0.5 line-clamp-1">
                        {biblico.titulo}
                      </p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Progreso */}
      {allNumeros.length > 0 && (
        <div className="bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-gray-700 dark:text-slate-300">Números estudiados</p>
            <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
              {visitadosIds.length} de {allNumeros.length}
            </p>
          </div>
          <div className="w-full h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${(visitadosIds.length / allNumeros.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      <NumerosList numeros={allNumeros} favoritosIds={favoritosIds} visitadosIds={visitadosIds} />
    </div>
  )
}
