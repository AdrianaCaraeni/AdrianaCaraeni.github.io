import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'

function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      <Navbar onLogoClick={handleLogoClick} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
