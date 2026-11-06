import React from 'react'
import AppBar from './Components/AppBar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Education from './Components/Education';
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import ProjectView from './Components/ProjectView'
import Footer from './Components/Footer'
import AboutView from './Components/AboutView'
import Certificate from './Components/Certificate'
import Contact from './Components/Contact'

function App() {
  return (
    <div >
      {/* <AppBar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Education/> */}
      <Router>
        <AppBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutView/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/projectview' element={ <ProjectView/>}></Route>
          <Route path='education' element={<Education/>}></Route>
          <Route path='certificate' element={<Certificate/>}></Route>
        </Routes>
        <Contact/>
<Footer/>

      </Router>
    </div>
  )
}

export default App