import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⬡',
    skills: ['Node.js', 'Spring-Boot', 'REST APIs', 'WebSockets', 'JWT', 'OAuth'],
  },
  {
    category: 'Databases',
    icon: '◈',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Indexing & Optimization'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '◎',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'ECS', 'EKS', 'Linux', 'Nginx'],
  },
  {
    category: 'Deployment',
    icon: '▲',
    skills: ['Vercel', 'Render', 'Firebase', 'Heroku', 'Cloud VM', 'Railway'],
  },
  {
    category: 'Languages',
    icon: '</>',
    skills: ['Python', 'Bash', 'YAML', 'Java', 'HCL', 'JS'],
  },
  {
    category: 'Engineering',
    icon: '⊞',
    skills: ['Microservices', 'System Design', 'API Security', 'Logging & Monitoring'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>// expertise</p>
        <h2 className={styles.title}>Tech Stack</h2>
        <p className={styles.sub}>
          Tools and technologies I work with to build robust, scalable systems.
        </p>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            className={styles.card}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={styles.cardHead}>
              <span className={styles.icon}>{group.icon}</span>
              <span className={styles.category}>{group.category}</span>
            </div>
            <div className={styles.tags}>
              {group.skills.map((s) => (
                <span key={s} className={styles.tag}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
