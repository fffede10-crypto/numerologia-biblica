interface NumberBadgeProps {
  number: number | null
  label: string
  description?: string
  size?: 'sm' | 'lg'
}

export function NumberBadge({ number, label, description, size = 'sm' }: NumberBadgeProps) {
  const isMaster = number === 11 || number === 22 || number === 33

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div
        className={`flex items-center justify-center rounded-full font-bold border-2 transition-transform hover:scale-105 ${
          isMaster
            ? 'border-amber-500 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-[0_0_16px_rgba(245,158,11,0.15)]'
            : 'border-purple-500 dark:border-purple-600 bg-purple-50 dark:bg-purple-700/20 text-purple-700 dark:text-purple-300'
        } ${size === 'lg' ? 'w-20 h-20 text-3xl' : 'w-14 h-14 text-xl'}`}
      >
        {number ?? '—'}
      </div>
      <div>
        <p className={`font-semibold text-gray-900 dark:text-white ${size === 'lg' ? 'text-base' : 'text-sm'}`}>
          {label}
        </p>
        {description && (
          <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">{description}</p>
        )}
        {isMaster && (
          <p className="text-[10px] text-amber-600 dark:text-amber-400 font-medium mt-0.5">Número Maestro</p>
        )}
      </div>
    </div>
  )
}
