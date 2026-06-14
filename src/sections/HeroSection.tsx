import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#b0e0f0] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:text-[#00e5ff] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-4 sm:mt-4 md:-mt-5 px-2 sm:px-0">
        <h1
          className="hero-heading font-black uppercase tracking-tighter leading-none w-full text-center"
          style={{ fontSize: 'clamp(2.8rem, 13vw, 18vw)' }}
        >
          Hi, i{'’'}m vaibhav
        </h1>
      </FadeIn>

      <div className="flex-1" />

      <div className="flex justify-between items-end pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#a0d4e8] font-light uppercase tracking-wide leading-snug max-w-[140px] sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.65rem, 1.4vw, 1.5rem)' }}
          >
            a full stack developer crafting scalable and high-performance software solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px]">
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
