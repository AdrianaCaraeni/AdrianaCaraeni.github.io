import { createElement } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function RevealBlock({ as: Tag = 'div', className = '', children, style }) {
  const ref = useScrollReveal()
  return createElement(
    Tag,
    { ref, className: `about-reveal reveal ${className}`.trim(), style },
    children,
  )
}
