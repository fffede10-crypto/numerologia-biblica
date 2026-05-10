import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-[#1A1033] border border-gray-200 dark:border-[#2D2050] rounded-xl p-5 shadow-sm',
        className
      )}
    >
      {children}
    </div>
  )
}
