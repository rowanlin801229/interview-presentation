import { motion, useTransform, type MotionValue } from 'framer-motion'
import type { Project } from '../data/projects'
import './StickyCard.css'

type StickyCardProps = {
  project: Project
  index: number
  progress: MotionValue<number>
  targetScale: number
  cardCount: number
  reducedMotion: boolean
}

export default function StickyCard({
  project,
  index,
  progress,
  targetScale,
  cardCount,
  reducedMotion,
}: StickyCardProps) {
  const step = 1 / cardCount

  const scale = useTransform(progress, (p) => {
    const active = Math.min(Math.floor(p / step), cardCount - 1)
    if (index >= active) return 1
    const passStart = (index + 1) * step
    const t = Math.min(1, Math.max(0, (p - passStart) / (step * 0.35)))
    return 1 - t * (1 - targetScale)
  })

  const zIndex = useTransform(progress, (p) => {
    const active = Math.min(Math.floor(p / step), cardCount - 1)
    if (index === active) return 100
    if (index < active) return 20 + index
    return 10 + index
  })

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-card"
      style={
        reducedMotion
          ? { zIndex: cardCount - index }
          : { scale, zIndex }
      }
      aria-label={`${project.title} — ${project.tags}`}
    >
      <img src={project.cover} alt="" />
      <div className="sticky-card__meta">
        <p className="sticky-card__idx">{project.index}</p>
        <h3 className="sticky-card__title">{project.title}</h3>
        <p className="sticky-card__tags">{project.tags}</p>
        <p className="sticky-card__go">Open case →</p>
      </div>
    </motion.a>
  )
}
