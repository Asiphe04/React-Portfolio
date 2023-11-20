import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

function App() {


  return (
   <div className='container'>
    <Navbar/>
    <Home/>
    <About/>
    <Resume/>
    <Footer/>
   </div>
  )
}

export default App
