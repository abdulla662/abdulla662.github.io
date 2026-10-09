import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import type { Project } from '../data/projects'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
    gsap.fromTo(panelRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
    return () => { document.body.style.overflow = '' }
  }, [])

  const close = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, onComplete: onClose })
  }

  const handleKey = (e: React.KeyboardEvent) => { if (e.key === 'Escape') close() }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) close() }}
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      <div
        ref={panelRef}
        className="w-full md:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl"
        style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4" style={{ background: '#0A0A10', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3">
            <span className="font-display text-xs font-bold tracking-widest uppercase" style={{ color: project.color }}>
              {project.number}
            </span>
            <span className="font-display text-lg font-bold" style={{ color: '#E8EAF0' }}>
              {project.name}
            </span>
          </div>
          <button onClick={close} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10" style={{ color: '#6B7280' }} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="px-6 py-6 flex flex-col gap-8">
          {/* Category tags */}
          <div className="flex flex-wrap gap-2">
            {project.category.map(c => (
              <span key={c} className="tag-violet">{c}</span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: project.color }}>Overview</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,234,240,0.75)' }}>{project.description}</p>
          </div>

          {/* Problem + Solution */}
          {project.problem && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="font-display text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#F59E0B' }}>Problem</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,234,240,0.65)' }}>{project.problem}</p>
              </div>
              {project.solution && (
                <div className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="font-display text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#10B981' }}>Solution</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,234,240,0.65)' }}>{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: project.color }}>Architecture</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,234,240,0.7)' }}>{project.architecture}</p>
            </div>
          )}

          {/* Case study sections */}
          {project.caseStudy?.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: project.color }}>
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,234,240,0.7)' }}>{section.body}</p>
            </div>
          ))}

          {/* Key features */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: project.color }}>Key Features</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(232,234,240,0.7)' }}>
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ background: project.color + '22', color: project.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: project.color }}>Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pb-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="font-display text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#0EA5E9,#7C3AED)', color: '#fff' }}>
                Visit Live Project ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="font-display text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#E8EAF0' }}>
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
