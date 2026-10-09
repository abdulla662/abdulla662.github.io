import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectModal from '../components/ProjectModal'

gsap.registerPlugin(ScrollTrigger)

const FILTERS = ['All Projects', 'Backend & APIs', 'Full Stack', 'Distributed Systems', 'Developer Tools']

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 group"
      style={{
        background: hovered ? project.accentColor : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.07)'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px ${project.color}18` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View ${project.name} case study`}
    >
      {/* Number accent */}
      <div className="absolute top-4 right-5 font-display font-bold text-6xl leading-none pointer-events-none select-none"
        style={{ color: hovered ? project.color + '25' : 'rgba(255,255,255,0.04)' }}>
        {project.number}
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-5 min-h-[280px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.category.map(c => (
                <span key={c} className="font-display text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{ background: project.color + '18', color: project.color, border: `1px solid ${project.color}30` }}>
                  {c}
                </span>
              ))}
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl" style={{ color: '#E8EAF0' }}>{project.name}</h3>
            <p className="font-display text-xs font-medium mt-1" style={{ color: project.color }}>{project.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(232,234,240,0.55)' }}>
          {project.description.slice(0, 160)}{project.description.length > 160 ? '…' : ''}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tag" style={{ color: 'rgba(232,234,240,0.4)', borderColor: 'rgba(255,255,255,0.1)', background: 'transparent' }}>
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="font-display text-xs font-bold uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
                style={{ color: project.color }}
                onClick={e => e.stopPropagation()}>
                Live ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="font-display text-xs font-bold uppercase tracking-widest transition-opacity duration-200 hover:opacity-70 flex items-center gap-1"
                style={{ color: 'rgba(232,234,240,0.5)' }}
                onClick={e => e.stopPropagation()}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            )}
          </div>
          <span className="font-display text-xs font-medium uppercase tracking-widest transition-all duration-200"
            style={{ color: hovered ? project.color : 'rgba(232,234,240,0.3)' }}>
            Case Study →
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = activeFilter === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeFilter))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' }
      })
      gsap.fromTo('.proj-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    gsap.fromTo('.proj-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 })
  }, [activeFilter])

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 md:py-36 grid-bg" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div ref={headRef} className="mb-12" style={{ opacity: 0 }}>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#0EA5E9' }}>Selected Work</p>
          <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#E8EAF0' }}>
            Real Projects.<br /><span className="text-gradient">Real Engineering.</span>
          </h2>
          <p className="mt-4 font-light max-w-xl" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', color: 'rgba(232,234,240,0.45)' }}>
            Built to solve meaningful problems. Every project has a live URL and source code you can inspect.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="font-display text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200"
              style={activeFilter === f
                ? { background: 'linear-gradient(135deg,#0EA5E9,#7C3AED)', color: '#fff', border: '1px solid transparent' }
                : { background: 'transparent', color: 'rgba(232,234,240,0.5)', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-4 md:gap-5">
          {filtered.map((project) => (
            <div key={project.id} className="proj-card">
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
