import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
// import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {Route, Routes} from 'react-router-dom'

const App=()=>{

  return(
   <div>
    
    <Routes>
    <Route    path="/"      element ={<Home />} />
    <Route    path="/about"    element={<About />} />
    {/* <Route    path="/services"  element={<Services/>} /> */}
    <Route    path="/skills"  element={<Skills/>} />
    <Route    path="/projects"  element={<Projects/>} />
    <Route    path="/contact"  element={<Contact/>} />
    </Routes>

   </div> 
    
    
  )
} 

export default App