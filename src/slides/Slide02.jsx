import { useEffect, useState } from 'react'
import veiviserRecording from '../assets/veiviser recording.mp4'
import webmAccordion from '../assets/webmd-accordions.mov'
import './Slide02.css'

export default function Slide02() {
  const [sendState, setSendState] = useState('idle')
  const [isLight, setIsLight] = useState(false)
  const [isGoodOpen, setIsGoodOpen] = useState(false)
  const [isBadOpen, setIsBadOpen] = useState(false)
  const [goodKey, setGoodKey] = useState(0)
  const [badKey, setBadKey] = useState(0)

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
          <div className="slide02-modal-actions">
            <button
              type="button"
              className="slide02-modal-trigger button-33"
              onClick={() => {
                setGoodKey((value) => value + 1)
                setIsGoodOpen(true)
              }}
            >
              Åpne smooth
            </button>
            <button
              type="button"
              className="slide02-modal-trigger button-33 is-bad"
              onClick={() => {
                setBadKey((value) => value + 1)
                setIsBadOpen(true)
              }}
            >
              Åpne hard
            </button>
          </div>
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
        className={`slide02-modal variant-a ${isGoodOpen ? 'is-open' : ''}`}
        onClick={() => setIsGoodOpen(false)}
      >
        <div
          key={goodKey}
          className="slide02-modal-card"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="slide02-modal-media">
            <video src={veiviserRecording} controls playsInline />
            <video src={webmAccordion} controls playsInline />
          </div>
          <button
            type="button"
            className="slide02-modal-close"
            onClick={() => setIsGoodOpen(false)}
          >
            Lukk
          </button>
        </div>
      </div>
      <div
        className={`slide02-modal variant-b ${isBadOpen ? 'is-open' : ''}`}
        onClick={() => setIsBadOpen(false)}
      >
        <div
          key={badKey}
          className="slide02-modal-card"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="slide02-modal-media">
            <video src={veiviserRecording} controls playsInline />
            <video src={webmAccordion} controls playsInline />
          </div>
          <button
            type="button"
            className="slide02-modal-close"
            onClick={() => setIsBadOpen(false)}
          >
            Lukk
          </button>
        </div>
      </div>
    </section>
  )
}
