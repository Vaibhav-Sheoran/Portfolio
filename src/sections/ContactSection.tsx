import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import HlsVideo from '../components/HlsVideo'

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

const MARQUEE_TEXT = 'AVAILABLE FOR WORK • OPEN TO COLLABORATE • LET\'S BUILD SOMETHING • '
const MARQUEE_REPEATED = MARQUEE_TEXT.repeat(10)

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/Vaibhav-Sheoran' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vaibhav-sheoran' },
  { name: 'Twitter/X', href: 'https://x.com/' },
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
            className="whitespace-nowrap text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white/[0.07] tracking-wider"
          >
            {MARQUEE_REPEATED}
          </div>
        </div>

        <div className="flex flex-col items-center text-center px-6 mb-16">
          <span className="text-xs text-[#888] uppercase tracking-[0.3em] mb-4">
            Get in touch
          </span>
          <a
            href="mailto:vaibhav.sheoran.dev@gmail.com"
            className="text-xl sm:text-2xl md:text-4xl font-display italic text-white hover:opacity-70 transition-opacity duration-200 relative group"
          >
            vaibhav.sheoran.dev@gmail.com ↗
            <span
              className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, #89AACC, #4E85BF)',
                padding: '1px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
              }}
            />
          </a>
        </div>

        <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 pt-6 border-t border-white/[0.06] text-xs text-[#888] px-6 md:px-10">
          <span>© 2026 Vaibhav Sheoran</span>
          <div className="flex gap-4">
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
