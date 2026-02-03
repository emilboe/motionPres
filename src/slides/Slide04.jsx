import { useState } from 'react'
import './Slide04.css'

export default function Slide04() {
  const [mode, setMode] = useState('transition')
  const [isRight, setIsRight] = useState(false)

  const trigger = (nextMode) => {
    setMode(nextMode)
    setIsRight((value) => !value)
  }

  return (
    <section className="slide-layout slide04">
      <div className="speaker-line">
        Structural motion shows how screens connect.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Structural Motion</h2>
        <p className="slide-subtitle">
          Overganger gir brukeren et mentalt kart og viser hvor elementer kommer
          fra og hvor de skal.
        </p>
      </div>
      <ul className="slide-list">
        <li>Elements moving on/off screen</li>
        <li>Modals, dropdowns, tooltips</li>
        <li>List to detail transitions</li>
      </ul>
      <div className="slide-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => trigger('teleport')}
        >
          Teleport
        </button>
        <button
          type="button"
          className="slide-button"
          onClick={() => trigger('transition')}
        >
          Transition
        </button>
      </div>
      <div className={`slide04-stage mode-${mode}`}>
        <div className={`slide04-card ${isRight ? 'is-right' : ''}`}>
          Card
        </div>
      </div>
    </section>
  )
}
