import { useState } from 'react'
import LoadingPage from './components/LoadingPage'
import './App.css'
import "./index.css"
import NaveBar from './components/NaveBar'
import MobileMenu from './MobileMenu'
import Home from './components/section/Home'
import About from './components/section/About'
import Projects from './components/section/Projects'
import Contact from './components/section/Contact'
import { BackgroundLines } from './assets/BackgroundLines'
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingPage onComplete={() => setIsLoaded(true)} />}{""}
      <div
        className={`relative min-h-screen transition-opacity duration-1000
        ${isLoaded ? "opacity-100" : "opacity-0"}
         bg-gray-950 text-gray-100`}
      >
        {/* Animated background */}
        <BackgroundLines
          className="fixed inset-0 -z-10 h-full w-full opacity-40"
          svgOptions={{ duration: 18 }}
        />

        {/* Content */}
        <NaveBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main className="pt-20 space-y-24 md:space-y-32">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        <footer className="border-t border-white/10 mt-16 py-6 text-center text-sm text-gray-500/80 backdrop-blur">
          <p>&copy; {new Date().getFullYear()} Yahyaoui. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
