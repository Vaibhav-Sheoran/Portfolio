import { useRef, CSSProperties } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={`relative ${className ?? ''}`} style={style}>
      {chars.map((char, i) => (
        <CharSpan key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}

function CharSpan({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const end = Math.min((index + 1) / total + 0.02, 1)
  const opacity = useTransform(progress, [start, end], [0.15, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? ' ' : char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char === ' ' ? ' ' : char}
      </motion.span>
    </span>
  )
}
