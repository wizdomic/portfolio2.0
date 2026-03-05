import styles from './Certificates.module.css'

const certs = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    badge: 'AWS',
    color: '#FF9900',
    href: '#',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2024',
    badge: 'CKA',
    color: '#326CE5',
    href: '#',
  },
  {
    title: 'HashiCorp Terraform Associate',
    issuer: 'HashiCorp',
    date: '2023',
    badge: 'TF',
    color: '#7B42BC',
    href: '#',
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2023',
    badge: 'DCA',
    color: '#2496ED',
    href: '#',
  },
  {
    title: 'Linux Foundation Certified Engineer',
    issuer: 'The Linux Foundation',
    date: '2023',
    badge: 'LFCE',
    color: '#00e5c3',
    href: '#',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>// certificates</p>
        <h2 className={styles.title}>Credentials</h2>
        <p className={styles.sub}>Certifications that validate my expertise.</p>
      </div>

      <div className={styles.list}>
        {certs.map((c, i) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <div
              className={styles.badge}
              style={{ '--badge-color': c.color } as React.CSSProperties}
            >
              {c.badge}
            </div>
            <div className={styles.info}>
              <h3 className={styles.certTitle}>{c.title}</h3>
              <p className={styles.issuer}>{c.issuer}</p>
            </div>
            <div className={styles.right}>
              <span className={styles.date}>{c.date}</span>
              <span className={styles.arrow}>↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
