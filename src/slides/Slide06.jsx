import { useState } from 'react'
import './Slide06.css'

export default function Slide06() {
  const [liked, setLiked] = useState(false)
  const [toggleOn, setToggleOn] = useState(false)
  const [rippleId, setRippleId] = useState(0)

  return (
    <section className="slide-layout slide06">
      <div className="speaker-line">
        Functional motion improves usability.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Functional Motion Examples</h2>
        <p className="slide-subtitle">
          Funksjonell motion hjelper brukere å fullføre oppgaver raskere og med
          mindre friksjon.
        </p>
      </div>
      <ul className="slide-list">
        <li>Drag, drop, reorder</li>
        <li>Hover + click states</li>
        <li>Loading + confirmation feedback</li>
      </ul>
      <div className="slide06-grid">
        <button
          type="button"
          className={`slide06-like ${liked ? 'is-liked' : ''}`}
          onClick={() => setLiked((value) => !value)}
        >
          ♥ Like
        </button>
        <button
          type="button"
          className={`slide06-toggle ${toggleOn ? 'is-on' : ''}`}
          onClick={() => setToggleOn((value) => !value)}
        >
          <span className="slide06-toggle-handle" />
          <span className="slide06-toggle-label">Toggle</span>
        </button>
        <button
          type="button"
          className="slide06-ripple"
          onClick={() => setRippleId((value) => value + 1)}
        >
          <span className="slide06-ripple-label">Ripple</span>
          <span key={rippleId} className="slide06-ripple-wave" />
        </button>
      </div>
    </section>
  )
}
