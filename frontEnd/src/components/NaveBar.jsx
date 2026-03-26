import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/yy.png'

function NaveBar({ menuOpen, setMenuOpen }) {
  const { t, i18n } = useTranslation()
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (menuOpen) { setShowNav(true); return }
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 80)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, menuOpen])

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact']
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  const menuLinks = t('menu', { returnObjects: true })

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-40
        bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl
        transition-all duration-300
        ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
    >
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 md:h-9 md:w-9 rounded-full border border-white/20 shadow-sm group-hover:shadow-blue-500/20 transition-shadow"
            />
            <span className="hidden sm:inline font-mono text-base md:text-lg font-semibold text-white tracking-tight">
              YY<span className="text-blue-400">.</span>
            </span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="w-6 h-4 relative flex flex-col justify-between md:hidden z-40"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] w-full bg-white rounded-full transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-full bg-white rounded-full transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-[2px] w-full bg-white rounded-full transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-1 text-xs uppercase tracking-wide">
            {menuLinks.map((link, i) => {
              const sectionId = link.href?.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={i}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200
                    ${isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          {/* Language selector */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="hidden md:block bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg px-2 py-1 text-xs cursor-pointer transition-colors focus:outline-none focus:border-blue-500/40"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default NaveBar