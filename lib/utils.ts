import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Parsea area_orientacion que puede ser un JSON array string '["a","b"]'
// o un string legado simple 'relaciones'. Siempre devuelve string[].
export function parseAreas(raw: string | null | undefined): string[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed.filter((x): x is string => typeof x === 'string')
    return [String(parsed)]
  } catch {
    return [raw]
  }
}
