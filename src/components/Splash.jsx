import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 1800

export default function Splash() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const tick = (now) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current
      const next = Math.min(100, Math.round((elapsed / DURATION_MS) * 100))
      setProgress(next)

      if (elapsed < DURATION_MS) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        setDone(true)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      id="splash-screen"
      className={done ? 'is-hidden' : ''}
      aria-hidden={done}
      aria-busy={!done}
      role="status"
    >
      <div className="splash-inner">
        <div className="splash-logo" aria-hidden="true">
          AC
        </div>
        <h1 className="splash-name">Adriana Caraeni</h1>
        <p className="splash-tagline">I grow businesses.</p>
        <div className="splash-bar-wrap">
          <div className="splash-bar-track">
            <div className="splash-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <p className="splash-pct">{progress}%</p>
      </div>
    </div>
  )
}
