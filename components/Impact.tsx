'use client'

export default function Impact() {
  const stats = [
    { number: '500+', label: 'Родин отримали допомогу', color: 'primary' },
    { number: '2000+', label: 'Продуктових наборів роздано', color: 'warm' },
    { number: '50+', label: 'Активних волонтерів', color: 'peach' },
    { number: '5000+', label: 'Кілограмів продуктів', color: 'primary' },
  ]

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-primary-50 via-warm-50 to-peach-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наші досягнення
          </h2>
          <p className="text-xl text-gray-700">
            Завдяки вашій підтримці ми змогли допомогти багатьом людям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-2"
            >
              <h3 className={`text-5xl font-bold text-${stat.color}-600 mb-3`}>
                {stat.number}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Що входить в продуктовий набір
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl mb-2">🍞</div>
              <p className="text-gray-700 font-medium">Хлібобулочні вироби</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🥫</div>
              <p className="text-gray-700 font-medium">Консервація</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🍝</div>
              <p className="text-gray-700 font-medium">Макаронні вироби</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🌾</div>
              <p className="text-gray-700 font-medium">Крупи</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🥛</div>
              <p className="text-gray-700 font-medium">Молочні продукти</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🍚</div>
              <p className="text-gray-700 font-medium">Олія та цукор</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

