import React from 'react'
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const content = <>
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-green transition'>
        <ul className='text-center text-xl p-20'>
            <a href='#home'>
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
              Home 
               </li>
              </a>
              <a href='#home'>
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
              Home 
               </li>
              </a>
              <a href='#home'>
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
              Home 
               </li>
              </a>
              <a href='#home'>
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
              Home 
               </li>
              </a>
              <a href='#home'>
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
              Home 
               </li>
              </a>
        </ul>
    </div>
    </>
  return (
   <nav>
    <div className='flex justify-between text-white'>
        <div className='flex items-center flex-1'>
            <a href="/">
            <img src="https://i.postimg.cc/HsszXLvy/an-logo-letter-monogram-slash-with-modern-logo-designs-template-vector-removebg-preview-1.png " alt="logo" className="logo "/>
            </a>
           
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden'>
            <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[25px]'>
            <a href='#Home'>
            <li className='my-4 py-4'>
              Home 
               </li>
              </a>
              <a href='#About'>
            <li className='my-4 py-4'>
              About 
               </li>
              </a>
              <a href='#Resume'>
            <li className='my-4 py-4'>
              Resume 
               </li>
              </a>
              <a href='#Projects'>
            <li className='my-4 py-4'>
              Projects 
               </li>
              </a>
              <a href='#Contact'>
            <li className='my-4 py-4'>
              Contact 
               </li>
              </a>
        </ul>
            </div>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
