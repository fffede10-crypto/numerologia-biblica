'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2, Eye, EyeOff, Mail, Lock, ChevronRight } from 'lucide-react'

type Mode = 'login' | 'forgot' | 'reset'

interface LoginFormProps {
  resetToken?: string
}

export default function LoginForm({ resetToken }: LoginFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') ?? '/dashboard'

  const [mode, setMode] = useState<Mode>(resetToken ? 'reset' : 'login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Error al iniciar sesión')
        return
      }
      router.push(redirectTo)
      router.refresh()
    } catch {
      setError('Error de conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      setSuccess('Si ese email tiene una cuenta, recibirás las instrucciones en minutos.')
    } catch {
      setError('Error de conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault()
    if (newPassword.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: resetToken, newPassword }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Token inválido o expirado')
        return
      }
      setSuccess('Contraseña actualizada. Podés iniciar sesión ahora.')
      setTimeout(() => setMode('login'), 2000)
    } catch {
      setError('Error de conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-gray-50 dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none transition-colors text-sm'

  const inputClassPassword =
    'w-full bg-gray-50 dark:bg-[#1A1035] border border-gray-200 dark:border-purple-900/40 focus:border-purple-500 dark:focus:border-purple-600 rounded-xl px-4 py-3 pr-11 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none transition-colors text-sm'

  const labelClass = 'block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1.5'

  return (
    <div className="space-y-6">
      {/* Título del modo */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {mode === 'login' && 'Iniciar sesión'}
          {mode === 'forgot' && 'Recuperar contraseña'}
          {mode === 'reset' && 'Nueva contraseña'}
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
          {mode === 'login' && 'Ingresá con las credenciales de tu compra'}
          {mode === 'forgot' && 'Te enviaremos un link de recuperación'}
          {mode === 'reset' && 'Elegí una nueva contraseña segura'}
        </p>
      </div>

      {/* Mensajes de feedback */}
      {error && (
        <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl px-4 py-3">
          {error}
        </div>
      )}
      {success && (
        <div className="text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl px-4 py-3">
          {success}
        </div>
      )}

      {/* Login */}
      {mode === 'login' && (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className={labelClass}>
              <Mail size={12} className="inline mr-1 text-purple-500 dark:text-purple-400" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="tu@email.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              <Lock size={12} className="inline mr-1 text-purple-500 dark:text-purple-400" />
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className={inputClassPassword}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {loading
              ? <><Loader2 size={18} className="animate-spin" /> Ingresando…</>
              : <>Ingresar <ChevronRight size={16} /></>
            }
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => { setMode('forgot'); setError(''); setSuccess('') }}
              className="text-sm text-gray-400 dark:text-slate-500 hover:text-gray-700 dark:hover:text-slate-300 transition-colors underline underline-offset-2"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </form>
      )}

      {/* Forgot password */}
      {mode === 'forgot' && (
        <form onSubmit={handleForgot} className="space-y-4">
          <div>
            <label className={labelClass}>
              <Mail size={12} className="inline mr-1 text-purple-500 dark:text-purple-400" />
              Email de tu cuenta
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !!success}
            className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {loading ? <><Loader2 size={18} className="animate-spin" /> Enviando…</> : 'Enviar instrucciones'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(''); setSuccess('') }}
              className="text-sm text-gray-400 dark:text-slate-500 hover:text-gray-700 dark:hover:text-slate-300 transition-colors underline underline-offset-2"
            >
              Volver al inicio de sesión
            </button>
          </div>
        </form>
      )}

      {/* Reset password */}
      {mode === 'reset' && (
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className={labelClass}>
              <Lock size={12} className="inline mr-1 text-purple-500 dark:text-purple-400" />
              Nueva contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                placeholder="Mínimo 8 caracteres"
                className={inputClassPassword}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !!success}
            className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {loading ? <><Loader2 size={18} className="animate-spin" /> Guardando…</> : 'Establecer nueva contraseña'}
          </button>
        </form>
      )}
    </div>
  )
}
