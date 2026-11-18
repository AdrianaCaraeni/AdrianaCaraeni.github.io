import AboutSection from '../components/about/AboutSection.jsx'
import Contact from '../components/Contact.jsx'
import Experience from '../components/Experience.jsx'
import Footer from '../components/Footer.jsx'
import PortfolioSection from '../components/PortfolioSection.jsx'
import Projects from '../components/Projects.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function HomePage() {
  return (
    <div className="home-page">
      <AboutSection />
      <Experience />
      <Projects />
      <PortfolioSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
