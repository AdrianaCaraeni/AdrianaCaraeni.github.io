import { useEffect, useRef } from 'react'

/**
 * Sets --parallax on the element (translateY in px) from scroll position.
 * Respects prefers-reduced-motion.
 */
export function useParallax(multiplier = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      el.style.setProperty('--parallax', '0px')
      return
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = (vh - rect.top) / (vh + rect.height)
      const y = (progress - 0.35) * vh * multiplier
      el.style.setProperty('--parallax', `${y}px`)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [multiplier])

  return ref
}
