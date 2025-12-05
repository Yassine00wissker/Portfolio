import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../assets/yy.png';
function NaveBar({ menuOpen, setMenuOpen }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen])


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang); // save preference
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div id='section' className='w-[80%] mx-auto px-4'>
        <div className='flex justify-between items-center h-16 md:h-20'>
          {/* Logo */}
          <a href='#home' className='flex items-center gap-3 group'>
            <img src={logo} alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 shadow-sm group-hover:shadow-md transition-shadow" />
            <span className='hidden sm:inline font-mono text-lg md:text-xl font-semibold text-white tracking-tight'>
              Yahyaoui<span className="text-blue-400">.</span>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            className='w-8 h-8 relative flex flex-col justify-between md:hidden z-40'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] w-full bg-white rounded-full transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-full bg-white rounded-full transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-[2px] w-full bg-white rounded-full transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
            {t('menu', { returnObjects: true }).map((link, i) => (
              <a
                className='text-gray-300 hover:text-white hover:-translate-y-0.5 transition-all duration-150'
                key={i}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Language Selector */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="bg-black/60 text-white border border-gray-600 rounded px-2 py-1 ml-4 hidden md:block text-sm"
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