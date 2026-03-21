import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 5400
const ROTATE_MS = 1260

const ROTATING_LINES = [
  'I grow businesses.',
  'Entrepreneur · Sales · AI/ML · SWE',
  'Scaling ideas into reality.',
  'Bold, modern, technical — human.',
]

export default function Splash() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
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

  useEffect(() => {
    if (done) return
    const id = setInterval(() => {
      setLineIndex((i) => (i + 1) % ROTATING_LINES.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [done])

  return (
    <div
      id="splash-screen"
      className={done ? 'is-hidden' : ''}
      aria-hidden={done}
      aria-busy={!done}
      role="status"
    >
      <div className="splash-inner">
        <h1 className="splash-name">Adriana Caraeni</h1>
        <div className="splash-rotator" aria-live="polite">
          <p key={lineIndex} className="splash-rotator-line">
            {ROTATING_LINES[lineIndex]}
          </p>
        </div>
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
