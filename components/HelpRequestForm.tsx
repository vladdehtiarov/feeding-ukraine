'use client'

import { useState, FormEvent } from 'react'
import { HeartHandshake, CheckCircle } from 'lucide-react'

export default function HelpRequestForm() {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Help request form submitted:', formData)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        familySize: '',
        children: '',
        category: '',
        situation: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <section id="help-request" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-warm-50 to-peach-50 rounded-2xl p-12 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ваша заявка прийнята!
            </h3>
            <p className="text-xl text-gray-700">
              Ми розглянемо вашу ситуацію та зв'яжемося з вами найближчим часом
            </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Отримати допомогу
            </h2>
            <p className="text-xl text-gray-700">
              Заповніть форму і ми обов'язково вам допоможемо
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-warm-50 to-peach-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Прізвище, ім'я, по батькові *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder="Іванов Іван Іванович"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="+38 (0__) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                Адреса проживання *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                placeholder="м. Київ, вул. ..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="familySize" className="block text-gray-700 font-semibold mb-2">
                  Кількість осіб в сім'ї *
                </label>
                <input
                  type="number"
                  id="familySize"
                  name="familySize"
                  value={formData.familySize}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="1"
                />
              </div>

              <div>
                <label htmlFor="children" className="block text-gray-700 font-semibold mb-2">
                  Кількість дітей
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                Категорія *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Оберіть категорію</option>
                <option value="multichild">Багатодітна сім'я</option>
                <option value="elderly">Малозабезпечена особа похилого віку</option>
                <option value="single-parent">Неповна сім'я</option>
                <option value="disabled">Особа з інвалідністю</option>
                <option value="other">Інше</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="situation" className="block text-gray-700 font-semibold mb-2">
                Опишіть вашу ситуацію *
              </label>
              <textarea
                id="situation"
                name="situation"
                value={formData.situation}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent outline-none transition-all resize-none bg-white"
                placeholder="Розкажіть про ваші обставини..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-warm-600 text-white rounded-full font-semibold text-lg hover:bg-warm-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Надіслати заявку
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              * — обов'язкові поля
            </p>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Ваші персональні дані будуть оброблені конфіденційно та використані виключно для надання допомоги
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

