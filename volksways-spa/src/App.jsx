import { motion } from 'framer-motion'
import GlassmorphismNavbar from './components/GlassmorphismNavbar'
import GlassmorphismHero from './sections/GlassmorphismHero'
import GlassmorphismAbout from './sections/GlassmorphismAbout'
import GlassmorphismServices from './sections/GlassmorphismServices'
import StudyAbroadProcess from './sections/StudyAbroadProcess'
import GlassmorphismDestinations from './sections/GlassmorphismDestinations'
import GlassmorphismContact from './sections/GlassmorphismContact'
import GlassmorphismFooter from './components/GlassmorphismFooter'

function App() {
  return (
    <div className="min-h-screen">
      <GlassmorphismNavbar />
      <main>
        <section id="home">
          <GlassmorphismHero />
        </section>
        <section id="about">
          <GlassmorphismAbout />
        </section>
        <section id="services">
          <GlassmorphismServices />
        </section>
        <StudyAbroadProcess />
        <section id="destinations">
          <GlassmorphismDestinations />
        </section>
        <GlassmorphismContact />
      </main>
      <GlassmorphismFooter />
    </div>
  )
}

export default App