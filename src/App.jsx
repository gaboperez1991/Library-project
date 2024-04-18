import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'
import AboutPage from './PAGES/AboutPage'
import HomePage from './PAGES/HomePage'
import ReadPage from './PAGES/ReadPage'





function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(()=> {
    const onLocationChange = () =>{
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <div>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/read' && <ReadPage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}

export default App
