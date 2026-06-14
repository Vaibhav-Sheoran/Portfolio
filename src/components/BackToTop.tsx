import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 800)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full backdrop-blur-xl border border-white/[0.15] flex items-center justify-center group"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/70 group-hover:text-[#00e5ff] group-hover:-translate-y-0.5 transition-all duration-300"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
