import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = ['about', 'skills', 'projects', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo} onClick={e => { e.preventDefault(); scrollTo('hero') }}>
        RN<span>.</span>
      </a>
      <div className={styles.links}>
        {links.map((l) => (
          <button key={l} className={styles.link} onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
      </div>
    </nav>
  )
}
