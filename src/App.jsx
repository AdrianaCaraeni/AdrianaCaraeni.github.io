import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Splash from './components/Splash.jsx'

function App() {
  const [splashKey, setSplashKey] = useState(0)
  const replaySplash = () => setSplashKey((k) => k + 1)

  return (
    <>
      <Splash key={splashKey} />
      <Navbar onNameClick={replaySplash} />
      <main>
        <Hero onNameClick={replaySplash} />
        {/* Anchor targets for nav (inner pages added later) */}
        <div id="experience" className="anchor-target" />
        <div id="blog" className="anchor-target" />
        <div id="about" className="anchor-target" />
        <div id="contact" className="anchor-target" />
      </main>
    </>
  )
}

export default App
