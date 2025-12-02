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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'ГО "Спільний будинок"',
    alternateName: 'Спільний будинок',
    description: 'Благодійна організація, що допомагає людям, які потребують продуктів харчування та ліків через війну Росії проти України',
    url: 'https://jointhome.org',
    logo: 'https://jointhome.org/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'бульвар Лесі Українки, 26',
      addressLocality: 'Київ',
      addressCountry: 'UA'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+380682481167',
      email: 'jointhome@ukr.net',
      contactType: 'customer service',
      availableLanguage: ['Ukrainian', 'Russian']
    },
    sameAs: [
      // Add social media links here when available
    ],
    foundingDate: '2023',
    areaServed: {
      '@type': 'Country',
      name: 'Ukraine'
    },
    knowsAbout: ['humanitarian aid', 'food assistance', 'war victims', 'Ukraine'],
    mission: 'Допомога громадянам України, які через війну Росії проти України не можуть забезпечити себе їжею та ліками'
  }

  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

