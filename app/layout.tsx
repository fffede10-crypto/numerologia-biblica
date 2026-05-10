import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Numerología Bíblica',
  description: 'Descubre el significado profundo de los números en las Escrituras',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-[#0F0A1E] dark:text-white antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
