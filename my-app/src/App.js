import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Career from './components/Career'

function App() {
  return (
    <>
    
    <Navbar/>

    <Routes>
    <Route exact path='/' element={<Home/>}/>
    </Routes>

    <Routes>
    <Route path='/about' element={<About/>}/>
    </Routes>

    <Routes>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>

    <Routes>
    <Route path='/login' element={<Login/>}/>
    </Routes>

    <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    </Routes> 

    <Routes>
    <Route path='/career' element={<Career/>}/>
    </Routes> 
    
    </>
  )
}

export default App
