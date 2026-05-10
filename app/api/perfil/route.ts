import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import { calcularPerfilNumerologico } from '@/lib/calculos-numerologicos'

function getUserId(): string | null {
  const token = cookies().get('nb_token')?.value
  if (!token) return null
  return verifyToken(token)?.sub ?? null
}

export async function GET() {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { data } = await supabaseAdmin
    .from('perfiles_numericos')
    .select('*')
    .eq('usuario_id', userId)
    .maybeSingle()

  return NextResponse.json({ perfil: data })
}

export async function POST(request: NextRequest) {
  const userId = getUserId()
  if (!userId) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { nombre_completo, fecha_nacimiento } = await request.json()

  if (!nombre_completo?.trim() || !fecha_nacimiento) {
    return NextResponse.json({ error: 'Nombre y fecha requeridos' }, { status: 400 })
  }

  const numeros = calcularPerfilNumerologico(nombre_completo.trim(), fecha_nacimiento)

  const perfilData = {
    usuario_id: userId,
    nombre_completo: nombre_completo.trim(),
    fecha_nacimiento,
    numero_destino: numeros.numeroDestino,
    numero_expresion: numeros.numeroExpresion,
    numero_alma: numeros.numeroAlma,
    numero_personalidad: numeros.numeroPersonalidad,
  }

  const { error } = await supabaseAdmin
    .from('perfiles_numericos')
    .upsert(perfilData, { onConflict: 'usuario_id' })

  if (error) {
    console.error('Error guardando perfil:', error)
    return NextResponse.json({ error: 'Error guardando perfil' }, { status: 500 })
  }

  // Sincronizar nombre y fecha en la tabla usuarios
  await supabaseAdmin
    .from('usuarios')
    .update({ nombre: nombre_completo.trim(), fecha_nacimiento })
    .eq('id', userId)

  return NextResponse.json({ ok: true, numeros })
}
