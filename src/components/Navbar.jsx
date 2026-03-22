import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTION_IDS_HOME = ['hero', 'testimonials', 'portfolio', 'blog', 'about', 'contact']
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
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [updateScroll])

  useEffect(() => {
    if (isHome) {
      setActiveSection(getActiveSectionId())
    }
  }, [isHome, location.pathname])

  const closeMenu = () => setMenuOpen(false)

  const sectionLinkClass = (id) =>
    ['nav-link', isHome && activeSection === id ? 'is-active' : ''].filter(Boolean).join(' ')

  const experienceActive = location.pathname === '/experience'

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
              <Link
                to="/experience"
                className={['nav-link', experienceActive ? 'is-active' : ''].filter(Boolean).join(' ')}
                onClick={closeMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="/#portfolio" className={sectionLinkClass('portfolio')} onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/#blog" className={sectionLinkClass('blog')} onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/#about" className={sectionLinkClass('about')} onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
          <Link to="/#contact" className="nav-cta nav-mobile-cta" onClick={closeMenu}>
            Let&apos;s Work Together
          </Link>
        </div>

        <Link to="/#contact" className="nav-cta nav-desktop-cta">
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
