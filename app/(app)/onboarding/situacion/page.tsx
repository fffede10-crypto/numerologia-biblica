import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import SituacionForm from './SituacionForm'

export default async function SituacionPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const { data: usuario } = await supabaseAdmin
    .from('usuarios')
    .select('area_orientacion')
    .eq('id', payload.sub)
    .single()

  if (usuario?.area_orientacion) redirect('/dashboard')

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/40 flex items-center justify-center mx-auto mb-4">
          <span className="text-amber-400 text-xl">✦</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tu situación de vida</h1>
        <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
          Estas respuestas personalizan tu experiencia para que la Palabra hable directamente a tu momento actual.
        </p>
      </div>

      <SituacionForm />

      <div className="mt-10 text-center">
        <p className="font-scripture text-gray-500 dark:text-slate-500 text-sm italic">
          "Encomienda a Jehová tu camino, y confía en él; y él hará."
        </p>
        <p className="text-xs text-gray-400 dark:text-slate-600 mt-1">— Salmo 37:5</p>
      </div>
    </div>
  )
}
