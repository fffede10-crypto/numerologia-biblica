import { cn } from '@/lib/utils'

type BadgeVariant = 'basico' | 'intermedio' | 'avanzado' | 'maestro' | 'default'

const BADGE_STYLES: Record<BadgeVariant, string> = {
  basico:     'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/40',
  intermedio: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/40',
  avanzado:   'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800/40',
  maestro:    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/40',
  default:    'bg-gray-100 text-gray-600 border-gray-200 dark:bg-white/5 dark:text-slate-400 dark:border-white/10',
}

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  className?: string
}

export function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border',
        BADGE_STYLES[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
