import { motion } from 'framer-motion'

const STATS = [
  { value: '2026', label: 'CSE Graduate', subtext: 'Computer Science Engineering, Batch of 2026' },
  { value: 'EPAM', label: 'On-site Internship', subtext: 'Worked as Software Developer at EPAM Systems' },
  { value: '5+', label: 'Core Technologies', subtext: 'Spring Boot · React · TypeScript · JPA · JUnit' },
]

export default function StatsSection() {
  return (
    <section className="bg-[#0C0C0C] py-16 md:py-24 border-t border-white/[0.06]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06]"
          >
            <span className="text-5xl md:text-7xl font-display italic text-white">
              {stat.value}
            </span>
            <p className="text-sm text-[#888] uppercase tracking-[0.2em] mt-3">
              {stat.label}
            </p>
            <p className="text-xs text-white/30 mt-2">
              {stat.subtext}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
