import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import OnboardingForm from '@/components/features/OnboardingForm'

export default async function OnboardingPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  // Si ya tiene perfil, redirigir directo a mi-perfil
  const { data: perfil } = await supabaseAdmin
    .from('perfiles_numericos')
    .select('id')
    .eq('usuario_id', payload.sub)
    .maybeSingle()

  if (perfil) redirect('/mi-perfil')

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/40 flex items-center justify-center mx-auto mb-5">
          <span className="text-[#F59E0B] text-2xl">✦</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Descubrí tu perfil numérico</h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
          Ingresá tu nombre completo y fecha de nacimiento. Calcularemos los cuatro números que definen tu camino según las Escrituras.
        </p>
      </div>

      <OnboardingForm />

      {/* Nota bíblica */}
      <div className="mt-10 text-center">
        <p className="font-scripture text-slate-500 text-sm italic">
          "Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad."
        </p>
        <p className="text-xs text-slate-600 mt-1">— Jeremías 29:11</p>
      </div>
    </div>
  )
}
