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
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
     {!isLoaded && <LoadingPage onComplete={() => setIsLoaded(true)} />}{""}
      <div className={`min-h-screen transition-opacity duration-1000
        ${isLoaded ? "opacity-100" : "opacity-0"}
        bg-black text-gray-100`}
        >
          <NaveBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
      </div>
    </>
  )
}

export default App
