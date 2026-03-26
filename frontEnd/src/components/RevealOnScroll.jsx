import React, { useEffect, useRef } from 'react'

function RevealOnScroll({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          // once visible, no need to keep observing
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, []) // ← empty array: run once on mount only

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}

export default RevealOnScroll