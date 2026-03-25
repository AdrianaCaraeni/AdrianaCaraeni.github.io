import AboutSection from '../components/about/AboutSection.jsx'
import Contact from '../components/Contact.jsx'
import Experience from '../components/Experience.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import PortfolioSection from '../components/PortfolioSection.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function HomePage({ onNameClick }) {
  return (
    <div className="home-page">
      <Hero onNameClick={onNameClick} />
      <AboutSection />
      <Experience />
      <PortfolioSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
