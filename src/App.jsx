import Cursor from './components/Cursor.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Splash from './components/Splash.jsx'

function App() {
  return (
    <>
      <Splash />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
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
