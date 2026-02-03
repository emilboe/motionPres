import { useState } from 'react'
import './Slide05.css'

export default function Slide05() {
  const [chaotic, setChaotic] = useState(false)

  return (
    <section className="slide-layout slide05">
      <div className="speaker-line">
        Emotional motion needs balance.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Emotional Motion</h2>
        <p className="slide-subtitle">
          Følelsesladet motion kan gi personlighet, men må balanseres mot
          ytelse, tid og budsjett.
        </p>
      </div>
      <ul className="slide-list">
        <li>Delight without distraction</li>
        <li>Performance and constraints matter</li>
        <li>Combine emotional + functional motion</li>
      </ul>
      <div className="slide-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => setChaotic((value) => !value)}
        >
          Toggle balanced / chaotic
        </button>
      </div>
      <div className="slide05-stage">
        <div className={`slide05-square ${chaotic ? 'is-chaotic' : ''}`} />
      </div>
    </section>
  )
}
