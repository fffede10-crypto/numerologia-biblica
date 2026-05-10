import { Suspense } from 'react'
import Link from 'next/link'
import LoginForm from '@/components/features/LoginForm'

interface Props {
  searchParams: { reset?: string }
}

export const metadata = {
  title: 'Iniciar sesión — Numerología Bíblica',
}

export default function LoginPage({ searchParams }: Props) {
  const resetToken = searchParams.reset

  return (
    <div className="min-h-dvh bg-white dark:bg-[#0F0A1E] flex flex-col">

      {/* Navbar mínimo */}
      <nav className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-amber-500">✦</span>
          <span className="font-semibold text-sm tracking-wide text-gray-900 dark:text-white">Numerología Bíblica</span>
        </Link>
      </nav>

      {/* Formulario centrado */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm space-y-8">

          {/* Logo */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/40 flex items-center justify-center mx-auto mb-5">
              <span className="text-amber-400 text-2xl">✦</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">✦ Números Bíblicos</h1>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Tu estudio bíblico de numerología sagrada</p>
          </div>

          {/* Formulario — Suspense necesario por useSearchParams */}
          <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100 dark:bg-[#1A1035] rounded-xl" />}>
            <LoginForm resetToken={resetToken} />
          </Suspense>

          {/* Testimonial */}
          {!resetToken && (
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4">
              <p className="text-amber-500 text-sm mb-2">✦</p>
              <p className="text-gray-600 dark:text-slate-400 text-sm italic leading-relaxed">
                &ldquo;Esto cambió cómo leo mi Biblia. Ahora entiendo por qué ciertos números aparecen en momentos clave de mi vida.&rdquo;
              </p>
              <p className="text-gray-400 dark:text-slate-600 text-xs mt-2">— María Elena, Buenos Aires</p>
            </div>
          )}

          {/* Nota de acceso */}
          {!resetToken && (
            <p className="text-center text-xs text-gray-500 dark:text-slate-600 leading-relaxed">
              ¿No tenés acceso?{' '}
              <Link href="/" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                Obtené el tuyo
              </Link>
            </p>
          )}
        </div>
      </div>

      {/* Footer mínimo */}
      <footer className="text-center py-4 text-xs text-gray-400 dark:text-slate-700 border-t border-gray-200 dark:border-white/5">
        <p className="font-scripture italic text-gray-500 dark:text-slate-600">
          "Confía en el Señor con todo tu corazón." — Proverbios 3:5
        </p>
      </footer>

    </div>
  )
}
