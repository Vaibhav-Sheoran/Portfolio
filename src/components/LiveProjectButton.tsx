// TODO: LIVE_PROJECT_BUTTON_PLACEHOLDER - Add href prop and make this an <a> tag
// Current: Dead button, doesn't link anywhere
// Steps: 1) Add href?: string to props, 2) Change button to <a>, 3) Pass project URLs from ProjectsSection
interface LiveProjectButtonProps {
  href?: string // Add actual project URLs here later
}

export default function LiveProjectButton({ href }: LiveProjectButtonProps) {
  const Component = href ? 'a' : 'button'
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Component
      {...linkProps}
      className="rounded-full border-2 border-[#00e5ff]/60 text-[#00e5ff] font-medium uppercase tracking-widest px-5 py-2 sm:px-10 sm:py-3.5 text-xs sm:text-base hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] inline-flex items-center justify-center"
    >
      Live Project
    </Component>
  )
}
