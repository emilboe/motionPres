import { useState } from 'react'
import './Slide13.css'

export default function Slide13() {
  const [open, setOpen] = useState(true)

  return (
    <section className="slide-layout slide13">
      <div className="speaker-line">Ease-out on open and close.</div>
      <div className="slide-header">
        <h2 className="slide-title">Sidebar Ease-Out</h2>
        <p className="slide-subtitle">
          Menyen glir inn og ut med decelerate (ease-out) for en rolig
          inn- og utgang.
        </p>
      </div>
      <div className={`slide13-frame ${open ? 'is-open' : ''}`}>
        <button
          type="button"
          className="slide13-burger"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <div className="slide13-topbar">
          <div className="slide13-search">Search</div>
          <div className="slide13-avatar" />
        </div>
        <aside className="slide13-sidebar">
          <div className="slide13-section">Shop by category</div>
          <ul>
            <li>Books &amp; Audible</li>
            <li>Movies, Music &amp; Games</li>
            <li>Smart Home</li>
            <li>Pet Supplies</li>
            <li>Beauty &amp; Health</li>
            <li>Sports &amp; Outdoors</li>
          </ul>
        </aside>
        <div className="slide13-content">
          The menu flies onto the screen, so it eases out (decelerates).
        </div>
      </div>
    </section>
  )
}
