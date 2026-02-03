import { useState } from 'react'
import './Slide14.css'

export default function Slide14() {
  const [mode, setMode] = useState('react-motion')
  const [runId, setRunId] = useState(0)

  const play = (nextMode) => {
    setMode(nextMode)
    setRunId((value) => value + 1)
  }

  return (
    <section className="slide-layout slide14">
      <div className="speaker-line">
        Choose tools based on the interaction.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">UI Motion Tools</h2>
        <p className="slide-subtitle">
          Verktøyvalg handler om behov: drag/scroll, høy fidelity, eller rask
          validering.
        </p>
      </div>
      <ul className="slide-list">
        <li>Flinto, Principle, Studio</li>
        <li>After Effects = non-interactive</li>
        <li>Pick the simplest tool to validate</li>
      </ul>
      <div className="slide-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => play('react-motion')}
        >
          Principle
        </button>
        <button
          type="button"
          className="slide-button"
          onClick={() => play('framer')}
        >
          Studio
        </button>
      </div>
      <div className={`slide14-stage mode-${mode}`}>
        <div key={runId} className="slide14-dot" />
      </div>
    </section>
  )
}
