import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { hashPassword, generateTempPassword } from '@/lib/auth'
import { verifyShopifyWebhook, ShopifyOrder } from '@/lib/shopify-webhook'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  const rawBody = await request.text()
  const hmacHeader = request.headers.get('x-shopify-hmac-sha256') ?? ''

  if (!verifyShopifyWebhook(rawBody, hmacHeader)) {
    return NextResponse.json({ error: 'Firma inválida' }, { status: 401 })
  }

  let order: ShopifyOrder
  try {
    order = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Payload inválido' }, { status: 400 })
  }

  // Solo procesar órdenes pagadas
  if (order.financial_status !== 'paid') {
    return NextResponse.json({ ok: true, skipped: true })
  }

  const email = (order.contact_email ?? order.email ?? '').toLowerCase().trim()
  if (!email) {
    return NextResponse.json({ error: 'Email no encontrado en la orden' }, { status: 400 })
  }

  // Idempotencia: si ya existe el usuario con esta orden, no duplicar
  const { data: existing } = await supabaseAdmin
    .from('usuarios')
    .select('id')
    .eq('shopify_order_id', String(order.id))
    .maybeSingle()

  if (existing) {
    return NextResponse.json({ ok: true, skipped: true })
  }

  const tempPassword = generateTempPassword()
  const passwordHash = await hashPassword(tempPassword)

  const { error: insertError } = await supabaseAdmin.from('usuarios').insert({
    email,
    password_hash: passwordHash,
    shopify_order_id: String(order.id),
    acceso_activo: true,
  })

  if (insertError) {
    // Si el email ya existe, activar su acceso sin duplicar
    if (insertError.code === '23505') {
      await supabaseAdmin
        .from('usuarios')
        .update({ acceso_activo: true, shopify_order_id: String(order.id) })
        .eq('email', email)
      return NextResponse.json({ ok: true })
    }
    console.error('Error creando usuario:', insertError)
    return NextResponse.json({ error: 'Error creando usuario' }, { status: 500 })
  }

  await sendWelcomeEmail(email, tempPassword).catch((err) => {
    console.error('Error enviando email de bienvenida:', err)
  })

  return NextResponse.json({ ok: true })
}
