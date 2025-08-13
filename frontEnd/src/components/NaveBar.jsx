import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function NaveBar({ menuOpen, setMenuOpen }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen])

  const links = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' }
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang); // save preference
  };
  return (
    <nav className='fixed-top top-0 w-full z-40 bg-black backdrop-blur-lg border-white/10 shadow-lg '>
      <div id='section' className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <a href='#home' className='font-mono text-xl font-bold text-white'>
            Yassine
            <span className='text-blue-500'>.tech</span> </a>
          {/* Language Selector */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="bg-black text-white border border-gray-600 rounded px-2 py-1 mr-4 hidden md:block"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
          </select>


          <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            &#9776;
          </div>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {t('menu', { returnObjects: true }).map((link, i) => (
              <a key={i} href={link.href}>{link.name}</a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NaveBar