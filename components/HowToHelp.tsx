'use client'

import { HeartHandshake, Users, Package, MessageCircle } from 'lucide-react'

export default function HowToHelp() {
  const ways = [
    {
      icon: HeartHandshake,
      title: 'Фінансова підтримка',
      description: 'Ваш внесок допоможе нам придбати продукти для потребуючих',
      action: 'Підтримати',
      href: '#donate',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Стати волонтером',
      description: 'Приєднуйтесь до нашої команди та допомагайте людям',
      action: 'Приєднатися',
      href: '#volunteer',
      color: 'warm',
    },
    {
      icon: Package,
      title: 'Передати продукти',
      description: 'Ви можете принести продукти харчування до нашого офісу',
      action: 'Дізнатися більше',
      href: '#location',
      color: 'peach',
    },
    {
      icon: MessageCircle,
      title: 'Поширити інформацію',
      description: 'Розкажіть про нас друзям та в соціальних мережах',
      action: 'Поділитися',
      href: '#contact',
      color: 'primary',
    },
  ]

  return (
    <section id="help" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Як ви можете допомогти
          </h2>
          <p className="text-xl text-gray-700">
            Є багато способів долучитися до нашої справи та зробити світ кращим, через турботу про людей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ways.map((way, index) => {
            const Icon = way.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-warm-50 to-peach-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${way.color}-600 rounded-full mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {way.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {way.description}
                </p>
                <a
                  href={way.href}
                  className={`inline-block px-6 py-3 bg-${way.color}-600 text-white rounded-full font-semibold hover:bg-${way.color}-700 transition-colors duration-200`}
                >
                  {way.action}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

