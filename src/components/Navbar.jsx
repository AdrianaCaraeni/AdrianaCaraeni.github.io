import { useCallback, useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'experience', 'blog', 'about', 'contact']
const NAV_OFFSET = 88

function getActiveId() {
  const y = window.scrollY + NAV_OFFSET
  let active = 'hero'
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.offsetTop
    if (top <= y) active = id
  }
  return active
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  const updateScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
    setActive(getActiveId())
  }, [])

  useEffect(() => {
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [updateScroll])

  const closeMenu = () => setMenuOpen(false)

  const linkClass = (id) =>
    ['nav-link', active === id ? 'is-active' : ''].filter(Boolean).join(' ')

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container-page" aria-label="Primary">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          <span className="nav-logo-mark" aria-hidden="true">
            AC
          </span>
          <span className="nav-logo-text">Adriana Caraeni</span>
        </a>

        <div className={`nav-links-wrap ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            <li>
              <a href="#hero" className={linkClass('hero')} onClick={closeMenu}>
                Adriana Caraeni
              </a>
            </li>
            <li>
              <a href="#experience" className={linkClass('experience')} onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#blog" className={linkClass('blog')} onClick={closeMenu}>
                Blog
              </a>
            </li>
            <li>
              <a href="#about" className={linkClass('about')} onClick={closeMenu}>
                About
              </a>
            </li>
          </ul>
          <a href="#contact" className="nav-cta nav-mobile-cta" onClick={closeMenu}>
            Let&apos;s Work Together
          </a>
        </div>

        <a href="#contact" className="nav-cta nav-desktop-cta">
          Let&apos;s Work Together
        </a>

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
