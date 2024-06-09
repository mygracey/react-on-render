
import Home from './Home'
import About from './About'
import Services from './Services'
import Navbar from './Navbar'
import ErrorPage from './ErrorPage'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){

  return(
    <div className="app">
      <Router>

      <Navbar />

      <Routes>

      <Route path="/"  element={<Home />} />

      <Route path="/about" element={<About />} />


      <Route path="/services"  element={<Services />} />

      <Route path="*" element={<ErrorPage/>}/>


      </Routes>

        </Router>
    </div>
  )

}

export default App