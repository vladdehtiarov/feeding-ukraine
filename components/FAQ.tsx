'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useTranslation()

  const faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
    { q: 'faq.q6', a: 'faq.a6' },
    { q: 'faq.q7', a: 'faq.a7' },
    { q: 'faq.q8', a: 'faq.a8' },
    { q: 'faq.q9', a: 'faq.a9' },
    { q: 'faq.q10', a: 'faq.a10' },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-warm-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">{t('faq.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {t('faq.heading')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-warm-50/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <HelpCircle className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                    {t(faq.q)}
                  </h3>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-primary-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-8 pb-6 pl-16">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t(faq.a)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 text-lg mb-4">{t('faq.notFound')}</p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('faq.contactBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
