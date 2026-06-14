export default function ContactButton() {
  return (
    <button
      className="rounded-full px-6 py-2.5 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #00b4d8 30%, #7b2ff7 65%, #00e5ff 100%)',
        boxShadow: '0 0 20px rgba(0, 229, 255, 0.4), 0 0 60px rgba(123, 47, 247, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
        outline: '2px solid rgba(0, 229, 255, 0.6)',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  )
}
