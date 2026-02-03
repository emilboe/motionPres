import { useEffect, useState } from 'react'
import './Slide02.css'

export default function Slide02() {
  const [sendState, setSendState] = useState('idle')
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    if (sendState !== 'loading') return undefined

    const timer = setTimeout(() => setSendState('sent'), 900)
    return () => clearTimeout(timer)
  }, [sendState])

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight)
    return () => document.body.classList.remove('light-mode')
  }, [isLight])

  return (
    <section className={`slide-layout slide02 ${isLight ? 'is-light' : ''}`}>
      <div className="speaker-line">
        Types of motion: functional, structural, emotional.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Types of Motion</h2>
        <p className="slide-subtitle">
          Tre kategorier som gjør UI mer forståelig: funksjonell, strukturell
          og emosjonell.
        </p>
      </div>
      <div className="slide02-grid">
        <div className="slide02-column">
          <h3>Functional Motion</h3>
          <ul>
            <li>Improve usability &amp; UX</li>
            <li>Drag &amp; drop</li>
            <li>Hover &amp; click states</li>
          </ul>
          <button
            type="button"
            className={`slide02-send ${sendState}`}
            onClick={() => setSendState('loading')}
            disabled={sendState === 'loading'}
          >
            <span className="label">
              {sendState === 'idle' && 'Send →'}
              {sendState === 'loading' && 'Sending...'}
              {sendState === 'sent' && 'Sent ✓'}
            </span>
            <span className="spinner" />
          </button>
        </div>
        <div className="slide02-column">
          <h3>Structural Motion</h3>
          <ul>
            <li>Elements on/off screen</li>
            <li>Items grow to detail</li>
            <li>Modals, dropdowns</li>
            <li>Parallax transitions</li>
          </ul>
        </div>
        <div className="slide02-column">
          <h3>Emotional Motion</h3>
          <ul>
            <li>Character animations</li>
            <li>Success &amp; failure states</li>
            <li>Moments of delight</li>
          </ul>
          <button
            type="button"
            className="slide02-toggle"
            onClick={() => setIsLight((value) => !value)}
          >
            <span className="toggle-sky">
              <span className="toggle-sun" />
              <span className="toggle-moon" />
              <span className="toggle-cloud" />
            </span>
            <span className="toggle-label">
              {isLight ? 'Dark mode' : 'Light mode'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
