import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { signToken, comparePassword, cookieOptions } from '@/lib/auth'
import { Usuario } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña requeridos' }, { status: 400 })
    }

    const { data: usuario, error } = await supabaseAdmin
      .from('usuarios')
      .select('*')
      .eq('email', email.toLowerCase().trim())
      .single<Usuario>()

    if (error || !usuario) {
      return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 })
    }

    if (!usuario.acceso_activo) {
      return NextResponse.json({ error: 'Tu cuenta no tiene acceso activo' }, { status: 403 })
    }

    const passwordOk = await comparePassword(password, usuario.password_hash)
    if (!passwordOk) {
      return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 })
    }

    const token = signToken({ sub: usuario.id, email: usuario.email })
    const { name, options } = cookieOptions()

    const response = NextResponse.json({ ok: true })
    response.cookies.set(name, token, options)
    return response
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
