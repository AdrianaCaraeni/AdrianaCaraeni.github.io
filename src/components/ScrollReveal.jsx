import { forwardRef, useCallback } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Wrapper that applies scroll-triggered .reveal → .visible (IntersectionObserver).
 */
const ScrollReveal = forwardRef(function ScrollReveal(
  { as = 'div', className = '', children, ...rest },
  forwardedRef,
) {
  const Component = as
  const revealRef = useScrollReveal()
  const combined = ['reveal', className].filter(Boolean).join(' ')

  const setRef = useCallback(
    (node) => {
      revealRef.current = node
      if (typeof forwardedRef === 'function') forwardedRef(node)
      else if (forwardedRef) forwardedRef.current = node
    },
    [forwardedRef, revealRef],
  )

  return (
    <Component ref={setRef} className={combined} {...rest}>
      {children}
    </Component>
  )
})

ScrollReveal.displayName = 'ScrollReveal'

export default ScrollReveal
