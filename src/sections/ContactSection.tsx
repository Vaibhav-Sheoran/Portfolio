import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import HlsVideo from '../components/HlsVideo'

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

const MARQUEE_TEXT = 'AVAILABLE FOR WORK • OPEN TO COLLABORATE • LET\'S BUILD SOMETHING • '
const MARQUEE_REPEATED = MARQUEE_TEXT.repeat(10)

// TODO: TWITTER_SOCIAL_LINK_EMPTY - Replace with your actual Twitter/X handle or remove
const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/Vaibhav-Sheoran' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vaibhav-sheoran' },
  { name: 'Twitter/X', href: 'https://x.com/' }, // Replace with https://x.com/your_handle or delete this line
]

const CONTACT_INFO = [
  { label: 'Email', value: 'vaibhav.sheoran.dev@gmail.com', href: 'mailto:vaibhav.sheoran.dev@gmail.com' },
  { label: 'Location', value: 'India', href: undefined },
  { label: 'Availability', value: 'Open for full-time roles & freelance', href: undefined },
]

export default function ContactSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })
    return () => { tween.kill() }
  }, [])

  return (
    <section id="contact" className="bg-[#0C0C0C] pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      <div className="absolute inset-0">
        <HlsVideo
          src={HLS_SRC}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          flip
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden mb-12 md:mb-16">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white/[0.07] tracking-wider"
          >
            {MARQUEE_REPEATED}
          </div>
        </div>

        <div className="flex flex-col items-center text-center px-4 sm:px-6 mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-[#888] uppercase tracking-[0.3em] mb-4"
          >
            Get in touch
          </motion.span>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="mailto:vaibhav.sheoran.dev@gmail.com"
            className="text-lg sm:text-2xl md:text-4xl font-display italic text-white hover:opacity-70 transition-opacity duration-200 break-all sm:break-normal"
          >
            vaibhav.sheoran.dev@gmail.com ↗
          </motion.a>
        </div>

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <p className="text-[10px] sm:text-xs text-[#888] uppercase tracking-[0.2em] mb-2">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm sm:text-base text-white hover:text-[#00e5ff] transition-colors break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm sm:text-base text-white">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <footer className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mt-12 sm:mt-16 pt-6 border-t border-white/[0.06] text-[10px] sm:text-xs text-[#888] px-4 sm:px-6 md:px-10">
          <span>© 2026 Vaibhav Sheoran</span>
          <div className="flex gap-3 sm:gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            Available for full-time roles
          </span>
        </footer>
      </div>
    </section>
  )
}
