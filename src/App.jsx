import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './pages/Projects'

function App() {


  return (
   <div className='container'>
    <Navbar/>
    <Home/>
    <About/>
    <Resume/>
    <Projects/>
    <Footer/>
   </div>
  )
}

export default App
