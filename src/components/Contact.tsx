import React, { useState } from 'react'
import styles from './Contact.module.css'

type FormData = { name: string; email: string; message: string }
type Status = 'idle' | 'sending' | 'success' | 'error'

const socialLinks = [
  { label: 'GitHub', handle: 'click', href: 'https://github.com/wizdomic' },
  { label: 'LinkedIn', handle: 'click', href: 'https://www.linkedin.com/in/rahul-naskar-677396283/' },
  { label: 'Email', handle: 'click', href: 'mailto:naskarrahul620@gmail.com' },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--hover-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--hover-y', `${e.clientY - rect.top}px`)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: 'f49535c7-81d2-45df-93da-94e7cbade4de', ...formData }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setTimeout(() => { setStatus('idle'); setErrorMessage('') }, 5000)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.left}>
          <p className={styles.label}>// contact</p>
          <h2 className={styles.title}>
            Let's Build<br /><em>Something.</em>
          </h2>
          <p className={styles.sub}>
            Open to backend roles, DevOps positions, and interesting side projects.
          </p>
          <div className={styles.links}>
            {socialLinks.map(({ label, handle, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.link}>
                <span className={styles.linkLabel}>{label}</span>
                <span className={styles.linkHandle}>{handle}</span>
                <span className={styles.linkArrow}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="name">Name</label>
            <input
              id="name" name="name" type="text" placeholder="Your name"
              required value={formData.name}
              onChange={handleChange} onMouseMove={handleMouseMove}
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email" placeholder="your@email.com"
              required value={formData.email}
              onChange={handleChange} onMouseMove={handleMouseMove}
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              placeholder="Tell me about your project..."
              required rows={5} value={formData.message}
              onChange={handleChange} onMouseMove={handleMouseMove}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`${styles.btn} ${status === 'sending' ? styles.btnDisabled : ''}`}
          >
            {status === 'sending' ? '...sending' : 'send message →'}
          </button>

          {status === 'success' && (
            <p className={styles.success}>✓ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className={styles.error}>✗ {errorMessage || 'Failed to send. Please try again.'}</p>
          )}
        </form>
      </div>

      <footer className={styles.footer}>
        <span> Rahul Naskar</span>
        <span className={styles.built}>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  )
}
