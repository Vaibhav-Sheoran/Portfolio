import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        className="bg-[#050508] font-kanit scroll-smooth"
        style={{ overflowX: 'clip' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <JournalSection />
        <ProjectsSection />
        <StatsSection />
        <ContactSection />
      </motion.main>
    </>
  )
}
