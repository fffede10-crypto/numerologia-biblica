'use client'

import { useEffect } from 'react'

export default function MarcarVisto({ numeroId }: { numeroId: number }) {
  useEffect(() => {
    fetch('/api/numeros/visto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numero_id: numeroId }),
    }).catch(() => {})
  }, [numeroId])

  return null
}
