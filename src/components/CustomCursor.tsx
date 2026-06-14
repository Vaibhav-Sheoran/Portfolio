import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [projectHover, setProjectHover] = useState(false)
  const [visible, setVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setHovered(true)
        setProjectHover(false)
      } else if (target.closest('[data-cursor="project"]')) {
        setProjectHover(true)
        setHovered(false)
      } else {
        setHovered(false)
        setProjectHover(false)
      }
    }

    const handleLeave = () => {
      setVisible(false)
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseleave', handleLeave)

    let raf: number
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  if (isTouchDevice) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
          style={{
            width: hovered ? '8px' : projectHover ? '0px' : '5px',
            height: hovered ? '8px' : projectHover ? '0px' : '5px',
            background: '#fff',
          }}
        />
      </div>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/50 flex items-center justify-center transition-all duration-300"
          style={{
            width: hovered ? '50px' : projectHover ? '80px' : '36px',
            height: hovered ? '50px' : projectHover ? '80px' : '36px',
            background: projectHover ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
            borderColor: projectHover ? 'rgba(0, 229, 255, 0.5)' : 'rgba(255,255,255,0.3)',
          }}
        >
          {projectHover && (
            <span className="text-[10px] text-[#00e5ff] uppercase tracking-wider font-medium">View</span>
          )}
        </div>
      </div>
      <style>{`* { cursor: none !important; } @media (max-width: 768px) { * { cursor: auto !important; } }`}</style>
    </>
  )
}
