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
    { href: '#location', label: 'Де ми' },
    { href: '#contact', label: 'Контакти' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary-600">
            ГО &quot;Спільний будинок&quot;
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.label}
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
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 transition-colors duration-200"
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

