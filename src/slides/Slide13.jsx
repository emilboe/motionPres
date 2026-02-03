import { useState } from 'react'
import './Slide13.css'

export default function Slide13() {
  const [mode, setMode] = useState('smart')
  const [runId, setRunId] = useState(0)

  const play = (nextMode) => {
    setMode(nextMode)
    setRunId((value) => value + 1)
  }

  return (
    <section className="slide-layout slide13">
      <div className="speaker-line">
        Prototyping tools let you demo ideas live.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Flinto Prototyping</h2>
        <p className="slide-subtitle">
          Interaktive prototyper gjør det enklere å vise visjon, dele arbeid og
          kreditere andre designere.
        </p>
      </div>
      <ul className="slide-list">
        <li>Live demos inside the tool</li>
        <li>Drag-and-drop gifs & videos</li>
        <li>Shareable for stakeholders</li>
      </ul>
      <div className="slide-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => play('smart')}
        >
          Live demo
        </button>
        <button
          type="button"
          className="slide-button"
          onClick={() => play('instant')}
        >
          Static
        </button>
      </div>
      <div className={`slide13-stage mode-${mode}`}>
        <div key={runId} className="slide13-card">
          Prototype
        </div>
      </div>
    </section>
  )
}
