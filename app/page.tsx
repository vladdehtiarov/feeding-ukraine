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
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorGlow />
      <Header />
      <Hero />
      
      <FadeInSection>
        <About />
      </FadeInSection>
      
      <FadeInSection delay={100}>
        <Impact />
      </FadeInSection>
      
      <FadeInSection delay={200}>
        <HowToHelp />
      </FadeInSection>
      
      <FadeInSection>
        <Donate />
      </FadeInSection>
      
      <FadeInSection delay={100}>
        <VolunteerForm />
      </FadeInSection>
      
      <FadeInSection delay={200}>
        <HelpRequestForm />
      </FadeInSection>
      
      <FadeInSection>
        <LocationMap />
      </FadeInSection>
      
      <FadeInSection delay={100}>
        <Contact />
      </FadeInSection>
      
      <Footer />
    </main>
  )
}

