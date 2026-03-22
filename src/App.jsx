import { useState } from 'react'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Testimonials from './components/Testimonials.jsx'
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
        <Testimonials />
        {/* Anchor targets for nav (inner pages added later) */}
        <div id="experience" className="anchor-target" />
        <div id="blog" className="anchor-target" />
        <div id="about" className="anchor-target" />
        <Contact />
      </main>
    </>
  )
}

export default App
