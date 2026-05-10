import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const payload = verifyToken(token)
  if (!payload) return NextResponse.json({ error: 'Token inválido' }, { status: 401 })

  const { numero_id } = await req.json()
  if (!numero_id || typeof numero_id !== 'number') {
    return NextResponse.json({ error: 'numero_id requerido' }, { status: 400 })
  }

  await supabaseAdmin
    .from('numeros_vistos')
    .upsert(
      { usuario_id: payload.sub, numero_id },
      { onConflict: 'usuario_id,numero_id' }
    )

  return NextResponse.json({ ok: true })
}
