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
import CursorGlow from '@/components/CursorGlow'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorGlow />
      <Header />
      <Hero />
      
      <ScrollReveal direction="up" delay={100}>
        <About />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <Impact />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <HowToHelp />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <Donate />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <VolunteerForm />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <HelpRequestForm />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <LocationMap />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={100}>
        <Contact />
      </ScrollReveal>
      
      <Footer />
    </main>
  )
}

