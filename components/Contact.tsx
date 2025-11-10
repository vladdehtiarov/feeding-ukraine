'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Контакти
          </h2>
          <p className="text-xl text-gray-700">
            Зв'яжіться з нами — ми завжди раді відповісти на ваші запитання
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Наша адреса</h3>
                <p className="text-gray-700">
                  м. Київ, бульвар Лесі Українки, 28
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warm-50 to-peach-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-warm-600 rounded-full mr-4 flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Телефон</h3>
                <a 
                  href="tel:+380682481167" 
                  className="text-gray-700 hover:text-warm-600 transition-colors"
                >
                  +38 (068) 248-11-67
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-peach-50 to-primary-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-peach-600 rounded-full mr-4 flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <a 
                  href="mailto:jointhome@ukr.net" 
                  className="text-gray-700 hover:text-peach-600 transition-colors break-all"
                >
                  jointhome@ukr.net
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mr-4 flex-shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Години роботи</h3>
                <p className="text-gray-700">
                  Пн-Пт: 9:00 - 18:00
                  <br />
                  Сб-Нд: За домовленістю
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

