import { useState } from 'react'
import LoadingPage from './components/LoadingPage'
import './App.css'
import "./index.css"
import NaveBar from './components/NaveBar'

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
      
      </div>
    </>
  )
}

export default App
