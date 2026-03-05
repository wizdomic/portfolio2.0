import styles from './About.module.css'

const facts = [
  { label: 'Focus', value: 'Backend & Infrastructure' },
  { label: 'OS', value: 'Linux (btw)' },
  { label: 'Philosophy', value: 'Automate everything' },
  { label: 'Currently', value: 'Exploring DevOPS , eBPF, Cloud' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>// about</p>
          <h2 className={styles.title}>
            Who I<br /><em>Am.</em>
          </h2>

          <p className={styles.bio}>
            I'm <strong>Rahul Naskar</strong> — an Operating System enthusiast and backend
            engineer who loves the intersection of low-level systems and high-scale
            infrastructure.
          </p>
          <p className={styles.bio}>
            I build robust backend services with Node.js and FastAPI, containerise and
            orchestrate them with Docker &amp; Kubernetes, and provision cloud infrastructure
            on AWS using Terraform. If it can be automated, I'll script it.
          </p>
        </div>

        <div className={styles.right}>
          {facts.map(({ label, value }) => (
            <div key={label} className={styles.fact}>
              <span className={styles.factLabel}>{label}</span>
              <span className={styles.factValue}>{value}</span>
            </div>
          ))}

          <div className={styles.terminalBlock}>
            <div className={styles.terminalBar}>
              <span /><span /><span />
              <p>rahul@arch ~</p>
            </div>
            <div className={styles.terminalBody}>
              <p><span className={styles.prompt}>$</span> uname -a</p>
              <p className={styles.output}>Linux arch 6.x.x-arch1 #1 SMP x86_64 GNU/Linux</p>
              <p><span className={styles.prompt}>$</span> cat /etc/passion</p>
              <p className={styles.output}>backend · devops · systems</p>
              <p><span className={styles.prompt}>$</span> <span className={styles.blink}>█</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
