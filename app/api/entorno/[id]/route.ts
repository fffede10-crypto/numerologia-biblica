import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { EntornoPerfil } from '@/types'

function getUserId(): string | null {
  const token = cookies().get('nb_token')?.value
  if (!token) return null
  return verifyToken(token)?.sub ?? null
}

interface Props { params: { id: string } }

export async function GET(_req: NextRequest, { params }: Props) {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { data, error } = await supabaseAdmin
    .from('entorno_perfiles')
    .select('*')
    .eq('id', params.id)
    .eq('usuario_id', userId)
    .single<EntornoPerfil>()

  if (error || !data) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json({ perfil: data })
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { error } = await supabaseAdmin
    .from('entorno_perfiles')
    .delete()
    .eq('id', params.id)
    .eq('usuario_id', userId)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
