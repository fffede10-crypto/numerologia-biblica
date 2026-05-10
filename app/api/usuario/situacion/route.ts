import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function PATCH(req: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('nb_token')?.value
  if (!token) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

  const payload = verifyToken(token)
  if (!payload) return NextResponse.json({ error: 'Token inválido' }, { status: 401 })

  const body = await req.json()
  const { area_orientacion, etapa_vida, intencion_actual } = body

  if (!area_orientacion || !etapa_vida) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  const { error } = await supabaseAdmin
    .from('usuarios')
    .update({ area_orientacion, etapa_vida, intencion_actual: intencion_actual ?? null })
    .eq('id', payload.sub)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
