import { useState } from 'react'
import './Slide11.css'

export default function Slide11() {
  const [mode, setMode] = useState('formal')

  return (
    <section className={`slide-layout slide11 mode-${mode}`}>
      <div className="speaker-line">
        Motion is your brand handshake.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Adding Personality</h2>
        <p className="slide-subtitle">
          Bevegelse kan gi merkevaren personlighet uten å bli barnslig.
        </p>
      </div>
      <ul className="slide-list">
        <li>Brand voice through motion</li>
        <li>Subtle ≠ boring</li>
        <li>Playful ≠ childish</li>
      </ul>
      <div className="slide-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => setMode(mode === 'formal' ? 'playful' : 'formal')}
        >
          Switch to {mode === 'formal' ? 'playful' : 'formal'} mode
        </button>
      </div>
      <div className="slide11-badge">
        {mode === 'formal' ? 'Formal motion' : 'Playful motion'}
      </div>
    </section>
  )
}
