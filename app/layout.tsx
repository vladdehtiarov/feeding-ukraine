import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ef9138',
}

export const metadata: Metadata = {
  title: 'ГО "Спільний будинок" - Допомога тим, хто потребує продуктів харчування',
  description: 'Благодійна організація "Спільний будинок" займається допомогою багатодітним сім\'ям, людям похилого віку та всім, хто потребує продуктів харчування. Київ, Україна.',
  keywords: ['благодійність', 'допомога', 'продукти харчування', 'Київ', 'волонтерство', 'донати', 'ГО Спільний будинок'],
  authors: [{ name: 'ГО "Спільний будинок"' }],
  openGraph: {
    title: 'ГО "Спільний будинок" - Допомога тим, хто потребує',
    description: 'Благодійна організація, що допомагає людям, які потребують продуктів харчування',
    type: 'website',
    locale: 'uk_UA',
    siteName: 'ГО "Спільний будинок"',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ГО "Спільний будинок"',
    description: 'Допомога тим, хто потребує продуктів харчування',
  },
  robots: 'index, follow',
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

