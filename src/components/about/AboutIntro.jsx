import RevealBlock from './RevealBlock.jsx'

export default function AboutIntro() {
  return (
    <RevealBlock as="header" className="about-glass-panel about-intro">
      <div className="about-intro-visual">
        <img
          className="about-profile-photo"
          src="/HeadshotAdriana.jpg"
          alt="Adriana Caraeni"
          width={140}
          height={140}
          decoding="async"
        />
      </div>
      <div className="about-intro-copy">
        <p className="about-kicker">Profile</p>
        <h2 id="about-heading" className="about-section-title">
          About
        </h2>
        <p className="about-lead-name">Adriana Caraeni</p>
        <p className="about-location">Boston, Massachusetts</p>
      </div>
    </RevealBlock>
  )
}
