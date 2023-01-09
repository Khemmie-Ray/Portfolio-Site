import './App.css'
import "./index.css"
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'
import CoverPage from './components/CoverPage'
import Sidebar from './components/Sidebar'
import github from "./assets/Github.png"
import linkedin from "./assets/Linkedin.png"
import twitter from "./assets/Vector.png"

function App() {
  const date = new Date()
  let year = date.getFullYear()

  const [currentPage, setCurrentPage] = useState(() => ({
    explore: true,
    mainPage: false,
  }))

  function switchPage() {
    setCurrentPage(prev => {
      return {
        ...prev,
        explore: !prev.explore,
        mainPage: !prev.mainPage,
      }
    })
  }

  return (
    <>
    {currentPage.explore && <CoverPage handleCurrentPage={switchPage} />}
   {currentPage.mainPage && <div className="container">
    <Header />
      <Sidebar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <footer>
      <div className="mobile-socials">
            <a href="https://twitter.com/Haramide" target="_blank"><img src={twitter} alt="" className="icons"/></a>
            <a href="https://www.linkedin.com/in/oluwakemi-atoyebi" target="_blank"><img src={linkedin} alt="" className="icons"/></a>
            <a href="https://github.com/Khemmie-Ray" target="_blank"><img src={github} alt="" className="icons"/></a>
        </div>
        <p>&copy; Khemmie-Ray <span>{year}</span></p>
      </footer>
    </div>}
    </>
  )
}

export default App
