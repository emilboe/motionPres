import { useEffect, useState } from 'react'
import './Slide02.css'

export default function Slide02() {
  const [sendState, setSendState] = useState('idle')
  const [isLight, setIsLight] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (sendState !== 'loading') return undefined

    const timer = setTimeout(() => setSendState('sent'), 1600)
    return () => clearTimeout(timer)
  }, [sendState])

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight)
    return () => document.body.classList.remove('light-mode')
  }, [isLight])

  return (
    <section className={`slide-layout slide02 ${isLight ? 'is-light' : ''}`}>
      <div className="speaker-line">
        Typer motion: funksjonell, strukturell, emosjonell.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Typer Motion</h2>
        <p className="slide-subtitle">
          De fleste UI-animasjoner havner i tre kategorier. Den virkelige
          magien skjer når de overlapper.
        </p>
      </div>
      <div className="slide02-grid">
        <div className="slide02-column">
          <h3>Funksjonell motion</h3>
          <ul>
            <li>Fjerner friksjon og hjelper folk å fullføre oppgaver</li>
            <li>State change: trykk → lader → ferdig</li>
            <li>Hover, drag-and-drop, feedback i ett sveip</li>
          </ul>
          <button
            type="button"
            className={`slide02-send ${sendState}`}
            onClick={() => setSendState('loading')}
            disabled={sendState === 'loading'}
          >
            <span className="label">
              {sendState === 'idle' && 'Send →'}
              {sendState === 'loading' && 'Sender...'}
              {sendState === 'sent' && 'Sendt ✓'}
            </span>
            <span className="spinner" />
          </button>
        </div>
        <div className="slide02-column">
          <h3>Strukturell motion</h3>
          <ul>
            <li>Forklarer hvordan grensesnittet henger sammen</li>
            <li>Kort som utvider seg til detaljer, panel fra riktig retning</li>
            <li>Ikke teleportering, men sammenheng</li>
          </ul>
          <button
            type="button"
            className="slide02-modal-trigger button-33"
            onClick={() => setIsModalOpen(true)}
          >
            Åpne panel
          </button>
        </div>
        <div className="slide02-column">
          <h3>Emosjonell motion</h3>
          <ul>
            <li>Føles bra på grunn av de små detaljene</li>
            <li>Interaksjon mer levende og minneverdig</li>
            <li>Skaper forhold mellom bruker og produkt</li>
          </ul>
          <label className="slide02-switch" htmlFor="checkboxSwitch">
            <input
              type="checkbox"
              name="mode"
              id="checkboxSwitch"
              checked={!isLight}
              onChange={(event) => setIsLight(!event.target.checked)}
              aria-label="Toggle light or dark mode"
            />
            <span className="slide02-switch-label">
              {isLight ? 'Lys modus' : 'Mørk modus'}
            </span>
          </label>
        </div>
      </div>
      <div
        className={`slide02-modal ${isModalOpen ? 'is-open' : ''}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="slide02-modal-card"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="slide02-modal-title">Detaljvisning</div>
          <p>
            Her ser du en utdypning som glir inn og viser hvordan strukturen
            henger sammen.
          </p>
          <button
            type="button"
            className="slide02-modal-close"
            onClick={() => setIsModalOpen(false)}
          >
            Lukk
          </button>
        </div>
      </div>
    </section>
  )
}
