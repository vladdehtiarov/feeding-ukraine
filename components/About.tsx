'use client'

import { Target, Users, Heart, HeartHandshake } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-warm-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Про нас</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Про нашу організацію
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            ГО &quot;Спільний будинок&quot; — це благодійна організація, створена з метою допомоги людям, які з різних причин не можуть забезпечити себе найнеобхіднішим — їжею.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-warm-100 to-transparent rounded-tr-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Target className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-5 group-hover:text-primary-600 transition-colors duration-300">Наша мета</h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                Забезпечити продуктами харчування багатодітні сім'ї, малозабезпечених людей похилого віку та всіх, хто потребує допомоги в складних життєвих обставинах.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-peach-100 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-peach-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary-100 to-transparent rounded-tr-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-peach-500 to-peach-600 rounded-2xl mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Heart className="text-white group-hover:animate-pulse" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-5 group-hover:text-peach-600 transition-colors duration-300">Наші цінності</h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                Ми віримо в силу спільноти, гідність кожної людини та важливість підтримки у важкі часи. Разом ми створюємо теплий дім для всіх.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-3xl p-10 md:p-14 max-w-5xl mx-auto shadow-xl border border-warm-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-warm-100 to-transparent rounded-br-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-peach-100 to-transparent rounded-tl-full opacity-50"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Кому ми допомагаємо
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={36} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Багатодітні сім'ї
                </h4>
                <p className="text-gray-600 text-lg">
                  Підтримуємо родини з трьома та більше дітьми
                </p>
              </div>

              <div className="group text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warm-500 to-warm-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="text-white" size={36} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Люди похилого віку
                </h4>
                <p className="text-gray-600 text-lg">
                  Допомагаємо малозабезпеченим пенсіонерам
                </p>
              </div>

              <div className="group text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-peach-500 to-peach-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={36} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Потребуючі
                </h4>
                <p className="text-gray-600 text-lg">
                  Всі, хто опинився в складних обставинах
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

