import { Clock3, MousePointer2, RotateCw, Waves } from 'lucide-react'
import './Slide07.css'

export default function Slide07() {
  return (
    <section className="slide-layout slide07">
      <div className="speaker-line">Interaction design anatomy.</div>
      <div className="slide-header">
        <h2 className="slide-title">Interaction Design Anatomy</h2>
        <p className="slide-subtitle">
          Fire byggesteiner som former hver interaksjon i et grensesnitt.
        </p>
      </div>
      <div className="slide07-grid">
        <div className="slide07-card">
          <div className="slide07-card-title">
            <span className="slide07-icon">
              <MousePointer2 />
            </span>
            Interaction Trigger
          </div>
          <ul>
            <li>What causes the animation</li>
            <li>Mouse over, tap, swipe, scroll, page load</li>
          </ul>
        </div>
        <div className="slide07-card">
          <div className="slide07-card-title">
            <span className="slide07-icon">
              <RotateCw />
            </span>
            Response
          </div>
          <ul>
            <li>What happens once triggered</li>
            <li>Move, flip, fade, change color, grow/shrink</li>
          </ul>
        </div>
        <div className="slide07-card">
          <div className="slide07-card-title">
            <span className="slide07-icon">
              <Clock3 />
            </span>
            Timing
          </div>
          <ul>
            <li>Duration (how long it takes)</li>
            <li>Delay (how long after trigger)</li>
          </ul>
        </div>
        <div className="slide07-card">
          <div className="slide07-card-title">
            <span className="slide07-icon">
              <Waves />
            </span>
            Easing
          </div>
          <ul>
            <li>The physics of the animation</li>
            <li>Smoothness</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
