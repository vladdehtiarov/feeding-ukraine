'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'Хто може отримати допомогу від організації?',
      answer: 'Допомогу можуть отримати багатодітні сім\'ї, малозабезпечені люди похилого віку, неповні сім\'ї, особи з інвалідністю та всі, хто постраждав від війни Росії проти України і не може забезпечити себе продуктами харчування та ліками.'
    },
    {
      question: 'Як я можу отримати допомогу?',
      answer: 'Заповніть форму "Отримати допомогу" на нашому сайті, вказавши всю необхідну інформацію про вашу ситуацію. Наша команда розгляне вашу заявку та зв\'яжеться з вами найближчим часом для уточнення деталей.'
    },
    {
      question: 'Як часто можна отримувати допомогу?',
      answer: 'Періодичність надання допомоги залежить від вашої ситуації та наявних ресурсів організації. Зазвичай продуктові набори видаються один раз на місяць, але в екстрених випадках можлива додаткова підтримка.'
    },
    {
      question: 'Що входить до продуктового набору?',
      answer: 'Продуктовий набір включає базові продукти харчування: крупи (гречка, рис), макаронні вироби, олію, цукор, борошно, консерви (м\'ясні, рибні), чай, а також за необхідності - ліки першої необхідності.'
    },
    {
      question: 'Як я можу допомогти організації?',
      answer: 'Ви можете підтримати нас фінансово через банківський переказ або QR-код, стати волонтером, передати продукти харчування або поширити інформацію про нашу діяльність у соціальних мережах.'
    },
    {
      question: 'Чи можу я стати волонтером?',
      answer: 'Так! Ми завжди раді новим волонтерам. Заповніть форму "Стати волонтером" на сайті, і ми зв\'яжемося з вами для обговорення деталей співпраці. Волонтери допомагають у сортуванні продуктів, видачі наборів та інших організаційних питаннях.'
    },
    {
      question: 'Куди йдуть пожертвувані кошти?',
      answer: 'Всі кошти витрачаються виключно на придбання продуктів харчування та ліків для наших підопічних. Ми - прозора організація і регулярно звітуємо про використання коштів. Ви можете запросити звіт про діяльність у будь-який час.'
    },
    {
      question: 'Де знаходиться пункт видачі продуктів?',
      answer: 'Наш офіс та пункт видачі знаходяться за адресою: бульвар Лесі Українки, 26, м. Київ (біля метро "Печерська"). Видача проводиться: Пн-Пт: 10:00 - 17:00, Сб: 10:00 - 14:00.'
    },
    {
      question: 'Чи потрібні документи для отримання допомоги?',
      answer: 'При першому отриманні допомоги необхідно мати при собі паспорт та документи, що підтверджують вашу категорію (посвідчення багатодітної сім\'ї, пенсійне посвідчення, довідка про інвалідність тощо).'
    },
    {
      question: 'Як я можу зв\'язатися з організацією?',
      answer: 'Ви можете зв\'язатися з нами за телефоном +38 (068) 248-11-67, написати на email jointhome@ukr.net або відвідати наш офіс за адресою бульвар Лесі Українки, 26, м. Київ.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-warm-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase">Питання та відповіді</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Часті питання
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Знайдіть відповіді на найпоширеніші питання про нашу організацію
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-warm-50/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <HelpCircle className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-primary-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pl-16">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 text-lg mb-4">
              Не знайшли відповідь на своє питання?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Зв'яжіться з нами
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

