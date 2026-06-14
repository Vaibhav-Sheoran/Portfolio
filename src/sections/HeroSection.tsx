import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import HlsVideo from '../components/HlsVideo'
import ParticleField from '../components/ParticleField'

const ROLES = ['Backend Dev', 'Full Stack Dev', 'Java Engineer', 'Problem Solver']

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.blur-in',
        { opacity: 0, y: 20, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.1, delay: 0.3, ease: 'power3.out' }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="home" className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      <HlsVideo
        src={HLS_SRC}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <ParticleField />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C0C0C] to-transparent" />

      <div className="relative z-20 flex flex-col flex-1">
        <div className="pt-20 sm:pt-24 md:pt-28" />

        <div className="overflow-hidden mt-4 sm:mt-4 md:-mt-5 px-4 sm:px-0 flex flex-col items-center">
          <span className="blur-in text-xs text-[#888] uppercase tracking-[0.3em] mb-3 md:mb-4">
            OPEN TO WORK '26
          </span>
          <h1
            className="name-reveal hero-heading font-black uppercase tracking-tighter leading-none w-full text-center"
            style={{ fontSize: 'clamp(2.8rem, 13vw, 18vw)' }}
          >
            Hi, i{'’'}m vaibhav
          </h1>
          <div className="mt-3 md:mt-4 h-8 md:h-10 flex items-center justify-center relative z-30">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="blur-in text-sm md:text-lg text-[#b0e0f0] font-light tracking-wide"
              >
                A {ROLES[roleIndex]} based in India.
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex justify-between items-end pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 relative z-30">
          <FadeIn delay={0.35} y={20}>
            <p
              className="blur-in text-[#a0d4e8] font-light uppercase tracking-wide leading-snug max-w-[140px] sm:max-w-[220px] md:max-w-[280px]"
              style={{ fontSize: 'clamp(0.65rem, 1.4vw, 1.5rem)' }}
            >
              a full stack developer crafting scalable and high-performance software solutions
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
          <span className="text-[10px] text-[#888] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <div className="w-full h-3 bg-white/60 absolute animate-scroll-down" />
          </div>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px]">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={PORTRAIT_URL}
            alt="Vaibhav Sheoran"
            className="w-full h-auto"
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
