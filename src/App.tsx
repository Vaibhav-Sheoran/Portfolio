import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import NoiseOverlay from './components/NoiseOverlay'
import ResumeButton from './components/ResumeButton'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import TechStackSection from './sections/TechStackSection'
import EducationSection from './sections/EducationSection'
import JournalSection from './sections/JournalSection'
import ProjectsSection from './sections/ProjectsSection'
import StatsSection from './sections/StatsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <SmoothScroll>
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
        className="bg-[#050508] font-kanit"
        style={{ overflowX: 'clip' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
        <ResumeButton />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <EducationSection />
        <JournalSection />
        <ProjectsSection />
        <StatsSection />
        <ContactSection />
      </motion.main>
    </SmoothScroll>
  )
}
