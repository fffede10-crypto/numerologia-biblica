import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

function getUserId(): string | null {
  const token = cookies().get('nb_token')?.value
  if (!token) return null
  return verifyToken(token)?.sub ?? null
}

function hoyISO(): string {
  return new Date().toISOString().split('T')[0]
}

export async function GET() {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { data } = await supabaseAdmin
    .from('devocional_completado')
    .select('numero_id, fecha')
    .eq('usuario_id', userId)
    .order('fecha', { ascending: false })
    .limit(60)

  return NextResponse.json({ historial: data ?? [] })
}

export async function POST(request: NextRequest) {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { numero_id } = await request.json()
  if (!numero_id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 })

  const hoy = hoyISO()

  const { error } = await supabaseAdmin
    .from('devocional_completado')
    .upsert(
      { usuario_id: userId, numero_id, fecha: hoy },
      { onConflict: 'usuario_id,fecha' }
    )

  if (error) {
    console.error('Error guardando devocional:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
