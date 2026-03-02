'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-warm-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">{t('contact.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {t('contact.heading')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100 hover:-translate-y-2 hover-lift">
            <div className="flex items-start">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mr-5 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{t('contact.addressTitle')}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('contact.addressText').split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-warm-100 hover:-translate-y-2 hover-lift">
            <div className="flex items-start">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-warm-500 to-warm-600 rounded-2xl mr-5 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-warm-600 transition-colors duration-300">{t('contact.phoneTitle')}</h3>
                <a
                  href="tel:+380682481167"
                  className="text-gray-600 text-lg hover:text-warm-600 transition-colors duration-300 block"
                >
                  +38 (068) 248-11-67
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-peach-100 hover:-translate-y-2 hover-lift">
            <div className="flex items-start">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-peach-500 to-peach-600 rounded-2xl mr-5 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-peach-600 transition-colors duration-300">{t('contact.emailTitle')}</h3>
                <a
                  href="mailto:jointhome@ukr.net"
                  className="text-gray-600 text-lg hover:text-peach-600 transition-colors duration-300 break-all block"
                >
                  jointhome@ukr.net
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100 hover:-translate-y-2 hover-lift">
            <div className="flex items-start">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mr-5 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{t('contact.hoursTitle')}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('contact.hoursWeekdays')}
                  <br />
                  {t('contact.hoursWeekend')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
