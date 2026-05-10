import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'
import { createClient } from '@supabase/supabase-js'

// Leer .env.local manualmente
function loadEnv(): Record<string, string> {
  const envPath = path.resolve(process.cwd(), '.env.local')
  const content = fs.readFileSync(envPath, 'utf-8')
  return Object.fromEntries(
    content
      .split('\n')
      .filter((line) => line.includes('=') && !line.startsWith('#'))
      .map((line) => {
        const idx = line.indexOf('=')
        return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()]
      })
  )
}

async function crearUsuario(email: string, password: string) {
  const env = loadEnv()

  const supabaseUrl = env['NEXT_PUBLIC_SUPABASE_URL']
  const serviceKey = env['SUPABASE_SERVICE_ROLE_KEY']

  if (!supabaseUrl || !serviceKey) {
    console.error('❌ Faltan variables NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  console.log(`\n📧 Email:      ${email}`)
  console.log(`🔑 Contraseña: ${password}`)
  console.log('⏳ Generando hash bcrypt...')

  const passwordHash = await bcrypt.hash(password, 12)
  console.log(`✓  Hash:        ${passwordHash.slice(0, 20)}…`)

  console.log('⏳ Insertando en Supabase...')

  const { data, error } = await supabase
    .from('usuarios')
    .upsert(
      { email: email.toLowerCase(), password_hash: passwordHash, acceso_activo: true },
      { onConflict: 'email' }
    )
    .select('id, email, acceso_activo')
    .single()

  if (error) {
    console.error('❌ Error de Supabase:', error.message)
    process.exit(1)
  }

  console.log('\n✅ Usuario creado/actualizado con éxito:')
  console.log(`   ID:             ${data.id}`)
  console.log(`   Email:          ${data.email}`)
  console.log(`   Acceso activo:  ${data.acceso_activo}`)
  console.log('\n🔐 Ya podés iniciar sesión en http://localhost:3000/login')
  console.log(`   Email:      ${email}`)
  console.log(`   Contraseña: ${password}\n`)
}

// Args desde CLI: npx tsx scripts/crear-usuario.ts email@test.com miContraseña
const [,, emailArg, passwordArg] = process.argv

if (!emailArg || !passwordArg) {
  console.error('Uso: npx tsx scripts/crear-usuario.ts <email> <contraseña>')
  process.exit(1)
}

crearUsuario(emailArg, passwordArg)
