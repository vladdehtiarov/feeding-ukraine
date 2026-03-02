'use client'

import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function Impact() {
  const { t } = useTranslation()

  const stats = [
    { number: '500+', labelKey: 'impact.stat1', color: 'primary' },
    { number: '2000+', labelKey: 'impact.stat2', color: 'warm' },
    { number: '50+', labelKey: 'impact.stat3', color: 'peach' },
    { number: '5000+', labelKey: 'impact.stat4', color: 'primary' },
  ]

  const kitItems = [
    { emoji: '🍞', key: 'impact.kit1' },
    { emoji: '🥫', key: 'impact.kit2' },
    { emoji: '🍝', key: 'impact.kit3' },
    { emoji: '🌾', key: 'impact.kit4' },
    { emoji: '🥛', key: 'impact.kit5' },
    { emoji: '🍚', key: 'impact.kit6' },
  ]

  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-warm-50 to-peach-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,186,153,0.2),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">{t('impact.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t('impact.heading')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            {t('impact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-2"
            >
              <h3 className={`text-5xl font-bold text-${stat.color}-600 mb-3`}>
                {stat.number}
              </h3>
              <p className="text-gray-700 font-medium">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-2xl border border-primary-100">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
            {t('impact.kitTitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {kitItems.map((item, index) => (
              <div key={index} className="group p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-warm-50 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <p className="text-gray-800 font-semibold text-lg">{t(item.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
