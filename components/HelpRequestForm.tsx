'use client'

import { useState, FormEvent } from 'react'
import { HeartHandshake, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function HelpRequestForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    familySize: '',
    children: '',
    category: '',
    situation: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwWvHrBo4_Stufg5benVxGlZhtdBM9Ky7rVuZKPPTCYJMJc3-lWDMiWVQzCPjXKYSvL/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', phone: '', email: '', address: '', familySize: '', children: '', category: '', situation: '' })
      }, 3000)
    } catch (error) {
      console.error('Помилка відправки:', error)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="help-request" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-warm-50 to-peach-50 rounded-2xl p-12 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t('helpRequest.thankYouTitle')}</h3>
            <p className="text-xl text-gray-700">{t('helpRequest.thankYouDesc')}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="help-request" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-600 rounded-full mb-6">
              <HeartHandshake className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t('helpRequest.heading')}</h2>
            <p className="text-xl text-gray-700">{t('helpRequest.description')}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-warm-50 to-peach-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                {t('helpRequest.labelName')}
              </label>
              <input
                type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder={t('helpRequest.placeholderName')}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  {t('helpRequest.labelPhone')}
                </label>
                <input
                  type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder={t('helpRequest.placeholderPhone')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  {t('helpRequest.labelEmail')}
                </label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                {t('helpRequest.labelAddress')}
              </label>
              <input
                type="text" id="address" name="address" value={formData.address} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder={t('helpRequest.placeholderAddress')}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="familySize" className="block text-gray-700 font-semibold mb-2">
                  {t('helpRequest.labelFamilySize')}
                </label>
                <input
                  type="number" id="familySize" name="familySize" value={formData.familySize} onChange={handleChange} required min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder={t('helpRequest.placeholderFamilySize')}
                />
              </div>
              <div>
                <label htmlFor="children" className="block text-gray-700 font-semibold mb-2">
                  {t('helpRequest.labelChildren')}
                </label>
                <input
                  type="number" id="children" name="children" value={formData.children} onChange={handleChange} min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder={t('helpRequest.placeholderChildren')}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                {t('helpRequest.labelCategory')}
              </label>
              <select
                id="category" name="category" value={formData.category} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">{t('helpRequest.categoryDefault')}</option>
                <option value="war-affected">{t('helpRequest.categoryWarAffected')}</option>
                <option value="multichild">{t('helpRequest.categoryMultichild')}</option>
                <option value="elderly">{t('helpRequest.categoryElderly')}</option>
                <option value="single-parent">{t('helpRequest.categorySingleParent')}</option>
                <option value="disabled">{t('helpRequest.categoryDisabled')}</option>
                <option value="other">{t('helpRequest.categoryOther')}</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="situation" className="block text-gray-700 font-semibold mb-2">
                {t('helpRequest.labelSituation')}
              </label>
              <textarea
                id="situation" name="situation" value={formData.situation} onChange={handleChange} required rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all resize-none bg-white"
                placeholder={t('helpRequest.placeholderSituation')}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-warm-600 to-warm-700 text-white rounded-full font-semibold text-lg hover:shadow-[0_20px_50px_rgba(246,217,154,0.4)] transition-all duration-500 shadow-xl hover:scale-105 hover:-translate-y-1"
              aria-label={t('helpRequest.submitBtn')}
            >
              {t('helpRequest.submitBtn')}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">{t('helpRequest.required')}</p>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600 text-center">{t('helpRequest.privacy')}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
