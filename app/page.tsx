'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Impact from '@/components/Impact'
import HowToHelp from '@/components/HowToHelp'
import Donate from '@/components/Donate'
import VolunteerForm from '@/components/VolunteerForm'
import HelpRequestForm from '@/components/HelpRequestForm'
import LocationMap from '@/components/LocationMap'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Impact />
      <HowToHelp />
      <Donate />
      <VolunteerForm />
      <HelpRequestForm />
      <LocationMap />
      <Contact />
      <Footer />
    </main>
  )
}

