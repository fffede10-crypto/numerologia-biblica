import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

function getUserId(): string | null {
  const token = cookies().get('nb_token')?.value
  if (!token) return null
  const payload = verifyToken(token)
  return payload?.sub ?? null
}

export async function GET() {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { data } = await supabaseAdmin
    .from('favoritos')
    .select('numero_id')
    .eq('usuario_id', userId)

  return NextResponse.json({ favoritos: data?.map((f) => f.numero_id) ?? [] })
}

export async function POST(request: NextRequest) {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { numero_id } = await request.json()
  if (!numero_id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 })

  await supabaseAdmin
    .from('favoritos')
    .upsert({ usuario_id: userId, numero_id }, { onConflict: 'usuario_id,numero_id' })

  return NextResponse.json({ ok: true })
}

export async function DELETE(request: NextRequest) {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { numero_id } = await request.json()
  if (!numero_id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 })

  await supabaseAdmin
    .from('favoritos')
    .delete()
    .eq('usuario_id', userId)
    .eq('numero_id', numero_id)

  return NextResponse.json({ ok: true })
}
