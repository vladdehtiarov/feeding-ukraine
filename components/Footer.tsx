'use client'

import { Heart, Mail, Phone } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,145,56,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-warm-400 bg-clip-text text-transparent">
                {t('common.orgName')}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('footer.tagline')}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {t('footer.about')}
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {t('footer.impact')}
                  </a>
                </li>
                <li>
                  <a href="#donate" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {t('footer.donate')}
                  </a>
                </li>
                <li>
                  <a href="#volunteer" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {t('footer.volunteer')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t('footer.address')}</li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+380682481167" className="hover:text-primary-400 transition-colors">
                    +38 (068) 248-11-67
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:jointhome@ukr.net" className="hover:text-primary-400 transition-colors">
                    jointhome@ukr.net
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/50 pt-10 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-1 text-lg">
              <span>{t('footer.copyright')}</span>
              <Heart className="text-red-400 animate-pulse" size={20} fill="currentColor" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
