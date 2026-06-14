import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const ABOUT_TEXT =
  "Graduated in Computer Science Engineering in 2026, i completed an on-site internship at EPAM Systems as a Software Developer. I build robust backend systems with Java Spring Boot, Spring Security, JPA, and microservices, and craft clean frontends with React and TypeScript. I write well-tested, maintainable code using JUnit and leverage AI tools like Claude Code and GitHub Copilot to ship faster. Let's build something incredible together!"

const DECORATIVE_IMAGES = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'w-[80px] sm:w-[130px] md:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    delay: 0.1,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'w-[70px] sm:w-[120px] md:w-[180px] absolute bottom-[8%] left-[2%] sm:left-[6%] md:left-[10%]',
    delay: 0.25,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'w-[80px] sm:w-[130px] md:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    delay: 0.15,
    x: 80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'w-[90px] sm:w-[140px] md:w-[220px] absolute bottom-[8%] right-[2%] sm:right-[6%] md:right-[10%]',
    delay: 0.3,
    x: 80,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 overflow-hidden">
      {DECORATIVE_IMAGES.map((img) => (
        <FadeIn key={img.src} delay={img.delay} x={img.x} y={0} duration={0.9} className={img.className}>
          <img src={img.src} alt="" className="w-full opacity-80" />
        </FadeIn>
      ))}

      <div className="flex flex-col items-center gap-8 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#b0e0f0] font-medium text-center leading-relaxed max-w-[300px] sm:max-w-[480px] md:max-w-[560px]"
          style={{ fontSize: 'clamp(0.85rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="mt-12 sm:mt-20 md:mt-24 relative z-10">
        <ContactButton />
      </div>
    </section>
  )
}
