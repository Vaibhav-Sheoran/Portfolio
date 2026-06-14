import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ENTRIES = [
  {
    id: '01',
    title: 'Why I chose Java Spring Boot over Node.js',
    readTime: '5 min',
    date: 'Jun 2026',
    content:
      'After building projects in both ecosystems, I chose Spring Boot for its enterprise-grade architecture, strong typing, built-in security with Spring Security, and mature ecosystem for microservices. While Node.js excels at I/O-heavy apps and rapid prototyping, Spring Boot gave me battle-tested patterns — dependency injection, AOP, JPA for database abstraction — that scale reliably in production. The JVM\'s performance under heavy load and Java\'s static type system caught bugs at compile time that would have slipped through in a dynamically typed runtime. For the kind of enterprise software I build, that tradeoff is worth it every time.',
  },
  {
    id: '02',
    title: 'Lessons from my EPAM Systems internship',
    readTime: '4 min',
    date: 'May 2026',
    content:
      'Working on-site at EPAM taught me what production software really means. Code reviews weren\'t just about style — they caught architectural mistakes. I learned to write code for the next developer, not just the compiler. Key takeaways: always write tests before refactoring, communicate blockers early, and understand the business domain as deeply as the tech stack. The biggest surprise? How much time senior engineers spend reading code vs writing it. That shifted my entire approach to naming, structure, and documentation.',
  },
  {
    id: '03',
    title: 'Clean Code principles I actually use daily',
    readTime: '6 min',
    date: 'Apr 2026',
    content:
      'Not all Clean Code principles are created equal. The ones I apply every single day: meaningful names (no abbreviations, no single letters outside loops), small functions that do one thing, and the Boy Scout Rule — leave code cleaner than you found it. I\'m less dogmatic about others — sometimes a 30-line function is clearer than 5 tiny ones with indirection. The real principle behind Clean Code isn\'t following rules blindly; it\'s empathy for future readers. Every naming choice, every extracted method, every comment is a communication decision.',
  },
  {
    id: '04',
    title: 'AI tools that changed how I write code',
    readTime: '3 min',
    date: 'Mar 2026',
    content:
      'Claude Code and GitHub Copilot fundamentally changed my workflow. Copilot handles boilerplate — DTOs, repetitive test cases, standard CRUD endpoints — so I focus on architecture and logic. Claude Code is my thinking partner for complex problems: designing API contracts, debugging tricky concurrency issues, and reviewing my own code with fresh eyes. The key insight: AI doesn\'t replace engineering judgment, it amplifies it. I still design the systems, make the tradeoffs, and own the quality. The tools just remove the friction between thinking and shipping.',
  },
]

export default function JournalSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

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
              className="rounded-[24px] sm:rounded-[40px] overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all cursor-pointer group"
              onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
            >
              <div className="flex items-center gap-4 sm:gap-6 p-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center text-xs text-[#888]">
                  {entry.id}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium truncate">{entry.title}</p>
                  <p className="text-xs text-[#888] mt-0.5">{entry.readTime} · {entry.date}</p>
                </div>
                <span
                  className={`text-white/40 group-hover:text-white/80 transition-all text-lg flex-shrink-0 ${
                    expandedId === entry.id ? 'rotate-90' : ''
                  }`}
                >
                  →
                </span>
              </div>

              <AnimatePresence>
                {expandedId === entry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-1 pl-[72px] sm:pl-[88px]">
                      <p className="text-sm text-white/60 leading-relaxed">
                        {entry.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
