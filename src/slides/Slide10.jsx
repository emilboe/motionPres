import './Slide10.css'

export default function Slide10() {
  return (
    <section className="slide-layout slide10">
      <div className="speaker-line">
        Staggered timing creates flow.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Staggered Timing</h2>
        <p className="slide-subtitle">
          Små forsinkelser i rekkefølge gir en organisk, flytende følelse.
        </p>
      </div>
      <div className="slide10-grid">
        <div className="slide10-card">
          <div className="slide10-thumb slide10-thumb--stack">
            Replace with gif
          </div>
          <div className="slide10-meta">
            <div className="slide10-title">Staggered wipe &amp; reveal</div>
            <div className="slide10-caption">
              Elements appear one after another
            </div>
          </div>
        </div>
        <div className="slide10-card">
          <div className="slide10-thumb slide10-thumb--list">
            Replace with gif
          </div>
          <div className="slide10-meta">
            <div className="slide10-title">Staggered list</div>
            <div className="slide10-caption">
              Items load in a more realistic flow
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
