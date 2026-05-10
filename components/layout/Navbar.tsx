'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, BookOpen, User, Users, Sun, Heart, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_ITEMS = [
  { href: '/dashboard',  label: 'Inicio',     icon: LayoutDashboard },
  { href: '/numeros',    label: 'Números',    icon: BookOpen },
  { href: '/mi-perfil',  label: 'Mi Perfil',  icon: User },
  { href: '/devocional', label: 'Devocional', icon: Sun },
  { href: '/entorno',    label: 'Mi Entorno', icon: Users },
  { href: '/favoritos',  label: 'Favoritos',  icon: Heart },
]

interface NavbarProps {
  userName?: string | null
}

export default function Navbar({ userName }: NavbarProps) {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  async function handleLogout() {
    setLoggingOut(true)
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/login'
  }

  return (
    <>
      {/* Top bar — desktop + mobile */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 md:px-8 border-b border-gray-200 dark:border-purple-900/40 bg-white/95 dark:bg-[#0F0A1E]/95 backdrop-blur-sm">

        {/* Left: hamburger (mobile only) + logo */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button>
          <Link href="/dashboard" className="flex items-center gap-2 select-none">
            <span className="text-amber-500 text-lg font-bold leading-none">✦</span>
            <span className="text-gray-900 dark:text-white font-semibold tracking-wide text-sm hidden sm:block">
              Numerología Bíblica
            </span>
          </Link>
        </div>

        {/* Center nav — desktop only */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-purple-50 dark:bg-purple-700/30 text-purple-700 dark:text-purple-300'
                    : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                <Icon size={15} />
                <span className="hidden xl:block">{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right: ThemeToggle + logout */}
        <div className="flex items-center gap-1 shrink-0">
          <ThemeToggle />
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
          >
            <LogOut size={15} />
            <span className="hidden lg:block">Salir</span>
          </button>
        </div>
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <aside
        className={`md:hidden fixed top-0 left-0 bottom-0 z-50 w-72 bg-white dark:bg-[#0F0A1E] border-r border-gray-200 dark:border-purple-900/40 flex flex-col transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200 dark:border-purple-900/40 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-lg font-bold leading-none">✦</span>
            <span className="text-gray-900 dark:text-white font-semibold text-sm">Numerología Bíblica</span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* User info */}
        {userName && (
          <div className="px-4 py-3 border-b border-gray-100 dark:border-purple-900/30">
            <p className="text-xs text-gray-400 dark:text-slate-500">Conectado como</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate capitalize">{userName}</p>
          </div>
        )}

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-purple-50 dark:bg-purple-700/30 text-purple-700 dark:text-purple-300'
                    : 'text-gray-700 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-3 pb-8 pt-2 border-t border-gray-100 dark:border-purple-900/30">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors disabled:opacity-50"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
      </aside>
    </>
  )
}
