'use client'

import { HeartHandshake, Users, Package, MessageCircle } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function HowToHelp() {
  const { t } = useTranslation()

  const ways = [
    {
      icon: HeartHandshake,
      titleKey: 'howToHelp.way1Title',
      descKey: 'howToHelp.way1Desc',
      actionKey: 'howToHelp.way1Action',
      href: '#donate',
      color: 'primary',
    },
    {
      icon: Users,
      titleKey: 'howToHelp.way2Title',
      descKey: 'howToHelp.way2Desc',
      actionKey: 'howToHelp.way2Action',
      href: '#volunteer',
      color: 'warm',
    },
    {
      icon: Package,
      titleKey: 'howToHelp.way3Title',
      descKey: 'howToHelp.way3Desc',
      actionKey: 'howToHelp.way3Action',
      href: '#location',
      color: 'peach',
    },
    {
      icon: MessageCircle,
      titleKey: 'howToHelp.way4Title',
      descKey: 'howToHelp.way4Desc',
      actionKey: 'howToHelp.way4Action',
      href: '#contact',
      color: 'primary',
    },
  ]

  return (
    <section id="help" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('howToHelp.heading')}
          </h2>
          <p className="text-xl text-gray-700">
            {t('howToHelp.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ways.map((way, index) => {
            const Icon = way.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-warm-50 to-peach-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${way.color}-600 rounded-full mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t(way.titleKey)}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t(way.descKey)}
                </p>
                <a
                  href={way.href}
                  className={`inline-block px-6 py-3 bg-${way.color}-600 text-white rounded-full font-semibold hover:bg-${way.color}-700 transition-colors duration-200`}
                >
                  {t(way.actionKey)}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
