import { useEffect, useRef } from 'react'

/**
 * Custom cursor (dot + lagging ring). Disabled for coarse pointers via CSS.
 */
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      mx.current = e.clientX
      my.current = e.clientY

      const el = document.elementFromPoint(e.clientX, e.clientY)
      const interactive = el?.closest?.(
        'a, button, [role="button"], input, textarea, select, label',
      )
      ring.classList.toggle('is-hover', Boolean(interactive))
    }

    const loop = () => {
      dot.style.left = `${mx.current}px`
      dot.style.top = `${my.current}px`
      rx.current += (mx.current - rx.current) * 0.13
      ry.current += (my.current - ry.current) * 0.13
      ring.style.left = `${rx.current}px`
      ring.style.top = `${ry.current}px`
      rafRef.current = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
