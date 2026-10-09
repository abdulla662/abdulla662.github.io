import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SKILL_GROUPS } from '../data/skills'

gsap.registerPlugin(ScrollTrigger)

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const [activeGroup, setActiveGroup] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' }
      })
      gsap.fromTo('.toolkit-group', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Animate skill pills whenever active group changes
  useEffect(() => {
    gsap.fromTo('.skill-pill', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.3, stagger: 0.04 })
  }, [activeGroup])

  const activeSkills = SKILL_GROUPS[activeGroup]

  return (
    <section ref={sectionRef} id="toolkit" className="relative py-24 md:py-36" style={{ background: '#07070D' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div ref={headRef} className="mb-16" style={{ opacity: 0 }}>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#0EA5E9' }}>Engineering Toolkit</p>
          <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#E8EAF0' }}>
            My Engineering<br /><span className="text-gradient">Toolkit</span>
          </h2>
          <p className="mt-4 max-w-lg font-light" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: 'rgba(232,234,240,0.45)' }}>
            Technologies verified by working production projects. Learning interests are marked separately.
          </p>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Category tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {SKILL_GROUPS.map((g, i) => (
              <button
                key={g.category}
                onClick={() => setActiveGroup(i)}
                className="toolkit-group flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 flex-shrink-0 lg:flex-shrink whitespace-nowrap lg:whitespace-normal"
                style={{
                  opacity: 0,
                  background: activeGroup === i ? 'rgba(14,165,233,0.1)' : 'transparent',
                  border: `1px solid ${activeGroup === i ? 'rgba(14,165,233,0.3)' : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                <span className="text-lg">{g.icon}</span>
                <span className="font-display font-medium text-sm" style={{ color: activeGroup === i ? '#0EA5E9' : 'rgba(232,234,240,0.5)' }}>
                  {g.category}
                </span>
              </button>
            ))}
          </div>

          {/* Skills panel */}
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{activeSkills.icon}</span>
              <h3 className="font-display font-bold text-lg" style={{ color: '#E8EAF0' }}>{activeSkills.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {activeSkills.skills.filter(s => s.verified).map(s => (
                <span key={s.name} className="skill-pill tag flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  {s.name}
                </span>
              ))}
            </div>

            {activeSkills.skills.some(s => !s.verified) && (
              <>
                <div className="divider mb-4" />
                <p className="font-display text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(232,234,240,0.3)' }}>
                  Exploring / Learning
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {activeSkills.skills.filter(s => !s.verified).map(s => (
                    <span key={s.name} className="skill-pill font-display text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(232,234,240,0.3)' }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="mt-6 pt-5 border-t flex items-center gap-2" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px #4ade80' }} />
              <span className="font-display text-xs" style={{ color: 'rgba(232,234,240,0.3)' }}>
                Verified by working production projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
