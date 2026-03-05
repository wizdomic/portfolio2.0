import { useState } from 'react'
import styles from './Projects.module.css'

type Project = {
  num: string
  title: string
  desc: string
  stack: string[]
  href: string
  install?: string
}

const projects: Project[] = [
  {
    num: '01',
    title: '@wizdomic/gtxr',
    desc: 'A system-wide AI-powered git automation tool that automates long and repeated git commands like add, commit, branch, and push in one go, and also generates related commit messages through code changes using Python.',
    stack: ['Shell', 'JS', 'Gemini', 'Anthropic', 'OpenAI'],
    href: 'https://github.com/wizdomic/gtxr',
    install: 'npm install -g @wizdomic/gtxr',
  },
  {
    num: '02',
    title: 'APIVersionShield',
    desc: 'A Spring Boot microservice that prevents breaking API changes. Stores versioned API contracts, validates request payloads at runtime, and performs backward-compatibility checks before deployment.',
    stack: ['Spring Boot', 'JSON Schema', 'NetworkNT Validator', 'Swagger'],
    href: 'https://github.com/wizdomic/APIVersionShield',
  },
  {
    num: '03',
    title: 'CodeCollab',
    desc: 'An online language processing platform for beginners with multi-user support. Currently integrating an AI agent to assist with code completion and debugging.',
    stack: ['React', 'Node.js', 'Monaco Editor', 'JDoodle'],
    href: 'https://colabnow.vercel.app/',
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className={styles.copyBtn}
      onClick={e => {
        e.preventDefault()
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }}
    >
      {copied ? '✓ copied' : 'copy'}
    </button>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>// projects</p>
        <h2 className={styles.title}>Things I've Built</h2>
        <p className={styles.sub}>A selection of personal and side projects.</p>
      </div>

      <div className={styles.list}>
        {projects.map((p, i) => (
          <a
            key={p.num}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className={styles.glow} aria-hidden />

            <div className={styles.cardLeft}>
              <div className={styles.cardMeta}>
                <span className={styles.num}>{p.num}</span>
                <span className={styles.badge}>project</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.stack}>
                {p.stack.map((s, idx) => (
                  <span key={idx} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.cardRight}>
              {p.install && (
                <div className={styles.installBlock} onClick={e => e.preventDefault()}>
                  <div className={styles.installBar}>
                    <span className={styles.installDots}>
                      <span /><span /><span />
                    </span>
                    <span className={styles.installBarLabel}>terminal</span>
                  </div>
                  <div className={styles.installCmd}>
                    <span className={styles.installPrompt}>$</span>
                    <code>{p.install}</code>
                  </div>
                  <div className={styles.installFooter}>
                    <span className={styles.installNote}>npm registry</span>
                    <CopyButton text={p.install} />
                  </div>
                </div>
              )}
              <span className={styles.arrow}>↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}