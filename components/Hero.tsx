'use client'

import { Heart, Users, Package } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-warm-50 via-peach-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Разом ми{' '}
            <span className="text-primary-600">годуємо</span>
            <br />
            тих, хто потребує
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ми віримо, що кожна людина заслуговує на гідне життя. Наша місія — забезпечити продуктами харчування тих, хто опинився в складних життєвих обставинах.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#donate"
              className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Підтримати
            </a>
            <a
              href="#volunteer"
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl border-2 border-primary-600"
            >
              Стати волонтером
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Heart className="text-primary-600" size={32} />
            </div>
            <h3 className="text-4xl font-bold text-primary-600 mb-2">500+</h3>
            <p className="text-gray-600">Родин отримали допомогу</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-100 rounded-full mb-4">
              <Package className="text-warm-600" size={32} />
            </div>
            <h3 className="text-4xl font-bold text-warm-600 mb-2">2000+</h3>
            <p className="text-gray-600">Продуктових наборів</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-peach-100 rounded-full mb-4">
              <Users className="text-peach-600" size={32} />
            </div>
            <h3 className="text-4xl font-bold text-peach-600 mb-2">50+</h3>
            <p className="text-gray-600">Активних волонтерів</p>
          </div>
        </div>
      </div>
    </section>
  )
}

