import { useState } from 'react'
import './Slide10.css'

const components = [
  { id: 'buttons', label: 'Buttons', text: 'Hover + press states, 180ms.' },
  { id: 'forms', label: 'Forms', text: 'Focus, error, success states in context.' },
  { id: 'cards', label: 'Cards', text: 'Subtle lift + scale on hover.' },
  { id: 'lists', label: 'Lists', text: 'Staggered entry, 40ms per item.' }
]

export default function Slide10() {
  const [active, setActive] = useState('buttons')

  return (
    <section className="slide-layout slide10">
      <div className="speaker-line">
        Test components in context.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Design System Motion States</h2>
        <p className="slide-subtitle">
          Det er lettere å justere motion når komponenter testes i ekte
          kontekst, ikke bare isolert.
        </p>
      </div>
      <div className="slide10-controls">
        {components.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`slide10-chip ${active === item.id ? 'is-active' : ''}`}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="slide10-contract">
        {components.find((item) => item.id === active)?.text}
      </div>
    </section>
  )
}
