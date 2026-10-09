import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
    )
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient-blue">AH</span>
          <span className="ml-1 font-normal text-sm hidden sm:inline" style={{ color: '#4B5563' }}>/ Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="font-display text-sm font-medium uppercase tracking-widest transition-colors duration-200"
              style={{ color: active === n.href.slice(1) ? '#0EA5E9' : 'rgba(232,234,240,0.5)' }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="https://wa.me/201157068224"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-semibold uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#0EA5E9,#7C3AED)', color: '#fff' }}
          >
            Let's Connect
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white/70 mb-1.5 transition-transform" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }} />
          <span className="block w-5 h-0.5 bg-white/70 mb-1.5 transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-white/70 transition-transform" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: 'rgba(5,5,8,0.97)', borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="font-display text-base font-medium uppercase tracking-widest" style={{ color: 'rgba(232,234,240,0.7)' }} onClick={() => setMenuOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="https://wa.me/201157068224" target="_blank" rel="noopener noreferrer"
              className="font-display text-sm font-semibold uppercase tracking-widest px-5 py-3 rounded-full text-center"
              style={{ background: 'linear-gradient(135deg,#0EA5E9,#7C3AED)', color: '#fff' }}>
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
