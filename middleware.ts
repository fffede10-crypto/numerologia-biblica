import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)
const COOKIE_NAME = 'nb_token'

// Rutas que requieren autenticación
const PROTECTED_PREFIXES = [
  '/dashboard',
  '/numeros',
  '/mi-perfil',
  '/devocional',
  '/favoritos',
  '/entorno',
  '/onboarding',
]

// Rutas públicas que un usuario autenticado no debería ver
const AUTH_ROUTES = ['/login']

function isProtected(pathname: string): boolean {
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get(COOKIE_NAME)?.value

  let isAuthenticated = false

  if (token) {
    try {
      await jwtVerify(token, JWT_SECRET)
      isAuthenticated = true
    } catch {
      // Token inválido o expirado
    }
  }

  // Ruta protegida sin sesión → login
  if (isProtected(pathname) && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Usuario autenticado intenta entrar a /login → dashboard
  if (AUTH_ROUTES.includes(pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/numeros/:path*',
    '/mi-perfil/:path*',
    '/devocional/:path*',
    '/favoritos/:path*',
    '/entorno/:path*',
    '/onboarding/:path*',
    '/login',
  ],
}
