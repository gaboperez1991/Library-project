import './App.css'
import AboutPage from './PAGES/AboutPage'
import HomePage from './PAGES/HomePage'
import { NotFound } from './PAGES/NotFound'
import ReadPage from './PAGES/ReadPage'
import { Router } from './PAGES/Router'


const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/readpage',
    Component: ReadPage
  },
  {
    path: '/notfound',
    Component: NotFound
  }
]

function App() {

  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  )
}

export default App
