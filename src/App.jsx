import './App.css'
import AboutPage from './PAGES/AboutPage'
import HomePage from './PAGES/HomePage'
import Page404 from './PAGES/Page404'
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
  }
]

function App() {

  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
