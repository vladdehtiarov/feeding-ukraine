'use client'

import { MapPin } from 'lucide-react'

export default function LocationMap() {
  return (
    <section id="location" className="py-20 bg-gradient-to-br from-peach-50 via-warm-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-peach-600 rounded-full mb-6">
            <MapPin className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Де нас знайти
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Приходьте до нашого офісу або зв'яжіться з нами для отримання допомоги
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="h-96 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.8540753!2d30.5358958!3d50.4262839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x5f8c8a9d4e3a2c1b!2z0LHRg9C70YzQstCw0YAg0JvQtdGB0ZYg0KPQutGA0LDRl9C90LrQuCwgMjYsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1699999999999!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта розташування ГО Спільний будинок"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-gray-800 mb-2">Адреса</h3>
            <p className="text-gray-600">
              бульвар Лесі Українки, 26
              <br />
              м. Київ
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl mb-3">🚇</div>
            <h3 className="font-semibold text-gray-800 mb-2">Метро</h3>
            <p className="text-gray-600">
              Станція &quot;Печерська&quot;
              <br />
              Біля метро
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="font-semibold text-gray-800 mb-2">Видача продуктів та ліків</h3>
            <p className="text-gray-600">
              Пн-Пт: 10:00 - 17:00
              <br />
              Сб: 10:00 - 14:00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

