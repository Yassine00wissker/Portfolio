import React from 'react'

function Home() {
  return (
    <section id="home"
    className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <h1 className='text-7xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text leading-right text-transparent'>
                Hello! I'm Yassin
            </h1>
            <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                an IT student focused on full-stack development , DevOps tools, and AI projects. Currently working on real-world apps .
            </p>
            <div className='flex justify-center space-x-4'>
                <a href='#projects' className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-2xs'>
                    View Projects</a> 

                <a href='#contact' className='border border-blue-500/50  text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                hover:shadow-2xl hover:bg-blue-500/10'>
                    Contact Me</a>
            </div>
        </div>
    </section>
)
}

export default Home