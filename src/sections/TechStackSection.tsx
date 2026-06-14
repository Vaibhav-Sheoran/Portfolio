import { motion } from 'framer-motion'

const TECH = [
  { name: 'Java', color: '#f89820' },
  { name: 'Spring Boot', color: '#6db33f' },
  { name: 'Spring Security', color: '#6db33f' },
  { name: 'JPA', color: '#59666c' },
  { name: 'JUnit', color: '#25a162' },
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'REST APIs', color: '#00e5ff' },
  { name: 'Microservices', color: '#9333ea' },
  { name: 'Git', color: '#f05032' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'PostgreSQL', color: '#4169e1' },
  { name: 'Claude Code', color: '#d4a574' },
  { name: 'GitHub Copilot', color: '#8b5cf6' },
]

export default function TechStackSection() {
  return (
    <section className="bg-[#0C0C0C] py-16 md:py-24 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/10" />
            <span className="text-xs text-[#888] uppercase tracking-[0.3em]">Tech Stack</span>
            <div className="w-8 h-px bg-white/10" />
          </div>
          <h2 className="text-2xl md:text-4xl text-white font-medium">
            Tools I <span className="font-display italic">work with</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {TECH.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300"
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle, ${tech.color}, transparent 70%)` }}
              />
              <span className="relative text-xs sm:text-sm text-white/80 group-hover:text-white font-medium transition-colors">
                {tech.name}
              </span>
              <span
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
