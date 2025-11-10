'use client'

import Image from 'next/image'
import { Heart, CreditCard, Building2 } from 'lucide-react'

export default function Donate() {
  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-primary-50 via-warm-50 to-peach-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Підтримати нашу діяльність
          </h2>
          <p className="text-xl text-gray-700">
            Ваша підтримка допомагає нам продовжувати надавати допомогу тим, хто її потребує
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* QR Code Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full">
                <CreditCard className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Швидкий донат через QR
            </h3>
            <p className="text-gray-700 mb-8 text-center">
              Відскануйте QR-код для миттєвого переказу через ПриватБанк
            </p>
            
            {/* QR Code */}
            <div className="bg-gradient-to-br from-warm-100 to-peach-100 rounded-2xl p-8 mb-6 flex items-center justify-center">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <Image 
                  src="/qr-code.jpg" 
                  alt="QR код для донатів ПриватБанк" 
                  width={280}
                  height={280}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            
            <div className="bg-warm-50 rounded-xl p-6 text-center">
              <p className="text-sm text-gray-600 mb-2">Або переведіть вручну:</p>
              <p className="font-mono text-lg font-semibold text-gray-800">
                5168 7572 1234 5678
              </p>
              <p className="text-sm text-gray-600 mt-2">
                ФОП "Спільний будинок"
              </p>
            </div>
          </div>

          {/* Other Ways Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-warm-600 rounded-full mr-4">
                  <Building2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Банківські реквізити
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold w-32">Отримувач:</span>
                  <span>ГО "Спільний будинок"</span>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold w-32">ЄДРПОУ:</span>
                  <span>12345678</span>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold w-32">IBAN:</span>
                  <span className="font-mono text-sm">UA123456789012345678901234567</span>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold w-32">Банк:</span>
                  <span>АТ КБ "ПриватБанк"</span>
                </div>
                <div className="flex pb-2">
                  <span className="font-semibold w-32">МФО:</span>
                  <span>305299</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-peach-100 to-primary-100 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="text-peach-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Кожна гривня має значення
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span><strong>100 грн</strong> — продукти на 1 день для однієї людини</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span><strong>500 грн</strong> — продуктовий набір на тиждень</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <span><strong>2000 грн</strong> — місячний набір для сім'ї</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <p className="text-gray-700 leading-relaxed">
                Ми — прозора організація. Всі кошти витрачаються виключно на придбання продуктів харчування для наших підопічних.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

