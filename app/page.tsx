import Link from 'next/link'
import { ChevronRight, BookOpen, User, Sun, Heart, CheckCircle2, Star } from 'lucide-react'

const CHECKOUT_URL = process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL ?? '#'

const NUMEROS_PREVIEW = [
  { numero: 1, nombre: 'Unidad Divina', desc: 'El principio de todo, la soberanía de Dios' },
  { numero: 7, nombre: 'Perfección Espiritual', desc: 'El número de la plenitud y el descanso divino' },
  { numero: 12, nombre: 'Gobierno Divino', desc: 'Las 12 tribus, los 12 apóstoles, la autoridad de Dios' },
  { numero: 40, nombre: 'Prueba y Transformación', desc: '40 años en el desierto, 40 días de Jesús' },
]

const CARACTERISTICAS = [
  { icon: BookOpen, titulo: '40 Números Bíblicos', desc: 'Cada número con versículo, significado profundo, aplicación personal y oración.' },
  { icon: User, titulo: 'Perfil Numérico Personal', desc: 'Calculamos tus 4 números personales basados en tu nombre y fecha de nacimiento.' },
  { icon: Sun, titulo: 'Devocional Diario', desc: 'Un número diferente cada día con reflexión guiada y seguimiento de progreso.' },
  { icon: Heart, titulo: 'Biblioteca Personal', desc: 'Guardá los números que más te resuenen y accedé a ellos cuando quieras.' },
]

const PASOS = [
  { num: '01', titulo: 'Comprá el acceso', desc: 'Un único pago, acceso de por vida. Sin suscripciones ni cobros ocultos.' },
  { num: '02', titulo: 'Recibí tus credenciales', desc: 'En minutos llegan por email tu usuario y contraseña temporal.' },
  { num: '03', titulo: 'Explorá tu camino', desc: 'Ingresá, completá tu perfil y comenzá a descubrir el significado de tus números.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-[#0F0A1E] text-white">

      {/* Navbar público */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 border-b border-white/5 bg-[#0F0A1E]/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-[#F59E0B] text-lg">✦</span>
          <span className="font-semibold tracking-wide text-sm md:text-base">Numerología Bíblica</span>
        </div>
        <Link
          href="/login"
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          Iniciar sesión
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 md:px-10 text-center overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/5 text-[#F59E0B] text-xs font-medium tracking-wider uppercase">
            <Star size={12} className="fill-[#F59E0B]" />
            40 números con significado bíblico profundo
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Descubrí el lenguaje{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]">
              numérico
            </span>{' '}
            de las{' '}
            <span className="text-[#F59E0B]">Escrituras</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            Explorá los 40 números bíblicos más importantes, calculá tu perfil numérico personal
            y conectá con la Palabra de Dios de una forma completamente nueva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-900/30 text-base"
            >
              Obtener acceso vitalicio <ChevronRight size={18} />
            </a>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-purple-600/50 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all text-base"
            >
              Ya tengo acceso
            </Link>
          </div>

          <p className="text-xs text-slate-600">
            Pago único · Acceso inmediato · Sin suscripciones
          </p>
        </div>
      </section>

      {/* Preview de números */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8">
            Una muestra de la biblioteca
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NUMEROS_PREVIEW.map(({ numero, nombre, desc }) => (
              <div
                key={numero}
                className="bg-[#1A1035] border border-purple-900/40 rounded-xl p-5 text-center space-y-3 hover:border-purple-700/60 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full border-2 border-purple-700/60 bg-purple-900/20 text-purple-300 flex items-center justify-center text-xl font-bold mx-auto group-hover:border-purple-500 transition-colors">
                  {numero}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{nombre}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Y <span className="text-purple-400 font-medium">36 números más</span> con versículos, oraciones y aplicación personal.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-transparent to-[#120D28]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Así de simple es comenzar
          </h2>
          <div className="space-y-6">
            {PASOS.map(({ num, titulo, desc }) => (
              <div key={num} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/40 flex items-center justify-center text-[#F59E0B] font-bold text-sm shrink-0">
                  {num}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-white mb-1">{titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Todo lo que incluye tu acceso
          </h2>
          <p className="text-slate-400 text-center text-sm mb-12">
            Un producto completo, sin límites de tiempo ni funciones bloqueadas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CARACTERISTICAS.map(({ icon: Icon, titulo, desc }) => (
              <div
                key={titulo}
                className="flex gap-4 bg-[#1A1035] border border-purple-900/40 rounded-xl p-5 hover:border-purple-700/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-700/20 border border-purple-700/30 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lista de todo incluido */}
          <div className="mt-8 bg-[#1A1035] border border-purple-900/40 rounded-xl p-6">
            <p className="text-sm font-semibold text-slate-300 mb-4">Todo incluido en un solo pago:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Acceso vitalicio a los 40 números',
                'Perfil numérico personalizado',
                'Devocional diario con seguimiento',
                'Biblioteca de favoritos',
                'Actualizaciones futuras incluidas',
                'Sin publicidad ni distracciones',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-[#F59E0B] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Versículo */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="text-[#F59E0B] text-3xl">✦</span>
          <blockquote className="font-scripture text-xl md:text-2xl text-slate-200 leading-relaxed italic">
            "Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos."
          </blockquote>
          <cite className="text-sm text-slate-500 not-italic">— Hebreos 4:12</cite>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/40 justify-center mx-auto mb-2">
            <span className="text-[#F59E0B] text-2xl">✦</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Tu camino de descubrimiento{' '}
            <span className="text-[#F59E0B]">comienza aquí</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Más de 40 números bíblicos esperan ser descubiertos. Empezá hoy y explorá
            el significado que Dios puso en los números de las Escrituras.
          </p>
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-semibold px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-900/30 text-base"
          >
            Obtener acceso vitalicio <ChevronRight size={18} />
          </a>
          <p className="text-xs text-slate-600">Pago único · Acceso inmediato</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-[#F59E0B]">✦</span>
            <span>Numerología Bíblica</span>
          </div>
          <p>© {new Date().getFullYear()} · Todos los derechos reservados</p>
          <Link href="/login" className="hover:text-slate-400 transition-colors">
            Iniciar sesión
          </Link>
        </div>
      </footer>

    </div>
  )
}
