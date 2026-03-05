import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const roles = [
  'OS Enthusiast',
  'Backend Engineer',
  'DevOps Practitioner',
  'Infrastructure Automator',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="hero" className={styles.hero}>
      {/* grid lines decoration */}
      <div className={styles.gridLines} aria-hidden />

      <div className={styles.content}>
        <p className={styles.tag}>Available for opportunities</p>

        <h1 className={styles.name}>
          Rahul<br />
          <em>Naskar</em>
        </h1>

        <div className={styles.typeRow}>
          <span className={styles.typePrefix}>$ whoami —</span>
          <span className={styles.typed}>{displayed}</span>
          <span className={styles.cursor}>█</span>
        </div>

        <p className={styles.bio}>
          Passionate about building scalable backend systems and automating infrastructure
          through modern DevOps practices while exploring emerging technologies.
        </p>

        <div className={styles.cta}>
          <a href="mailto:naskarrahul620@gmail.com" className={styles.btnPrimary}>
            get in touch
          </a>
          <a
            href="https://github.com/wizdomic"
            target="_blank"
            rel="noreferrer"
            className={styles.btnGhost}
          >
            github ↗
          </a>
        </div>

        <div className={styles.stats}>
          {[
            // { n: '3+', label: 'Years building' },
            { n: '17+', label: 'Tech stack' },
            { n: '∞', label: 'Curiosity' },
            { n: '10+', label: 'Projects' },
          ].map(({ n, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{n}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
