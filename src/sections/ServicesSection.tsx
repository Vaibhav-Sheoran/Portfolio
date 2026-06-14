import FadeIn from '../components/FadeIn'

const SKILLS = [
  {
    number: '01',
    name: 'Backend Development',
    description:
      'Building powerful, scalable server-side applications using Java Spring Boot, Spring Security, JPA, and microservices architecture — with real on-site production experience at EPAM Systems.',
  },
  {
    number: '02',
    name: 'Frontend Development',
    description:
      'Crafting clean, type-safe user interfaces with React and TypeScript — building component-driven UIs that are fast, maintainable, and user-focused.',
  },
  {
    number: '03',
    name: 'API & Microservices',
    description:
      'Designing and integrating RESTful APIs and microservice systems — ensuring seamless communication between services with security, performance, and reliability in mind.',
  },
  {
    number: '04',
    name: 'Testing & Clean Code',
    description:
      'Writing maintainable, production-grade code backed by unit and integration tests using JUnit — following clean code principles for long-term software health.',
  },
  {
    number: '05',
    name: 'AI-Augmented Development',
    description:
      'Leveraging modern AI tools — Claude Code and GitHub Copilot — to accelerate development cycles, improve code quality, and stay ahead in an evolving engineering landscape.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-[#0a0f1a] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 border-t border-[#00e5ff]/20"
    >
      <h2
        className="text-[#e0f7ff] font-black uppercase text-center mb-12 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-4 sm:gap-8 md:gap-12 py-6 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(0, 229, 255, 0.15)' }}
            >
              <span
                className="font-black flex-shrink-0 text-[#00e5ff]/30"
                style={{ fontSize: 'clamp(2rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-1 sm:gap-2 pt-1 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase text-[#e0f7ff]"
                  style={{ fontSize: 'clamp(0.9rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#8ab4c7]"
                  style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1.25rem)' }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
