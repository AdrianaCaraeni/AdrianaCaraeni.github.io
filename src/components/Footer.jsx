const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page site-footer-inner">
        <div className="site-footer-brand">
          <span className="site-footer-name">Adriana Caraeni</span>
          <p className="site-footer-tagline">Founder · Sales · AI/ML · Engineering</p>
        </div>
        <nav className="site-footer-nav" aria-label="Footer">
          <ul className="site-footer-links">
            {LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer-copy">&copy; {YEAR} Adriana Caraeni. All rights reserved.</p>
      </div>
    </footer>
  )
}
