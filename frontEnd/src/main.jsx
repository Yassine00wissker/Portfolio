import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'
import { BackgroundLines } from './assets/BackgroundLines.jsx'
createRoot(document.getElementById('root')).render(
  <BackgroundLines>
  <StrictMode>
    <App />
  </StrictMode>
  </BackgroundLines>
)
