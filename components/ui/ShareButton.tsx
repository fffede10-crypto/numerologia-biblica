'use client'

import { useState } from 'react'
import { Share2 } from 'lucide-react'
import { Toast } from './Toast'

interface ShareButtonProps {
  titulo: string
  versiculo: { cita: string; texto: string }
  aplicacionDevocional?: string | null
}

function buildShareText(
  titulo: string,
  versiculo: { cita: string; texto: string },
  aplicacionDevocional?: string | null,
): string {
  let text = `✦ Números Bíblicos — ${titulo}\n"${versiculo.texto}"\n— ${versiculo.cita}`

  if (aplicacionDevocional) {
    const sentences = aplicacionDevocional
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean)
    const excerpt = sentences.slice(0, 2).join(' ')
    if (excerpt) text += `\n\n${excerpt}`
  }

  text += `\n\n📖 Explorá el significado completo en numerosbíblicos.com`
  return text
}

export default function ShareButton({ titulo, versiculo, aplicacionDevocional }: ShareButtonProps) {
  const [showToast, setShowToast] = useState(false)

  async function handleShare() {
    const text = buildShareText(titulo, versiculo, aplicacionDevocional)

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ text })
        return
      } catch {
        // user cancelled or API error — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(text)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch {
      // clipboard unavailable — silent fail
    }
  }

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border font-medium text-sm transition-all bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-300 hover:border-green-400 dark:hover:border-green-500/60 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/10"
      >
        <Share2 size={16} />
        Compartir reflexión
      </button>
      <Toast
        message="¡Copiado al portapapeles! Listo para compartir en WhatsApp 🙌"
        visible={showToast}
      />
    </>
  )
}
