import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import StickyCard from './StickyCard'
import { PROJECTS } from '../data/projects'
import './ProjectStack.css'

const CARD_COUNT = PROJECTS.length

export default function ProjectStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="project-stack">
      <div className="project-stack__sticky">
        <div className="project-stack__stage">
          {PROJECTS.map((project, i) => {
            const targetScale = Math.max(
              0.5,
              1 - (CARD_COUNT - i - 1) * 0.1,
            )

            return (
              <StickyCard
                key={project.title}
                project={project}
                index={i}
                progress={scrollYProgress}
                targetScale={targetScale}
                cardCount={CARD_COUNT}
                reducedMotion={reducedMotion}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
