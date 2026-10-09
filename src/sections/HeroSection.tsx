import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Navbar from '../components/Navbar'
import portrait from '../assets/avatar3d.jpg'

const ROLES = ['Backend Engineer', 'Full-Stack Developer', 'Software Architect', '.NET Specialist']

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered headline reveal
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(headlineRef.current,
      { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.out' }
    )
    .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
    .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .fromTo(avatarRef.current, { opacity: 0, scale: 0.85, x: 40 }, { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: 'back.out(1.2)' }, '-=0.7')

    // Cycling roles
    let roleIndex = 0
    const cycleRole = () => {
      if (!roleRef.current) return
      gsap.to(roleRef.current, {
        opacity: 0, y: -10, duration: 0.3,
        onComplete: () => {
          roleIndex = (roleIndex + 1) % ROLES.length
          if (roleRef.current) roleRef.current.textContent = ROLES[roleIndex]
          gsap.fromTo(roleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 })
        }
      })
    }
    const roleInterval = setInterval(cycleRole, 2500)

    // Floating particles
    const particles = particlesRef.current?.children
    if (particles) {
      Array.from(particles).forEach((p, i) => {
        gsap.to(p, {
          y: `${-30 - i * 8}px`,
          x: `${(i % 2 === 0 ? 1 : -1) * (10 + i * 5)}px`,
          opacity: 0,
          duration: 2 + i * 0.4,
          delay: i * 0.3,
          ease: 'power1.out',
          repeat: -1,
          yoyo: false,
        })
      })
    }

    return () => { clearInterval(roleInterval); tl.kill() }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden grid-bg" style={{ background: 'var(--bg)' }}>
      <Navbar />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          ref={glowRef}
          className="absolute right-0 top-1/4 pointer-events-none"
          style={{
            width: 700,
            height: 700,
            background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(14,165,233,0.06) 40%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(30%, -20%)',
          }}
        />
        <div
          className="absolute left-0 bottom-0 pointer-events-none"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(-40%, 30%)',
          }}
        />
      </div>

      <div className="flex-1 flex items-center max-w-6xl mx-auto w-full px-6 md:px-8 pt-24 pb-12 md:pt-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 w-full">

          {/* Text side */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8 text-center md:text-left">
            {/* Role badge */}
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest"
                style={{ border: '1px solid rgba(14,165,233,0.3)', background: 'rgba(14,165,233,0.07)', color: '#0EA5E9' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ boxShadow: '0 0 6px #4ade80' }} />
                Available for Remote Work
              </div>
            </div>

            {/* Headline */}
            <div ref={headlineRef} style={{ opacity: 0 }}>
              <h1 className="heading-xl font-display" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', color: '#E8EAF0', lineHeight: 1.05 }}>
                I Build Systems<br />
                <span className="text-gradient">That Think,</span><br />
                Scale & Perform.
              </h1>
            </div>

            {/* Role cycler */}
            <div className="flex items-center justify-center md:justify-start gap-2" style={{ color: 'rgba(232,234,240,0.5)', fontSize: '0.95rem' }}>
              <span className="font-display font-medium text-sm uppercase tracking-widest">Currently:</span>
              <span ref={roleRef} className="font-display font-bold text-sm uppercase tracking-widest" style={{ color: '#0EA5E9' }}>
                {ROLES[0]}
              </span>
            </div>

            {/* Sub */}
            <p ref={subRef} className="font-light leading-relaxed max-w-lg mx-auto md:mx-0" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: 'rgba(232,234,240,0.6)', opacity: 0 }}>
              Engineering reliable backend systems, modern full-stack applications, and clean, maintainable software. Based in Egypt — building for the world.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start" style={{ opacity: 0 }}>
              <a href="#projects"
                className="font-display font-semibold text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 text-center"
                style={{ background: 'linear-gradient(135deg,#0EA5E9,#7C3AED)', color: '#fff', boxShadow: '0 0 24px rgba(14,165,233,0.25)' }}>
                Explore My Work
              </a>
              <a href="https://wa.me/201157068224" target="_blank" rel="noopener noreferrer"
                className="font-display font-semibold text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10 text-center"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#E8EAF0' }}>
                Let's Connect ↗
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 justify-center md:justify-start mt-2">
              {[
                { val: '7+', label: 'Live Projects' },
                { val: '2+', label: 'Years Shipping' },
                { val: '1M+', label: 'Records Handled' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl" style={{ color: '#0EA5E9' }}>{s.val}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(232,234,240,0.4)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar side */}
          <div ref={avatarRef} className="relative flex-shrink-0 flex items-center justify-center" style={{ opacity: 0, width: 320, height: 320 }}>

            {/* Outermost slow orbit ring */}
            <div className="absolute spin-slow rounded-full pointer-events-none" style={{
              width: 320, height: 320,
              border: '1px dashed rgba(14,165,233,0.18)',
            }} />

            {/* Pulsing glow ring 2 */}
            <div className="absolute avatar-ring-2 rounded-full pointer-events-none" style={{
              width: 290, height: 290,
              border: '1px solid rgba(124,58,237,0.25)',
              boxShadow: '0 0 30px rgba(124,58,237,0.12), inset 0 0 30px rgba(124,58,237,0.05)',
            }} />

            {/* Pulsing glow ring 1 */}
            <div className="absolute avatar-ring-1 rounded-full pointer-events-none" style={{
              width: 275, height: 275,
              border: '1.5px solid rgba(14,165,233,0.35)',
              boxShadow: '0 0 20px rgba(14,165,233,0.2), inset 0 0 20px rgba(14,165,233,0.05)',
            }} />

            {/* Spinning gradient border */}
            <div className="absolute rounded-full pointer-events-none overflow-hidden" style={{ width: 268, height: 268 }}>
              <div className="avatar-border-spin absolute inset-0 rounded-full" style={{
                background: 'conic-gradient(from 0deg, transparent 0%, #0EA5E9 25%, #7C3AED 50%, transparent 75%)',
                padding: 2,
              }}>
                <div className="w-full h-full rounded-full" style={{ background: 'var(--bg)' }} />
              </div>
            </div>

            {/* Glow blob behind photo */}
            <div className="absolute rounded-full pointer-events-none glow-ring" style={{
              width: 240, height: 240,
              background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(14,165,233,0.2) 45%, transparent 70%)',
            }} />

            {/* Photo with float */}
            <div className="relative avatar-float z-10" style={{ width: 248, height: 248 }}>
              <img
                src={portrait}
                alt="Abdulla Hamdy"
                className="w-full h-full object-cover object-center select-none rounded-full"
                style={{
                  boxShadow: '0 0 50px rgba(14,165,233,0.25), 0 0 100px rgba(124,58,237,0.15)',
                }}
                draggable={false}
              />
            </div>

            {/* Tech label tags */}
            {['.NET', 'React', 'SQL', 'Docker'].map((tech, i) => (
              <div
                key={tech}
                className="absolute z-20 font-display font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(5,5,8,0.92)',
                  border: '1px solid rgba(14,165,233,0.35)',
                  color: '#0EA5E9',
                  boxShadow: '0 0 12px rgba(14,165,233,0.2)',
                  top: `${[8, 82, 72, -2][i]}%`,
                  left: `${[-15, -18, 106, 102][i]}%`,
                  animation: `float ${4 + i * 0.6}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                {tech}
              </div>
            ))}

            {/* Floating particles */}
            <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-visible">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#0EA5E9' : '#7C3AED',
                    top: `${20 + i * 12}%`,
                    left: `${10 + i * 14}%`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(232,234,240,0.3)' }}>
        <span className="font-display text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-0.5 h-10 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <div className="w-full h-1/2 rounded-full" style={{ background: '#0EA5E9', animation: 'slideDown 1.5s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
