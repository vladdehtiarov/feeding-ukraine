'use client'

import { useState, FormEvent } from 'react'
import { Users, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export default function VolunteerForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    experience: '',
    motivation: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    try {
      await fetch('https://script.google.com/macros/s/AKfycbz3e8phbFH5cqzdHfKWs9inqVw1ib2XBtwZf6pimH7RYzHgVolS42ld-5wAjwt-Ay8iMQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', phone: '', email: '', age: '', experience: '', motivation: '' })
      }, 3000)
    } catch (error) {
      console.error('Помилка відправки:', error)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="volunteer" className="py-20 bg-gradient-to-br from-warm-50 via-primary-50 to-peach-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-12 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t('volunteer.thankYouTitle')}</h3>
            <p className="text-xl text-gray-700">{t('volunteer.thankYouDesc')}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-warm-50 via-primary-50 to-peach-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t('volunteer.heading')}</h2>
            <p className="text-xl text-gray-700">{t('volunteer.description')}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  {t('volunteer.labelName')}
                </label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('volunteer.placeholderName')}
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
                  {t('volunteer.labelAge')}
                </label>
                <input
                  type="number" id="age" name="age" value={formData.age} onChange={handleChange} required min="18" max="99"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('volunteer.placeholderAge')}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  {t('volunteer.labelPhone')}
                </label>
                <input
                  type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('volunteer.placeholderPhone')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  {t('volunteer.labelEmail')}
                </label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2">
                {t('volunteer.labelExperience')}
              </label>
              <input
                type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder={t('volunteer.placeholderExperience')}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="motivation" className="block text-gray-700 font-semibold mb-2">
                {t('volunteer.labelMotivation')}
              </label>
              <textarea
                id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} required rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder={t('volunteer.placeholderMotivation')}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg hover:shadow-[0_20px_50px_rgba(239,145,56,0.4)] transition-all duration-500 shadow-xl hover:scale-105 hover:-translate-y-1"
              aria-label={t('volunteer.submitBtn')}
            >
              {t('volunteer.submitBtn')}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">{t('volunteer.required')}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
