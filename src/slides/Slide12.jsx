import { useState } from 'react'
import './Slide12.css'

export default function Slide12() {
  const [tooMuch, setTooMuch] = useState(false)

  return (
    <section className="slide-layout slide12">
      <div className="speaker-line">
        Motion should guide, not make people seasick.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Avoiding Nausea &amp; Overload</h2>
        <p className="slide-subtitle">
          Respekter brukerens bevegelsesinnstillinger og unngå konstant
          layoutbevegelse.
        </p>
      </div>
      <ul className="slide-list">
        <li>Respect user motion settings</li>
        <li>Don’t animate layout constantly</li>
        <li>Avoid fullscreen parallax for no reason</li>
      </ul>
      <div className="slide-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => setTooMuch((value) => !value)}
        >
          Show {tooMuch ? 'calm' : 'too much'} motion
        </button>
      </div>
      <div className={`slide12-stage ${tooMuch ? 'is-chaotic' : ''}`}>
        <div className="slide12-dot" />
        <div className="slide12-dot" />
        <div className="slide12-dot" />
      </div>
    </section>
  )
}
