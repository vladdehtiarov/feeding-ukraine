'use client'

import { Heart, Users, Package } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import ShareButtons from './ShareButtons'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop)',
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50/95 via-peach-50/90 to-primary-50/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,145,56,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(246,217,154,0.25),transparent_50%)]"></div>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-float">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-warm-100 rounded-full text-primary-700 font-semibold text-sm border border-primary-200 shadow-sm">
              🤝 Допомагаємо разом
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Разом ми{' '}
            <span className="bg-gradient-to-r from-primary-600 via-warm-500 to-peach-500 bg-clip-text text-transparent animate-gradient-x">
              підтримуємо
            </span>
            <br />
            тих, хто потребує
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Ми віримо, що кожна людина заслуговує на увагу до себе. Наша місія — допомогти продуктами харчування та ліками тим, хто опинився в складних життєвих обставинах через російську агресію.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="#donate"
              className="group magnetic-button shine-effect px-10 py-5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white rounded-2xl font-semibold hover:shadow-[0_25px_60px_rgba(239,145,56,0.5)] transition-all duration-500 shadow-xl hover:scale-110 hover:-translate-y-2 relative overflow-hidden border-2 border-transparent hover:border-primary-400"
            >
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300 text-xl">
                💝 Підтримати
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href="#volunteer"
              className="group magnetic-button px-10 py-5 bg-white text-primary-600 rounded-2xl font-semibold hover:shadow-[0_20px_50px_rgba(239,145,56,0.3)] transition-all duration-500 shadow-lg hover:scale-110 hover:-translate-y-2 border-2 border-primary-600 backdrop-blur-sm hover:bg-gradient-to-r hover:from-primary-50 hover:to-warm-50"
            >
              <span className="group-hover:scale-110 inline-block transition-transform duration-300 text-xl">
                🤝 Стати волонтером
              </span>
            </a>
          </div>

          <div className="flex justify-center mb-16">
            <ShareButtons />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group tilt-card shine-effect bg-white/90 backdrop-blur-md rounded-3xl p-10 text-center shadow-2xl hover:shadow-[0_30px_60px_rgba(239,145,56,0.4)] transition-all duration-500 border-2 border-primary-200 hover:-translate-y-4 hover:scale-110 hover-lift hover-bounce">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-gradient-x">
              <Heart className="text-white group-hover:animate-pulse" size={40} />
            </div>
            <h3 className="text-6xl font-extrabold bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent mb-3 group-hover:scale-115 transition-transform duration-300">500+</h3>
            <p className="text-gray-700 font-semibold text-lg">Родин отримали допомогу</p>
          </div>

          <div className="group tilt-card shine-effect bg-white/90 backdrop-blur-md rounded-3xl p-10 text-center shadow-2xl hover:shadow-[0_30px_60px_rgba(246,217,154,0.4)] transition-all duration-500 border-2 border-warm-200 hover:-translate-y-4 hover:scale-110 hover-lift hover-bounce">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-warm-500 via-warm-600 to-warm-700 rounded-3xl mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-gradient-x">
              <Package className="text-white group-hover:animate-pulse" size={40} />
            </div>
            <h3 className="text-6xl font-extrabold bg-gradient-to-br from-warm-600 to-warm-700 bg-clip-text text-transparent mb-3 group-hover:scale-115 transition-transform duration-300">2000+</h3>
            <p className="text-gray-700 font-semibold text-lg">Продуктових наборів</p>
          </div>

          <div className="group tilt-card shine-effect bg-white/90 backdrop-blur-md rounded-3xl p-10 text-center shadow-2xl hover:shadow-[0_30px_60px_rgba(255,186,153,0.4)] transition-all duration-500 border-2 border-peach-200 hover:-translate-y-4 hover:scale-110 hover-lift hover-bounce">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-peach-500 via-peach-600 to-peach-700 rounded-3xl mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-gradient-x">
              <Users className="text-white group-hover:animate-pulse" size={40} />
            </div>
            <h3 className="text-6xl font-extrabold bg-gradient-to-br from-peach-600 to-peach-700 bg-clip-text text-transparent mb-3 group-hover:scale-115 transition-transform duration-300">50+</h3>
            <p className="text-gray-700 font-semibold text-lg">Активних волонтерів</p>
          </div>
        </div>
      </div>
    </section>
  )
}

