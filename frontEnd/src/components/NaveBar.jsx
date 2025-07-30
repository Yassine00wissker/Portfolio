import React, { useEffect } from 'react'

function NaveBar({menuOpen ,setMenuOpen}) {

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])

  return (
    <nav className='fixed-top top-0 w-full z-40 bg-black backdrop-blur-lg border-white/10 shadow-lg '>
        <div id='section' className='max-w-5xl mx-auto px-4'>
            <div  className='flex justify-between items-center h-16'>
                <a href='#home' className='font-mono text-xl font-bold text-white'> 
                    Yassine
                    <span className='text-blue-500'>.tech</span> </a>
            <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
                &#9776;
            </div>



            <div className='hidden md:flex items-center space-x-8'>
                <a href='#home' className='text-gray-300 hove:text-white transition-colors'> Home </a>
            </div>

            <div className='hidden md:flex items-center space-x-8'>
                <a href='#about' className='text-gray-300 hove:text-white transition-colors'> About </a>
            </div>

            <div className='hidden md:flex items-center space-x-8'>
                <a href='#projects' className='text-gray-300 hove:text-white transition-colors'> Projects </a>
            </div>

            <div className='hidden md:flex items-center space-x-8'>
                <a href='#contact' className='text-gray-300 hove:text-white transition-colors'> Contact </a>
            </div>


            </div>
        </div>
    </nav>
  )
}

export default NaveBar