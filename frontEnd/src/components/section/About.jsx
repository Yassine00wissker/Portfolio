import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

function About() {
    const fontendSkills = [
        "React",
        "TypeScript",
        "Angular",
        "Tailwind",
        "Bootstrap",
    ]
    const backendSkills = [
        "Node.js",
        "Python",
        "MongoDB",
        "MySQL",

    ]

    return (
        <section id="about"
            className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        About Me
                    </h2>
                    <div className='glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                        <p>
                            🚀 Full-Stack Developer building smart web apps with MERN + AI
                            <br />🧠 Learning Machine Learning with Python & real-world AI deployment
                            <br />🔨 Currently working on an AI-powered Product Recommendation Engine
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-bold mb-4'>FrontEnd</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {fontendSkills.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 px-3 rounded-full py-1 text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition' >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-bold mb-4'>BackEnd</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 px-3 rounded-full py-1 text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition' >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8' >
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'> Education </h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>
                                    <strong>B.S. information system development</strong>- iset zaghouan (2026)
                                </li>
                            </ul>
                        </div>
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'> Work Experience </h3>
                            <div className='text-gray-300 space-y-4'>
                                <div>
                                    <h4>#######################</h4>
                                    <p>###########################
                                        #########
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    )
}

export default About