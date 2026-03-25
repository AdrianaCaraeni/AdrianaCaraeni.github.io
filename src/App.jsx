import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Splash from './components/Splash.jsx'
import HomePage from './pages/HomePage.jsx'

function AppShell() {
  const [splashKey, setSplashKey] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()

  const replaySplash = () => setSplashKey((k) => k + 1)

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
    }
    setSplashKey((k) => k + 1)
  }

  const showSplash = location.pathname === '/'

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return

    const targetId = location.hash.slice(1)
    if (!targetId) return

    let raf = 0
    raf = requestAnimationFrame(() => {
      const target = document.getElementById(targetId)
      if (!target) return
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => cancelAnimationFrame(raf)
  }, [location.pathname, location.hash])

  return (
    <>
      {showSplash && <Splash key={splashKey} />}
      <Navbar onLogoClick={handleLogoClick} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNameClick={replaySplash} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
