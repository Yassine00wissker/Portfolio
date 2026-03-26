import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
import { useTranslation } from 'react-i18next'
import { FlipWords } from '../../assets/FlipWords.jsx'
import me from '../../assets/yy.jpg'

// Social links — update hrefs with your real profiles
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Yahyaoui-Yassin',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 .0.77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
]

function Home() {
  const { t } = useTranslation()

  // Meaningful rotating words that match Yassin's profile
  const flipWords = ['Full-Stack Dev', 'AI Enthusiast', 'MERN Developer', 'Problem Solver']

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 md:pt-28"
    >
      <RevealOnScroll>
        <div className="w-[88%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="text-center md:text-left z-10">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400/80 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {t('home.badge')}
            </span>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
                {t('home.title')}
              </span>
            </h1>

            {/* Flip words */}
            <div className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 h-9 flex items-center justify-center md:justify-start">
              <FlipWords words={flipWords} className="text-blue-300" />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t('home.description')}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-6 rounded-lg font-medium shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('home.viewProjects')}
              </a>
              <a
                href="#contact"
                className="border border-blue-500/40 text-blue-300 py-2.5 px-6 rounded-lg font-medium hover:bg-blue-500/10 hover:border-blue-500/60 hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('home.contactMe')}
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
              {/* Resume download */}
              <a
                href="/resume.pdf"
                download
                className="text-xs text-gray-500 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl scale-110" />
              <img
                src={me}
                alt="Yassin Yahyaoui"
                className="relative w-52 md:w-72 lg:w-80 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.3)] border-2 border-blue-500/30 hover:scale-105 hover:shadow-[0_0_65px_rgba(59,130,246,0.45)] transition-all duration-500 object-cover"
              />
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home