import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {


  return (
   <div className='container'>
    <Navbar/>
    <Home/>
    <About/>
    <Footer/>
   </div>
  )
}

export default App
