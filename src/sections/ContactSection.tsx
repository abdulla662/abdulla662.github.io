import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CONTACTS = [
  { label: 'WhatsApp', value: '+20 115 706 8224', href: 'https://wa.me/201157068224', color: '#25D366', icon: '💬' },
  { label: 'Email', value: 'abdullahamdy825@yahoo.com', href: 'mailto:abdullahamdy825@yahoo.com', color: '#0EA5E9', icon: '✉️' },
  { label: 'GitHub', value: 'github.com/abdulla662', href: 'https://github.com/abdulla662', color: '#E8EAF0', icon: '⚡' },
  { label: 'LinkedIn', value: 'linkedin.com/in/abdulla-hamdy', href: 'https://linkedin.com/in/abdulla-hamdy', color: '#0A66C2', icon: '🔗' },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' }
      })
      gsap.fromTo('.contact-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.12,
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-40 overflow-hidden" style={{ background: '#07070D' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{
          width: 800, height: 800,
          background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div ref={headRef} className="mb-16" style={{ opacity: 0 }}>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#0EA5E9' }}>Get in Touch</p>
          <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: '#E8EAF0' }}>
            Let's Build<br /><span className="text-gradient">Something</span><br />Great Together
          </h2>
          <p className="mt-6 font-light leading-relaxed mx-auto max-w-lg" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'rgba(232,234,240,0.5)' }}>
            Available for remote work and project collaborations. Based in Egypt — open to opportunities worldwide. Preferred contact: WhatsApp or email.
          </p>
          <a
            href="https://wa.me/201157068224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 font-display font-bold text-base uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#0EA5E9,#7C3AED)', color: '#fff', boxShadow: '0 0 40px rgba(14,165,233,0.2)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp
          </a>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-3 mt-4">
          {CONTACTS.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-card glass flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-200 hover:scale-[1.02] group"
              style={{ opacity: 0 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: c.color + '18', border: `1px solid ${c.color}30` }}>
                {c.icon}
              </div>
              <div className="min-w-0">
                <div className="font-display text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'rgba(232,234,240,0.4)' }}>{c.label}</div>
                <div className="font-medium text-sm truncate" style={{ color: '#E8EAF0' }}>{c.value}</div>
              </div>
              <div className="ml-auto text-lg" style={{ color: 'rgba(232,234,240,0.2)' }}>↗</div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-16 font-display text-xs uppercase tracking-widest" style={{ color: 'rgba(232,234,240,0.2)' }}>
          Abdulla Hamdy · Full Stack .NET Developer · Egypt · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
