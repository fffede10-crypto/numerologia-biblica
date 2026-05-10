import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { supabaseAdmin } from '@/lib/supabase'
import { hashPassword } from '@/lib/auth'
import { sendPasswordResetEmail } from '@/lib/email'
import { Usuario } from '@/types'

// POST /api/auth/reset-password — solicitar reset
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 })
    }

    const { data: usuario } = await supabaseAdmin
      .from('usuarios')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single<Pick<Usuario, 'id'>>()

    // Responder igual aunque el usuario no exista (evitar enumeración)
    if (usuario) {
      const rawToken = crypto.randomBytes(32).toString('hex')
      const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex')
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString() // 1 hora

      await supabaseAdmin.from('reset_tokens').insert({
        usuario_id: usuario.id,
        token: tokenHash,
        expires_at: expiresAt,
        used: false,
      })

      await sendPasswordResetEmail(email, rawToken).catch(() => {
        // No bloquear la respuesta si el email falla
      })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

// PUT /api/auth/reset-password — confirmar reset con token y nueva contraseña
export async function PUT(request: NextRequest) {
  try {
    const { token, newPassword } = await request.json()
    if (!token || !newPassword || newPassword.length < 8) {
      return NextResponse.json({ error: 'Token y contraseña (mín. 8 caracteres) requeridos' }, { status: 400 })
    }

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex')

    const { data: resetToken } = await supabaseAdmin
      .from('reset_tokens')
      .select('*')
      .eq('token', tokenHash)
      .eq('used', false)
      .gt('expires_at', new Date().toISOString())
      .single()

    if (!resetToken) {
      return NextResponse.json({ error: 'Token inválido o expirado' }, { status: 400 })
    }

    const passwordHash = await hashPassword(newPassword)

    await Promise.all([
      supabaseAdmin
        .from('usuarios')
        .update({ password_hash: passwordHash })
        .eq('id', resetToken.usuario_id),
      supabaseAdmin
        .from('reset_tokens')
        .update({ used: true })
        .eq('id', resetToken.id),
    ])

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
