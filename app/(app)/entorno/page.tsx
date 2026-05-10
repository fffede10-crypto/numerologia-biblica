import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'
import { Users, Plus, ChevronRight } from 'lucide-react'
import { EntornoPerfil, RelacionEntorno } from '@/types'
import { Avatar } from '@/components/ui/Avatar'

const RELACION_INFO: Record<RelacionEntorno, { label: string }> = {
  pareja:  { label: 'Pareja'   },
  hijo:    { label: 'Hijo'     },
  hija:    { label: 'Hija'     },
  padre:   { label: 'Padre'    },
  madre:   { label: 'Madre'    },
  hermano: { label: 'Hermano'  },
  hermana: { label: 'Hermana'  },
  jefe:    { label: 'Jefe'     },
  amigo:   { label: 'Amigo'    },
  amiga:   { label: 'Amiga'    },
  otro:    { label: 'Otro'     },
}

function NumberCircle({ number, label }: { number: number | null; label: string }) {
  if (number === null) return null
  const isMaster = [11, 22, 33].includes(number)
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${
        isMaster
          ? 'bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/60 text-amber-700 dark:text-amber-300'
          : 'bg-purple-100 dark:bg-purple-700/20 border-purple-300 dark:border-purple-700/50 text-purple-700 dark:text-purple-300'
      }`}>
        {number}
      </div>
      <span className="text-[9px] text-gray-400 dark:text-slate-500 leading-none">{label}</span>
    </div>
  )
}

export default async function EntornoPage() {
  const token = cookies().get('nb_token')?.value
  const payload = token ? verifyToken(token) : null
  if (!payload) return null

  const { data: perfiles } = await supabaseAdmin
    .from('entorno_perfiles')
    .select('*')
    .eq('usuario_id', payload.sub)
    .order('created_at', { ascending: false })
    .returns<EntornoPerfil[]>()

  const lista = perfiles ?? []

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Users size={22} className="text-purple-600 dark:text-purple-400" />
            Mi Entorno
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">
            Perfiles numerológicos de las personas en tu vida
          </p>
        </div>
        <Link
          href="/entorno/nuevo"
          className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm shadow-purple-500/20"
        >
          <Plus size={15} />
          Agregar
        </Link>
      </div>

      {/* Empty state */}
      {lista.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
            <Users size={28} className="text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700 dark:text-slate-300 mb-2">
            Aún no tenés perfiles
          </h2>
          <p className="text-gray-500 dark:text-slate-500 text-sm mb-6 max-w-xs mx-auto">
            Agregá a las personas importantes de tu vida y explorá su perfil numerológico bíblico.
          </p>
          <Link
            href="/entorno/nuevo"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm shadow-purple-500/20"
          >
            <Plus size={16} />
            Agregar primera persona
          </Link>
        </div>
      )}

      {/* Grid */}
      {lista.length > 0 && (
        <div className="grid gap-3">
          {lista.map((perfil) => {
            const rel = RELACION_INFO[perfil.relacion]
            const displayLabel = perfil.relacion === 'otro' && perfil.relacion_custom
              ? perfil.relacion_custom
              : rel.label

            return (
              <Link
                key={perfil.id}
                href={`/entorno/${perfil.id}`}
                className="flex items-center gap-4 bg-white dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-700/60 rounded-xl p-4 transition-all group hover:shadow-md"
              >
                <Avatar name={perfil.nombre} size="md" />

                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 dark:text-white font-semibold truncate">{perfil.nombre}</p>
                  <p className="text-gray-500 dark:text-slate-400 text-xs mt-0.5">{displayLabel}</p>
                </div>

                <div className="flex items-end gap-2 shrink-0">
                  <NumberCircle number={perfil.numero_destino}      label="Dest" />
                  <NumberCircle number={perfil.numero_expresion}    label="Expr" />
                  <NumberCircle number={perfil.numero_alma}         label="Alma" />
                  <NumberCircle number={perfil.numero_personalidad} label="Pers" />
                </div>

                <ChevronRight size={16} className="text-gray-400 dark:text-slate-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors shrink-0" />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
