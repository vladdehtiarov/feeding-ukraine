'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '#about', label: 'Про нас' },
    { href: '#impact', label: 'Наші досягнення' },
    { href: '#help', label: 'Як допомогти' },
    { href: '#donate', label: 'Підтримати' },
    { href: '#volunteer', label: 'Волонтерство' },
    { href: '#faq', label: 'FAQ' },
    { href: '#location', label: 'Де ми' },
    { href: '#contact', label: 'Контакти' },
  ]

  return (
    <header className="fixed top-0 w-full glass border-b border-white/20 shadow-lg z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-warm-600 to-peach-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            ГО &quot;Спільний будинок&quot;
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-warm-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

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
          <ul className="md:hidden mt-6 space-y-2 pb-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

