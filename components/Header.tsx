'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import type { Locale } from '@/lib/i18n/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, locale, setLocale } = useTranslation()

  const menuItems = [
    { href: '#about', labelKey: 'header.about' },
    { href: '#impact', labelKey: 'header.impact' },
    { href: '#help', labelKey: 'header.help' },
    { href: '#donate', labelKey: 'header.donate' },
    { href: '#volunteer', labelKey: 'header.volunteer' },
    { href: '#faq', labelKey: 'header.faq' },
    { href: '#location', labelKey: 'header.location' },
    { href: '#contact', labelKey: 'header.contact' },
  ]

  const languages: { code: Locale; label: string }[] = [
    { code: 'uk', label: 'UA' },
    { code: 'en', label: 'EN' },
  ]

  return (
    <header className="fixed top-0 w-full glass border-b border-white/20 shadow-lg z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-warm-600 to-peach-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            {t('common.orgName')}
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group text-sm"
                >
                  {t(item.labelKey)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-warm-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher — Desktop */}
          <div className="hidden md:flex items-center gap-1 ml-6 bg-gray-100/80 rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${locale === lang.code
                  ? 'bg-gradient-to-r from-primary-600 to-warm-600 text-white shadow-md scale-105'
                  : 'text-gray-500 hover:text-primary-600'
                  }`}
                aria-label={`Switch to ${lang.label}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4">
            <ul className="space-y-2 mb-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher — Mobile */}
            <div className="flex gap-2 px-4 pt-2 border-t border-gray-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLocale(lang.code); setIsMenuOpen(false) }}
                  className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${locale === lang.code
                    ? 'bg-gradient-to-r from-primary-600 to-warm-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:text-primary-600'
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
