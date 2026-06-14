import { motion } from 'framer-motion'

const ENTRIES = [
  { id: '01', title: 'Why I chose Java Spring Boot over Node.js', readTime: '5 min', date: 'Jun 2026' },
  { id: '02', title: 'Lessons from my EPAM Systems internship', readTime: '4 min', date: 'May 2026' },
  { id: '03', title: 'Clean Code principles I actually use daily', readTime: '6 min', date: 'Apr 2026' },
  { id: '04', title: 'AI tools that changed how I write code', readTime: '3 min', date: 'Mar 2026' },
]

export default function JournalSection() {
  return (
    <section className="bg-[#0C0C0C] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-white/10" />
              <span className="text-xs text-[#888] uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-2xl md:text-4xl text-white font-medium">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-sm text-[#888] mt-2">Things I've learned, built, and reflected on.</p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-xs text-[#888] uppercase tracking-[0.2em] border border-white/10 rounded-full px-4 py-2 hover:text-white hover:border-white/20 transition-all"
          >
            View all ↗
          </a>
        </motion.div>

        <div className="flex flex-col gap-3">
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-[40px] flex items-center gap-4 sm:gap-6 p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center text-xs text-[#888]">
                {entry.id}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{entry.title}</p>
                <p className="text-xs text-[#888] mt-0.5">{entry.readTime} · {entry.date}</p>
              </div>
              <span className="text-white/40 group-hover:text-white/80 transition-colors text-lg flex-shrink-0">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
