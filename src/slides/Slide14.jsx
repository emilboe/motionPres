import { useState } from 'react'
import { motion } from 'framer-motion'
import './Slide14.css'

export default function Slide14() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [stiffness, setStiffness] = useState(200)
  const [damping, setDamping] = useState(14)
  const [mass, setMass] = useState(1)
  const [duration, setDuration] = useState(1500)
  const [springKey, setSpringKey] = useState(0)

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
      <div className="slide14-spring">
        <div className="slide14-spring-track">
          <motion.div
            key={springKey}
            className="slide14-spring-dot"
            initial={{ x: 0 }}
            animate={{ x: 120 }}
            transition={{
              type: 'spring',
              stiffness,
              damping,
              mass,
              duration: duration / 1000
            }}
          />
        </div>
      </div>
      <div className="slide14-panel">
        <div className="slide14-panel-title">Spring Settings</div>
        <div className="slide14-panel-grid">
          <label className="slide14-panel-item">
            <span>Stiffness</span>
            <span className="slide14-panel-value">{stiffness}</span>
            <input
              type="range"
              min="50"
              max="400"
              value={stiffness}
              onChange={(event) => setStiffness(Number(event.target.value))}
            />
          </label>
          <label className="slide14-panel-item">
            <span>Damping</span>
            <span className="slide14-panel-value">{damping}</span>
            <input
              type="range"
              min="5"
              max="40"
              value={damping}
              onChange={(event) => setDamping(Number(event.target.value))}
            />
          </label>
          <label className="slide14-panel-item">
            <span>Mass</span>
            <span className="slide14-panel-value">{mass.toFixed(1)}</span>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={mass}
              onChange={(event) => setMass(Number(event.target.value))}
            />
          </label>
          <label className="slide14-panel-item">
            <span>Duration (ms)</span>
            <span className="slide14-panel-value">{duration}</span>
            <input
              type="range"
              min="300"
              max="2500"
              step="100"
              value={duration}
              onChange={(event) => setDuration(Number(event.target.value))}
            />
          </label>
        </div>
        <button
          type="button"
          className="slide14-replay"
          onClick={() => setSpringKey((value) => value + 1)}
        >
          Play
        </button>
      </div>
    </section>
  )
}
