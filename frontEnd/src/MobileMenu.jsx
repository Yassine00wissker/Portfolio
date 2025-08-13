import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
function MobileMenu({menuOpen ,setMenuOpen}) {
  const { t } = useTranslation()

  const links = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' }
  ];

  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.78)] z-40 flex flex-col items-center justify-center 
                    transition-all duration-300 ease-in-out 
                    ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                    `}>


        <button onClick={()=>setMenuOpen(false)} 
                className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
                aria-label='Close Menu'>
            x
            </button>
            {t('menu', { returnObjects: true }).map((link, i) => (
              <a key={i} href={link.href} onClick={()=>{setMenuOpen(false)}} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"
              }`}>{link.name}</a>
            ))}

    </div>
  )
}

export default MobileMenu