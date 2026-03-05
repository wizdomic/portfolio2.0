import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ringX = 0, ringY = 0
    let frameId: number

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      if (cursorRef.current) {
        cursorRef.current.style.left = x + 'px'
        cursorRef.current.style.top = y + 'px'
      }
      const animate = () => {
        ringX += (x - ringX) * 0.18
        ringY += (y - ringY) * 0.18
        if (ringRef.current) {
          ringRef.current.style.left = ringX + 'px'
          ringRef.current.style.top = ringY + 'px'
        }
        frameId = requestAnimationFrame(animate)
      }
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />

      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 200,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
        }}
      />
      <div style={{ position: 'fixed', top: -200, left: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(0,229,195,0.055) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} aria-hidden />
      <div style={{ position: 'fixed', bottom: -150, right: -150, width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,85,255,0.045) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} aria-hidden />

      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Certificates /> */}
        <Contact />
      </main>
    </>
  )
}
