import { useState } from 'react'
import './Slide09.css'

export default function Slide09() {
  const [showTokens, setShowTokens] = useState(false)

  return (
    <section className="slide-layout slide09">
      <div className="speaker-line">
        Every interaction has four parts.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Interaction Design Anatomy</h2>
        <p className="slide-subtitle">
          Et samspill består av trigger, respons, timing og easing som sammen
          skaper følelsen av bevegelse.
        </p>
      </div>
      <ul className="slide-list">
        <li>Trigger: hover, tap, scroll</li>
        <li>Response: move, fade, scale</li>
        <li>Timing: duration + delay</li>
        <li>Easing: motion physics</li>
      </ul>
      <div className="slide-actions">
        <button
          type="button"
          className="slide-button"
          onClick={() => setShowTokens((value) => !value)}
        >
          {showTokens ? 'Hide anatomy' : 'Reveal anatomy'}
        </button>
      </div>
      {showTokens && (
        <div className="slide09-tokens">
          <div className="slide09-token">Trigger → Response</div>
          <div className="slide09-token">Timing = duration + delay</div>
          <div className="slide09-token">Easing = acceleration + deceleration</div>
        </div>
      )}
    </section>
  )
}
