import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__copy">
        <h1 className="hero__greeting">
          Hi, I&apos;m <em>Rowan</em>.
        </h1>
        <p className="hero__fullname">Yu-Hsien (Rowan) Lin</p>
        <p className="hero__role">Cross-screen UI/UX Designer</p>
        <p className="hero__tagline">Bridging platforms, connecting users.</p>
      </div>
      <div className="hero__visual">
        <img
          src="/covers/hero-rowan.png"
          alt="Rowan Lin portrait"
          width={420}
          height={525}
        />
      </div>
    </section>
  )
}
