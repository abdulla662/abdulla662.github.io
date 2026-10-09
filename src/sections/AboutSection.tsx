import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  { year: '2024–Present', role: 'Software Engineer — MKCL ARABIA', detail: 'Building an AI-powered enterprise examination platform. Examination workflows, question management, role-based permissions, real-time proctoring integration, and rule-based business logic.', color: '#0EA5E9' },
  { year: '2023–2024', role: 'Independent Software Developer', detail: 'Built and deployed SmartTracker CRM (multi-tenant SaaS), MassData API (1M-record query engine), DbSchemaExplorer (Blazor schema tool), and Load Balancer — all live in production.', color: '#7C3AED' },
  { year: 'Earlier', role: "Bachelor's — Sadat Academy for Management Sciences", detail: 'International Business Management. Foundation in business logic, systems thinking, and organisational structure — disciplines that directly inform software architecture.', color: '#F59E0B' },
]

const TRAITS = [
  { icon: '🏗️', title: 'Architecture-First', body: "Clean Architecture with strict domain boundaries, CQRS, and separated concerns. Business logic never touches HTTP or database drivers." },
  { icon: '📊', title: 'Performance-Aware', body: 'Covering indexes, AsNoTracking, composable LINQ, server-side aggregations. I think about what the database actually executes.' },
  { icon: '🔄', title: 'Reliability Patterns', body: 'Outbox pattern, Hangfire retry, idempotent handlers. Production systems must survive failures, not just happy paths.' },
  { icon: '🚢', title: 'Ships to Production', body: 'Four live Docker-deployed projects. GitHub Actions CI/CD. I build things that run in the real world, not just localhost.' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const traitsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' }
      })
      gsap.fromTo('.trait-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12,
        scrollTrigger: { trigger: traitsRef.current, start: 'top 80%' }
      })
      gsap.fromTo('.timeline-item', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-36" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div ref={headRef} className="mb-16 md:mb-24" style={{ opacity: 0 }}>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#0EA5E9' }}>About Me</p>
          <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#E8EAF0' }}>
            Engineering Beyond<br /><span className="text-gradient">the Screen</span>
          </h2>
          <p className="mt-6 leading-relaxed max-w-2xl font-light" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: 'rgba(232,234,240,0.6)' }}>
            I'm a .NET Backend and Full-Stack Developer with 2+ years shipping production systems. I care about clean architecture, observable systems, and software maintainable long after it ships.
          </p>
          <p className="mt-4 leading-relaxed max-w-2xl font-light" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: 'rgba(232,234,240,0.45)' }}>
            Currently building an AI-powered enterprise examination platform at MKCL ARABIA. Maintaining four live side projects that serve real traffic. Based in Egypt — available for remote work worldwide.
          </p>
        </div>

        <div className="divider mb-16" />

        <div ref={traitsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {TRAITS.map((t) => (
            <div key={t.title} className="trait-card glass p-5 rounded-2xl flex flex-col gap-3" style={{ opacity: 0 }}>
              <span className="text-2xl">{t.icon}</span>
              <h3 className="font-display font-semibold text-sm" style={{ color: '#E8EAF0' }}>{t.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(232,234,240,0.5)' }}>{t.body}</p>
            </div>
          ))}
        </div>

        <div className="divider mb-16" />

        <div ref={timelineRef}>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] mb-8" style={{ color: '#0EA5E9' }}>Journey</p>
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-[88px] top-0 bottom-0 w-px hidden sm:block" style={{ background: 'rgba(255,255,255,0.06)' }} />
            {TIMELINE.map((item, i) => (
              <div key={i} className="timeline-item flex flex-col sm:flex-row gap-3 sm:gap-8 pb-10 last:pb-0" style={{ opacity: 0 }}>
                <div className="flex-shrink-0 sm:w-20 sm:text-right">
                  <span className="font-display font-bold text-[10px] uppercase tracking-widest" style={{ color: item.color }}>{item.year}</span>
                </div>
                <div className="relative flex-1 sm:pl-8">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-1/2 hidden sm:block" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}60` }} />
                  <h3 className="font-display font-semibold text-sm mb-1.5" style={{ color: '#E8EAF0' }}>{item.role}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,234,240,0.5)' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
