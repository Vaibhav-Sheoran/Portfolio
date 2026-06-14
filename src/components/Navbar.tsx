import { useEffect, useState, useCallback, useRef } from 'react'

const NAV_LINKS = ['Home', 'Skills', 'Projects', 'Contact']
const SECTION_IDS = ['home', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const isClickScrolling = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)

      if (isClickScrolling.current) return

      const scrollPos = window.scrollY + window.innerHeight / 3

      let currentSection = 'Home'
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i])
        if (el && el.offsetTop <= scrollPos) {
          currentSection = NAV_LINKS[i]
          break
        }
      }
      setActive(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = useCallback((_e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    isClickScrolling.current = true
    setActive(link)
    setTimeout(() => {
      isClickScrolling.current = false
    }, 1200)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4">
      <div
        className={`inline-flex items-center gap-0.5 sm:gap-1 rounded-full backdrop-blur-md border border-white/10 bg-white/5 px-1.5 sm:px-2 py-1.5 sm:py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/20' : ''
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'Home')}
          className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 mr-0.5 sm:mr-1 group"
          style={{
            background: 'linear-gradient(90deg, #89AACC, #4E85BF)',
            padding: '1.5px',
          }}
        >
          <span className="w-full h-full rounded-full bg-[#0C0C0C] flex items-center justify-center font-display italic text-white text-xs sm:text-sm group-hover:scale-110 transition-transform">
            VS
          </span>
        </a>

        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => handleClick(e, link)}
            className={`text-[10px] sm:text-xs md:text-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 transition-all duration-200 whitespace-nowrap ${
              active === link
                ? 'text-white bg-white/10'
                : 'text-[#888] hover:text-white hover:bg-white/10'
            }`}
          >
            {link}
          </a>
        ))}

        <a
          href="mailto:vaibhav.sheoran.dev@gmail.com"
          className="text-[10px] sm:text-xs md:text-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-[#888] hover:text-white transition-all duration-200 ml-0.5 sm:ml-1 relative group whitespace-nowrap"
        >
          <span className="relative z-10">Say hi ↗</span>
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
    </nav>
  )
}
