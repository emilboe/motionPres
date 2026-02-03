import { useState } from 'react'
import './Slide16.css'

export default function Slide16() {
  const [pulse, setPulse] = useState(false)
  const [bounce, setBounce] = useState(false)
  const [glow, setGlow] = useState(false)
  const [slide, setSlide] = useState(false)

  return (
    <section className="slide-layout slide16">
      <div className="speaker-line">
        Motion studies spark new patterns.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Motion Study Categories</h2>
        <p className="slide-subtitle">
          Samle referanser: navigasjon, datavisualisering, fysisk følelse og
          mikrointeraksjoner.
        </p>
      </div>
      <div className="slide16-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => setPulse((value) => !value)}
        >
          Navigation
        </button>
        <button
          type="button"
          className="slide-button"
          onClick={() => setBounce((value) => !value)}
        >
          Data viz
        </button>
        <button
          type="button"
          className="slide-button"
          onClick={() => setGlow((value) => !value)}
        >
          Physical
        </button>
        <button
          type="button"
          className="slide-button"
          onClick={() => setSlide((value) => !value)}
        >
          Micro
        </button>
      </div>
      <div className="slide16-stage">
        <div className={`slide16-chip ${pulse ? 'is-pulsing' : ''}`}>A</div>
        <div className={`slide16-chip ${bounce ? 'is-bouncing' : ''}`}>B</div>
        <div className={`slide16-chip ${glow ? 'is-glowing' : ''}`}>C</div>
        <div className={`slide16-chip ${slide ? 'is-sliding' : ''}`}>D</div>
      </div>
    </section>
  )
}
