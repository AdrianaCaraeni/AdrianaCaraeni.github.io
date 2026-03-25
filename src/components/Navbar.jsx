import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTION_IDS_HOME = ['hero', 'about', 'experience', 'portfolio', 'testimonials', 'contact']
const NAV_OFFSET = 88

function getActiveSectionId() {
  const y = window.scrollY + NAV_OFFSET
  let active = 'hero'
  for (const id of SECTION_IDS_HOME) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.offsetTop
    if (top <= y) active = id
  }
  return active
}

export default function Navbar({ onLogoClick }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const updateScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
    if (isHome) {
      setActiveSection(getActiveSectionId())
    }
  }, [isHome])

  useEffect(() => {
    queueMicrotask(() => updateScroll())
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [updateScroll])

  useEffect(() => {
    if (isHome) {
      queueMicrotask(() => setActiveSection(getActiveSectionId()))
    }
  }, [isHome, location.pathname])

  const closeMenu = () => setMenuOpen(false)

  const scrollToSection = (id) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `/#${id}`)
    setActiveSection(id)
  }

  const handleSectionClick = (id) => (e) => {
    closeMenu()
    if (!isHome) return
    e.preventDefault()
    scrollToSection(id)
  }

  const sectionLinkClass = (id) =>
    ['nav-link', isHome && activeSection === id ? 'is-active' : ''].filter(Boolean).join(' ')

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container-page" aria-label="Primary">
        <Link
          to="/"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault()
            onLogoClick?.()
            closeMenu()
          }}
        >
          <span className="nav-logo-mark" aria-hidden="true">
            <span className="nav-logo-mark-letter">A</span>
          </span>
          <span className="nav-logo-text">Adriana Caraeni</span>
        </Link>

        <div className={`nav-links-wrap ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/#about" className={sectionLinkClass('about')} onClick={handleSectionClick('about')}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#experience"
                className={sectionLinkClass('experience')}
                onClick={handleSectionClick('experience')}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/#portfolio"
                className={sectionLinkClass('portfolio')}
                onClick={handleSectionClick('portfolio')}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/#testimonials"
                className={sectionLinkClass('testimonials')}
                onClick={handleSectionClick('testimonials')}
              >
                Testimonials
              </Link>
            </li>
          </ul>
          <Link to="/#contact" className="nav-cta nav-mobile-cta" onClick={handleSectionClick('contact')}>
            Let&apos;s Work Together
          </Link>
        </div>

        <Link to="/#contact" className="nav-cta nav-desktop-cta" onClick={handleSectionClick('contact')}>
          Let&apos;s Work Together
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
