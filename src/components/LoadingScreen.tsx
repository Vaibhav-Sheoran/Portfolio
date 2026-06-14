import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Build', 'Ship', 'Scale']

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const startTime = useRef(Date.now())
  const completed = useRef(false)

  useEffect(() => {
    const duration = 2700
    let raf: number

    const tick = () => {
      const elapsed = Date.now() - startTime.current
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100)
      setCount(progress)

      if (progress < 100) {
        raf = requestAnimationFrame(tick)
      } else if (!completed.current) {
        completed.current = true
        setTimeout(onComplete, 400)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length)
    }, 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0C0C0C] flex flex-col justify-between p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="text-xs text-[#888] uppercase tracking-[0.3em]">
          Portfolio
        </span>
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="font-display italic text-4xl md:text-6xl lg:text-7xl text-white/80"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        <span className="text-6xl md:text-8xl lg:text-9xl font-display italic text-white tabular-nums">
          {String(count).padStart(3, '0')}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
        <div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            transition: 'transform 0.1s linear',
          }}
        />
      </div>
    </div>
  )
}
