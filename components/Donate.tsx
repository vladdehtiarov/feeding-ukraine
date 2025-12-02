'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, CreditCard, Building2, Copy, Check } from 'lucide-react'

export default function Donate() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-warm-50 to-peach-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,145,56,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Донати</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Підтримати нашу діяльність
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Ваша підтримка допомагає нам продовжувати надавати допомогу тим, хто її потребує
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* QR Code Section */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-primary-100">
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
                <CreditCard className="text-white" size={36} />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Швидкий донат через QR
            </h3>
            <p className="text-gray-700 mb-8 text-center">
              Відскануйте QR-код для миттєвого переказу через ПриватБанк
            </p>
            
            {/* QR Code */}
            <div className="bg-gradient-to-br from-warm-100 to-peach-100 rounded-2xl p-8 mb-6 flex items-center justify-center">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <Image 
                  src="/qr-code.png" 
                  alt="QR код для донатів ПриватБанк" 
                  width={280}
                  height={280}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            
            <div className="bg-warm-50 rounded-xl p-6">
              <p className="text-sm text-gray-600 mb-3 text-center">Або переведіть вручну:</p>
              <div className="flex items-center justify-between bg-white rounded-lg p-3 mb-2">
                <p className="font-mono text-lg font-semibold text-gray-800">
                  5168 7572 1234 5678
                </p>
                <button
                  onClick={() => copyToClipboard('5168757212345678', 'card')}
                  className="ml-3 p-2 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                  title="Копіювати номер картки"
                >
                  {copiedField === 'card' ? (
                    <Check className="text-green-600" size={20} />
                  ) : (
                    <Copy className="text-gray-600" size={20} />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-600 text-center">
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
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex">
                    <span className="font-semibold w-32">ЄДРПОУ:</span>
                    <span>12345678</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('12345678', 'edrpou')}
                    className="p-1 hover:bg-warm-50 rounded transition-colors duration-200"
                    title="Копіювати ЄДРПОУ"
                  >
                    {copiedField === 'edrpou' ? (
                      <Check className="text-green-600" size={18} />
                    ) : (
                      <Copy className="text-gray-600" size={18} />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold mb-1">IBAN:</span>
                    <span className="font-mono text-sm">UA123456789012345678901234567</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('UA123456789012345678901234567', 'iban')}
                    className="p-1 hover:bg-warm-50 rounded transition-colors duration-200 ml-2"
                    title="Копіювати IBAN"
                  >
                    {copiedField === 'iban' ? (
                      <Check className="text-green-600" size={18} />
                    ) : (
                      <Copy className="text-gray-600" size={18} />
                    )}
                  </button>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <span className="font-semibold w-32">Банк:</span>
                  <span>АТ КБ "ПриватБанк"</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <div className="flex">
                    <span className="font-semibold w-32">МФО:</span>
                    <span>305299</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('305299', 'mfo')}
                    className="p-1 hover:bg-warm-50 rounded transition-colors duration-200"
                    title="Копіювати МФО"
                  >
                    {copiedField === 'mfo' ? (
                      <Check className="text-green-600" size={18} />
                    ) : (
                      <Copy className="text-gray-600" size={18} />
                    )}
                  </button>
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

