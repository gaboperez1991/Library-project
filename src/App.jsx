import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutPage from './PAGES/AboutPage'
import HomePage from './PAGES/HomePage'
import Page404 from './PAGES/Page404'
import ReadPage from './PAGES/ReadPage'


function App() {

  return (
    <Router>
    <main> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/readpage' element={<ReadPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </main>
    </Router>

  )
}

export default App
