import { useState } from 'react'
import './Slide14.css'

export default function Slide14() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const handleToggle = () => {
    if (open) {
      setClosing(true)
      setTimeout(() => {
        setOpen(false)
        setClosing(false)
      }, 360)
    } else {
      setOpen(true)
    }
  }

  return (
    <section className="slide-layout slide14">
      <div className="speaker-line">
        Elastic motion adds playful energy.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Elastic (Spring) Motion</h2>
        <p className="slide-subtitle">
          Klikk hovedknappen for å sprette frem flere valg med stagger.
        </p>
      </div>
      <div
        className={`slide14-stage ${open ? 'is-open' : ''} ${
          closing ? 'is-closing' : ''
        }`}
      >
        <button
          type="button"
          className="slide14-main"
          onClick={handleToggle}
        >
          +
        </button>
        <div className="slide14-option slide14-option--1">Photo</div>
        <div className="slide14-option slide14-option--2">Post</div>
        <div className="slide14-option slide14-option--3">Share</div>
      </div>
    </section>
  )
}
