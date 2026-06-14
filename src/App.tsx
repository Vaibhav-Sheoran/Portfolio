import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import JournalSection from './sections/JournalSection'
import ProjectsSection from './sections/ProjectsSection'
import StatsSection from './sections/StatsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <main className="bg-[#050508] font-kanit" style={{ overflowX: 'clip' }}>
          <Navbar />
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <JournalSection />
          <ProjectsSection />
          <StatsSection />
          <ContactSection />
        </main>
      )}
    </>
  )
}
