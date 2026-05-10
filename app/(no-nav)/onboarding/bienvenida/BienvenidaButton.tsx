'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function BienvenidaButton() {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    await fetch('/api/usuario/bienvenida', { method: 'PATCH' })
    window.location.href = '/mi-perfil'
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-purple-900/40"
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Un momento...
        </>
      ) : (
        'Entendido, comenzar mi estudio'
      )}
    </button>
  )
}
