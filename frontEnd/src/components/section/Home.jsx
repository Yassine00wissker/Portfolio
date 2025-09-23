import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
import { useTranslation } from 'react-i18next'
import { FlipWords } from "../../assets/FlipWords.jsx"
function Home() {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-20"
        >
            <RevealOnScroll>
                <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Text */}
                    <div className="text-center md:text-left z-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text leading-tight text-transparent">
                            {t('home.title')}{" "}
                            <FlipWords words={["Yahyaoui", "Yahyaoui"]}></FlipWords>
                        </h1>
                        <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0">
                            {t('home.description')}
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="#projects"
                                className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition"
                            >
                                {t('home.viewProjects')}
                            </a>
                            <a
                                href="#contact"
                                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium hover:bg-blue-500/10 hover:shadow-md hover:-translate-y-0.5 transition"
                            >
                                {t('home.contactMe')}
                            </a>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center md:justify-end">
                        <img

                            alt="Me"
                            className="w-64 md:w-80 rounded-2xl shadow-lg border-4 border-blue-500/20 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Home
