import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import TechStackSection from './sections/TechStackSection'
import ContactSection from './sections/ContactSection'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div style={{ background: 'var(--bg)', overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  )
}

export default App
