import { useState } from 'react'
import LoadingPage from './components/LoadingPage'
import './App.css'
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
     {!isLoaded && <LoadingPage onComplete={() => setIsLoaded(true)} />}
    </>
  )
}

export default App
