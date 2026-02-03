import { useState } from 'react'
import './Slide03.css'

const easingOptions = [
  { id: 'linear', label: 'Linear' },
  { id: 'ease-in', label: 'Ease-in' },
  { id: 'ease-both', label: 'Ease-in-out' },
  { id: 'ease-out', label: 'Ease-out' },
  { id: 'spring', label: 'Spring' }
]

export default function Slide03() {
  const [easing, setEasing] = useState('ease-out')
  const [isRight, setIsRight] = useState(false)

  const play = (nextEasing) => {
    setEasing(nextEasing)
    setIsRight((value) => !value)
  }

  return (
    <section className="slide-layout slide03">
      <div className="speaker-line">
        Easing is the physics of your motion.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Common Easing Curves</h2>
        <p className="slide-subtitle">
          Easing gjør bevegelse mer naturlig og hjelper digitale produkter å
          føles fysiske.
        </p>
      </div>
      <ul className="slide-list">
        <li>Linear</li>
        <li>Ease-in</li>
        <li>Ease-out</li>
        <li>Ease-in-out</li>
        <li>Spring / elastic</li>
      </ul>
      <div className="slide-actions">
        {easingOptions.map((option) => (
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
      <div className={`slide03-track ${isRight ? 'is-right' : ''}`}>
        <div className={`slide03-dot easing-${easing}`} />
      </div>
    </section>
  )
}
