import { motion } from 'framer-motion'

const TIMELINE = [
  {
    year: '2022 — 2026',
    title: 'B.Tech Computer Science Engineering',
    institution: 'University (CSE)',
    description: 'Studied Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering. Built multiple full-stack projects.',
    tags: ['DSA', 'DBMS', 'OS', 'Networks', 'OOP'],
  },
  {
    year: '2025 — 2026',
    title: 'Software Developer Intern',
    institution: 'EPAM Systems (On-site)',
    description: 'Worked on enterprise-grade software with Java Spring Boot, microservices architecture, and production deployments. Collaborated with senior engineers in agile sprints.',
    tags: ['Spring Boot', 'Microservices', 'Agile', 'Production'],
  },
]

export default function EducationSection() {
  return (
    <section className="bg-[#0C0C0C] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/10" />
            <span className="text-xs text-[#888] uppercase tracking-[0.3em]">Background</span>
          </div>
          <h2 className="text-2xl md:text-4xl text-white font-medium">
            Education & <span className="font-display italic">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/[0.08]" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-10 sm:pl-14"
              >
                <div className="absolute left-[11px] sm:left-[19px] top-2 w-3 h-3 rounded-full border-2 border-[#00e5ff] bg-[#0C0C0C]" />

                <span className="text-[10px] sm:text-xs text-[#00e5ff]/70 uppercase tracking-[0.2em] font-medium">
                  {item.year}
                </span>
                <h3 className="text-base sm:text-lg text-white font-medium mt-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#888] mt-0.5">{item.institution}</p>
                <p className="text-xs sm:text-sm text-white/50 mt-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-white/[0.08] text-white/50 bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
