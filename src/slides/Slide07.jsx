import { useState } from 'react'
import './Slide07.css'

const transitions = [
  { id: 'expand', label: 'Card expand' },
  { id: 'slide', label: 'Page slide' },
  { id: 'fade', label: 'Fade-through' }
]

export default function Slide07() {
  const [mode, setMode] = useState('expand')
  const [runId, setRunId] = useState(0)

  const play = (nextMode) => {
    setMode(nextMode)
    setRunId((value) => value + 1)
  }

  return (
    <section className="slide-layout slide07">
      <div className="speaker-line">
        Structural motion reveals app structure.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Structural Motion Examples</h2>
        <p className="slide-subtitle">
          Struktur blir tydelig når elementer utvider seg, bytter kontekst og
          viser hvor man er på vei.
        </p>
      </div>
      <ul className="slide-list">
        <li>Tabs and swipes</li>
        <li>List items expanding</li>
        <li>Cards drilling into detail</li>
      </ul>
      <div className="slide-actions">
        {transitions.map((option) => (
          <button
            key={option.id}
            type="button"
            className="slide-button"
            onClick={() => play(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className={`slide07-stage mode-${mode}`}>
        <div key={runId} className="slide07-card">
          Context
        </div>
      </div>
    </section>
  )
}
