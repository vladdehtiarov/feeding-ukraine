'use client'

import { Target, Users, Heart, HeartHandshake } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Про нашу організацію
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            ГО &quot;Спільний будинок&quot; — це благодійна організація, створена з метою допомоги людям, які з різних причин не можуть забезпечити себе найнеобхіднішим — їжею.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Наша мета</h3>
            <p className="text-gray-700 leading-relaxed">
              Забезпечити продуктами харчування багатодітні сім'ї, малозабезпечених людей похилого віку та всіх, хто потребує допомоги в складних життєвих обставинах.
            </p>
          </div>

          <div className="bg-gradient-to-br from-peach-50 to-primary-50 rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-peach-600 rounded-full mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Наші цінності</h3>
            <p className="text-gray-700 leading-relaxed">
              Ми віримо в силу спільноти, гідність кожної людини та важливість підтримки у важкі часи. Разом ми створюємо теплий дім для всіх.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-warm-100 via-peach-100 to-primary-100 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Кому ми допомагаємо
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                <Users className="text-primary-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Багатодітні сім'ї
              </h4>
              <p className="text-gray-700">
                Підтримуємо родини з трьома та більше дітьми
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                <HeartHandshake className="text-warm-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Люди похилого віку
              </h4>
              <p className="text-gray-700">
                Допомагаємо малозабезпеченим пенсіонерам
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                <Heart className="text-peach-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Потребуючі
              </h4>
              <p className="text-gray-700">
                Всі, хто опинився в складних обставинах
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

