import { useEffect, useRef } from 'react'

const DEFAULTS = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }

/**
 * Observes an element and adds class "visible" when it enters the viewport.
 * Pair with .reveal in globals.css.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { threshold = DEFAULTS.threshold, rootMargin = DEFAULTS.rootMargin } = {
    ...DEFAULTS,
    ...options,
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
