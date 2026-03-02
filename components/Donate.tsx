'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, CreditCard, Building2, Copy, Check } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function Donate() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { t } = useTranslation()

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-warm-50 to-peach-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,145,56,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">{t('donate.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {t('donate.heading')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            {t('donate.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* QR Code Section */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-primary-100">
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
                <CreditCard className="text-white" size={36} />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {t('donate.qrTitle')}
            </h3>
            <p className="text-gray-700 mb-8 text-center">
              {t('donate.qrDesc')}
            </p>

            {/* QR Code */}
            <div className="bg-gradient-to-br from-warm-100 to-peach-100 rounded-2xl p-8 mb-6 flex items-center justify-center">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <Image
                  src="/qr-code.png"
                  alt="QR код для донатів ПриватБанк"
                  width={280}
                  height={280}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>

            <div className="bg-warm-50 rounded-xl p-6">
              <p className="text-sm text-gray-600 mb-3 text-center">{t('donate.orManually')}</p>
              <div className="flex items-center justify-between bg-white rounded-lg p-3 mb-2">
                <p className="font-mono text-lg font-semibold text-gray-800">
                  5168 7572 1234 5678
                </p>
                <button
                  onClick={() => copyToClipboard('5168757212345678', 'card')}
                  className="ml-3 p-2 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                  title={t('donate.copyCard')}
                >
                  {copiedField === 'card' ? (
                    <Check className="text-green-600" size={20} />
                  ) : (
                    <Copy className="text-gray-600" size={20} />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {t('donate.cardHolder')}
              </p>
            </div>
          </div>

          {/* Other Ways Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-warm-600 rounded-full mr-4">
                  <Building2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t('donate.bankTitle')}
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold w-32">{t('donate.recipient')}</span>
                  <span>ГО &quot;Спільний будинок&quot;</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex">
                    <span className="font-semibold w-32">{t('donate.edrpou')}</span>
                    <span>12345678</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('12345678', 'edrpou')}
                    className="p-1 hover:bg-warm-50 rounded transition-colors duration-200"
                    title={t('donate.copyEdrpou')}
                  >
                    {copiedField === 'edrpou' ? (
                      <Check className="text-green-600" size={18} />
                    ) : (
                      <Copy className="text-gray-600" size={18} />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold mb-1">{t('donate.iban')}</span>
                    <span className="font-mono text-sm">UA123456789012345678901234567</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('UA123456789012345678901234567', 'iban')}
                    className="p-1 hover:bg-warm-50 rounded transition-colors duration-200 ml-2"
                    title={t('donate.copyIban')}
                  >
                    {copiedField === 'iban' ? (
                      <Check className="text-green-600" size={18} />
                    ) : (
                      <Copy className="text-gray-600" size={18} />
                    )}
                  </button>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold w-32">{t('donate.bank')}</span>
                  <span>{t('donate.bankName')}</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <div className="flex">
                    <span className="font-semibold w-32">{t('donate.mfo')}</span>
                    <span>305299</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('305299', 'mfo')}
                    className="p-1 hover:bg-warm-50 rounded transition-colors duration-200"
                    title={t('donate.copyMfo')}
                  >
                    {copiedField === 'mfo' ? (
                      <Check className="text-green-600" size={18} />
                    ) : (
                      <Copy className="text-gray-600" size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-peach-100 to-primary-100 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="text-peach-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">
                  {t('donate.importanceTitle')}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span><strong>{t('donate.amount1')}</strong> {t('donate.amount1Desc')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span><strong>{t('donate.amount2')}</strong> {t('donate.amount2Desc')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span><strong>{t('donate.amount3')}</strong> {t('donate.amount3Desc')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <p className="text-gray-700 leading-relaxed">
                {t('donate.transparency')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
