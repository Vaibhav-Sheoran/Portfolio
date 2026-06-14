import { motion } from 'framer-motion'

export default function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      download
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/[0.1] text-xs text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300 group"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:translate-y-0.5 transition-transform"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Resume
    </motion.a>
  )
}
