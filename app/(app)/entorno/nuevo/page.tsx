import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import EntornoForm from '@/components/features/EntornoForm'

export default function NuevoEntornoPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <Link
        href="/entorno"
        className="inline-flex items-center gap-1 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
      >
        <ChevronLeft size={15} />
        Volver a Mi Entorno
      </Link>

      <h1 className="text-2xl font-bold text-white mb-1">Nueva persona</h1>
      <p className="text-slate-400 text-sm mb-8">
        Completá los datos para calcular su perfil numerológico bíblico.
      </p>

      <EntornoForm />
    </div>
  )
}
