import { Clock3, MousePointer2, RotateCw, Waves } from 'lucide-react'
import './Slide07.css'

export default function Slide07() {
  return (
    <section className="slide-layout slide07">
      <div className="speaker-line">Interaksjonsanatomi.</div>
      <div className="slide-header">
        <h2 className="slide-title">Interaksjonsanatomi</h2>
        <p className="slide-subtitle">
          Hver interaksjon består av fire komponenter.
        </p>
      </div>
      <div className="slide07-grid">
        <div className="slide07-card">
          <div className="slide07-card-title">
            <span className="slide07-icon">
              <MousePointer2 />
            </span>
            Trigger
          </div>
          <ul>
            <li>Det som starter den</li>
            <li>Hover, trykk, swipe, scroll, pageload</li>
          </ul>
        </div>
        <div className="slide07-card">
          <h3 className="slide07-card-title">
            <span className="slide07-icon">
              <RotateCw />
            </span>
            Respons
          </h3>
          <ul>
            <li>Hva som faktisk skjer</li>
            <li>Flytting, fading, skalering, rotasjon</li>
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
            <li>Hvor lenge ting varer</li>
            <li>Forsinkelse som gir rytme</li>
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
            <li>Bevegelsens “fysikk”</li>
            <li>Hvordan noe akselererer og bremser</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
