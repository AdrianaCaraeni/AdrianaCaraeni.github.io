import { aboutBio } from '../../data/aboutContent.js'
import RevealBlock from './RevealBlock.jsx'

export default function AboutBio() {
  return (
    <RevealBlock className="about-glass-panel about-bio about-reveal-narrow">
      {aboutBio.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </RevealBlock>
  )
}
