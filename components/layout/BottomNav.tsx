'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen, User, Sun, Users } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/dashboard',  label: 'Inicio',     icon: LayoutDashboard },
  { href: '/numeros',    label: 'Números',    icon: BookOpen },
  { href: '/mi-perfil',  label: 'Perfil',     icon: User },
  { href: '/devocional', label: 'Devocional', icon: Sun },
  { href: '/entorno',    label: 'Entorno',    icon: Users },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around h-16 border-t border-gray-200 dark:border-purple-900/40 bg-white/95 dark:bg-[#0F0A1E]/95 backdrop-blur-sm">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-colors min-w-0 ${
              active
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300'
            }`}
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium leading-none">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
