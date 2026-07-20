import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import ProjectStack from './components/ProjectStack'
import './App.css'

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Hero />
      <section className="projects-section" aria-labelledby="projects-heading">
        <div className="projects-head">
          <span>Projects</span>
          <h2 id="projects-heading">Selected work</h2>
          <p>Scroll to explore · click a card to open the case study</p>
        </div>
        <ProjectStack />
      </section>
      <footer className="site-foot">
        <p>
          Yu-Hsien (Rowan) Lin ·{' '}
          <a
            href="https://www.rowanlin1229.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </p>
        <p className="site-foot__credit">
          Card stack inspired by Skiper UI
        </p>
      </footer>
    </>
  )
}

export default App
