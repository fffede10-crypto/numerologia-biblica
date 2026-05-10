import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Heart } from 'lucide-react'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { NumeroBiblico } from '@/types'
import FavoritosGrid from '@/components/features/FavoritosGrid'

export default async function FavoritosPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) redirect('/login')

  const payload = verifyToken(token)
  if (!payload) redirect('/login')

  const { data: favoritos } = await supabaseAdmin
    .from('favoritos')
    .select('id, numero_id')
    .eq('usuario_id', payload.sub)
    .order('created_at', { ascending: false })

  const numeroIds = favoritos?.map((f) => f.numero_id) ?? []

  let numerosData: NumeroBiblico[] = []
  if (numeroIds.length > 0) {
    const { data } = await supabaseAdmin
      .from('numeros_biblicos')
      .select('*')
      .in('id', numeroIds)
      .returns<NumeroBiblico[]>()
    numerosData = data ?? []
  }

  const numeroMap = new Map(numerosData.map((n) => [n.id, n]))
  const items = (favoritos ?? [])
    .filter((f) => numeroMap.has(f.numero_id))
    .map((f) => ({
      id: f.id,
      numero_id: f.numero_id,
      numero: numeroMap.get(f.numero_id)!,
    }))

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800/30 flex items-center justify-center">
          <Heart size={20} className="text-pink-500 fill-pink-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mis Favoritos</h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            {items.length > 0
              ? `${items.length} número${items.length !== 1 ? 's' : ''} guardado${items.length !== 1 ? 's' : ''}`
              : 'Guardá los números que más te resuenen'}
          </p>
        </div>
      </div>
      <FavoritosGrid items={items} />
    </div>
  )
}
