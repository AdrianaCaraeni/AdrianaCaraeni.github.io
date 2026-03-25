import { useParallax } from '../../hooks/useParallax.js'
import AboutBio from './AboutBio.jsx'
import AboutConnect from './AboutConnect.jsx'
import AboutEducation from './AboutEducation.jsx'
import AboutHighlights from './AboutHighlights.jsx'
import AboutIntro from './AboutIntro.jsx'
import AboutLangSkills from './AboutLangSkills.jsx'

/**
 * About — composed of discrete glass panels (see ./about/*).
 */
export default function AboutSection() {
  const parallaxRef = useParallax(0.035)

  return (
    <section id="about" className="about-section-block section-pad" aria-labelledby="about-heading">
      <div ref={parallaxRef} className="about-section-shell about-section--parallax container-page">
        <div className="about-section-grid">
          <AboutIntro />
          <AboutBio />
          <AboutHighlights />
          <AboutConnect />
          <AboutEducation />
          <AboutLangSkills />
        </div>
      </div>
    </section>
  )
}
