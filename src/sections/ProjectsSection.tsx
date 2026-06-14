import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'
import TiltCard from '../components/TiltCard'

const PROJECTS = [
  {
    number: '01',
    category: 'Full Stack',
    name: 'E-Commerce Platform',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    category: 'Full Stack',
    name: 'Travel Agency Platform',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    category: 'Internship — EPAM Systems',
    name: 'Enterprise Software Project',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
]

function ProjectCard({ project, index, totalCards }: { project: typeof PROJECTS[number]; index: number; totalCards: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[85vh]" style={{ top: `${index * 28}px` }}>
      <motion.div
        className="sticky top-20 sm:top-24 md:top-32 rounded-[24px] sm:rounded-[40px] md:rounded-[60px] border border-[#00e5ff]/30 bg-[#050510] p-3 sm:p-6 md:p-8 origin-top"
        style={{
          scale,
          boxShadow: '0 0 40px rgba(0, 229, 255, 0.05), inset 0 1px 0 rgba(0, 229, 255, 0.1)',
        }}
      >
        <div className="flex flex-col gap-3 sm:gap-6">
          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
              <span
                className="hero-heading font-black"
                style={{ fontSize: 'clamp(2rem, 8vw, 120px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col">
                <span className="text-[#00e5ff]/60 text-[10px] sm:text-sm uppercase tracking-widest">
                  {project.category}
                </span>
                <span
                  className="text-[#e0f7ff] font-medium uppercase"
                  style={{ fontSize: 'clamp(0.85rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </span>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          <TiltCard className="flex gap-2 sm:gap-4">
            <div className="w-[40%] flex flex-col gap-2 sm:gap-4">
              <img
                src={project.images.col1Top}
                alt=""
                className="w-full object-cover rounded-[16px] sm:rounded-[30px] md:rounded-[50px]"
                style={{ height: 'clamp(100px, 16vw, 230px)' }}
              />
              <img
                src={project.images.col1Bottom}
                alt=""
                className="w-full object-cover rounded-[16px] sm:rounded-[30px] md:rounded-[50px]"
                style={{ height: 'clamp(120px, 22vw, 340px)' }}
              />
            </div>
            <div className="w-[60%]">
              <img
                src={project.images.col2}
                alt=""
                className="w-full h-full object-cover rounded-[16px] sm:rounded-[30px] md:rounded-[50px]"
              />
            </div>
          </TiltCard>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#050508] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-3 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center mb-12 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  )
}
