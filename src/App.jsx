import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Splash from './components/Splash.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
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

  return (
    <>
      {showSplash && <Splash key={splashKey} />}
      <Navbar onLogoClick={handleLogoClick} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNameClick={replaySplash} />} />
          <Route path="/experience" element={<ExperiencePage />} />
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
