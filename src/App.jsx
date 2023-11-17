import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {


  return (
   <div className='container'>
    <Navbar/>
    <Home/>
    <Footer/>
   </div>
  )
}

export default App
