import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { calcularPerfilNumerologico } from '@/lib/calculos-numerologicos'
import { EntornoPerfil } from '@/types'

function getUserId(): string | null {
  const token = cookies().get('nb_token')?.value
  if (!token) return null
  return verifyToken(token)?.sub ?? null
}

export async function GET() {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { data, error } = await supabaseAdmin
    .from('entorno_perfiles')
    .select('*')
    .eq('usuario_id', userId)
    .order('created_at', { ascending: false })
    .returns<EntornoPerfil[]>()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ perfiles: data ?? [] })
}

export async function POST(request: NextRequest) {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const body = await request.json()
  const { nombre, fecha_nacimiento, relacion, relacion_custom, notas } = body

  if (!nombre?.trim() || !fecha_nacimiento || !relacion) {
    return NextResponse.json({ error: 'Nombre, fecha y relación son requeridos' }, { status: 400 })
  }

  const numeros = calcularPerfilNumerologico(nombre.trim(), fecha_nacimiento)

  const { data, error } = await supabaseAdmin
    .from('entorno_perfiles')
    .insert({
      usuario_id: userId,
      nombre: nombre.trim(),
      fecha_nacimiento,
      relacion,
      relacion_custom: relacion === 'otro' ? (relacion_custom?.trim() ?? null) : null,
      numero_destino: numeros.numeroDestino,
      numero_expresion: numeros.numeroExpresion,
      numero_alma: numeros.numeroAlma,
      numero_personalidad: numeros.numeroPersonalidad,
      notas: notas?.trim() || null,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creando perfil de entorno:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, perfil: data })
}
