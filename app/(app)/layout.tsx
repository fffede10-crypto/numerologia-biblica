import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import Navbar from '@/components/layout/Navbar'
import BottomNav from '@/components/layout/BottomNav'
import { Usuario } from '@/types'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value

  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const { data: usuario } = await supabaseAdmin
    .from('usuarios')
    .select('nombre, email, acceso_activo')
    .eq('id', payload.sub)
    .single<Pick<Usuario, 'nombre' | 'email' | 'acceso_activo'>>()

  if (!usuario?.acceso_activo) redirect('/login')

  const displayName = usuario.nombre ?? usuario.email.split('@')[0]

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-[#0F0A1E]">
      <Navbar userName={displayName} />
      <main className="pt-14 pb-16 md:pb-0">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
