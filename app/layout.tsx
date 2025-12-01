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
  title: 'ГО "Спільний будинок" - Допомога постраждалим від війни в Україні',
  description: 'Благодійна організація, що допомагає людям, які потребують продуктів харчування та ліків через війну Росії проти України. Підтримка багатодітних сімей, людей похилого віку та всіх постраждалих. Київ, Україна.',
  keywords: ['благодійність', 'допомога', 'продукти харчування', 'ліки', 'війна в Україні', 'постраждалі', 'Київ', 'волонтерство', 'донати', 'ГО Спільний будинок', 'humanitarian aid Ukraine'],
  authors: [{ name: 'ГО "Спільний будинок"' }],
  openGraph: {
    title: 'ГО "Спільний будинок" - Допомога постраждалим від війни',
    description: 'Благодійна організація, що допомагає людям, які потребують продуктів харчування та ліків через війну в Україні',
    type: 'website',
    locale: 'uk_UA',
    siteName: 'ГО "Спільний будинок"',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ГО "Спільний будинок"',
    description: 'Допомога постраждалим від війни в Україні - продукти харчування та ліки',
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

