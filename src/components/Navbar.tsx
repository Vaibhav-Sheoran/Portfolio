import { useEffect, useState } from 'react'

const NAV_LINKS = ['Home', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center gap-1 rounded-full backdrop-blur-md border border-white/10 bg-white/5 px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/20' : ''
        }`}
      >
        <a
          href="#"
          className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mr-1 group"
          style={{
            background: 'linear-gradient(90deg, #89AACC, #4E85BF)',
            padding: '1.5px',
          }}
        >
          <span className="w-full h-full rounded-full bg-[#0C0C0C] flex items-center justify-center font-display italic text-white text-sm group-hover:scale-110 transition-transform">
            VS
          </span>
        </a>

        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setActive(link)}
            className={`text-xs sm:text-sm rounded-full px-3 py-1.5 transition-all duration-200 ${
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
          className="text-xs sm:text-sm rounded-full px-3 py-1.5 text-[#888] hover:text-white transition-all duration-200 ml-1 relative group"
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
