interface AvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-14 h-14 text-xl',
}

export function Avatar({ name, size = 'md' }: AvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase()
  return (
    <div
      className={`${SIZE[size]} rounded-full bg-purple-600 text-white font-semibold flex items-center justify-center shrink-0 select-none`}
    >
      {initial}
    </div>
  )
}
