import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'ГО "Спільний будинок" - Допомога тим, хто потребує',
  description: 'Благодійна організація "Спільний будинок" займається допомогою людям, які потребують продуктів харчування',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

