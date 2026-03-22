import Contact from '../components/Contact.jsx'
import Hero from '../components/Hero.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function HomePage({ onNameClick }) {
  return (
    <>
      <Hero onNameClick={onNameClick} />
      <Testimonials />
      <div id="portfolio" className="anchor-target" />
      <div id="blog" className="anchor-target" />
      <div id="about" className="anchor-target" />
      <Contact />
    </>
  )
}
