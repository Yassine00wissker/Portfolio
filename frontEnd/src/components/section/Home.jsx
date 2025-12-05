import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
import { useTranslation } from 'react-i18next'
import { FlipWords } from "../../assets/FlipWords.jsx"
import me from "../../assets/yy.jpg"
function Home() {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-24 md:pt-28"
        >
            <RevealOnScroll>
                <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Text */}
                    <div className="text-center md:text-left z-10">
                        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400/80">
                            {t('home.badge')}
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text leading-tight text-transparent">
                            {t('home.title')}{" "}
                            <FlipWords words={["Yahyaoui", "Yahyaoui"]}></FlipWords>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto md:mx-0">
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
                                className="border border-blue-500/40 text-blue-300 py-3 px-6 rounded-lg font-medium hover:bg-blue-500/10 hover:shadow-md hover:-translate-y-0.5 transition"
                            >
                                {t('home.contactMe')}
                            </a>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src = {me}
                            alt="Me"
                            className="w-56 md:w-80 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.35)] border border-blue-500/30 hover:scale-105 transition-transform duration-500 m-9 object-cover"
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Home
