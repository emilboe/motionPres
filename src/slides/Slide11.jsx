import { useLayoutEffect, useRef, useState } from 'react'
import logo from '../assets/tietologo.png'
import './Slide11.css'

export default function Slide11() {
  const [easing, setEasing] = useState('linear')
  const [isRight, setIsRight] = useState(false)
  const trackRef = useRef(null)
  const logoRef = useRef(null)

  const curves = [
    {
      id: 'linear',
      label: 'Linear',
      desc: 'Constant speed'
    },
    {
      id: 'ease-in',
      label: 'Accelerate',
      desc: 'Speeds up'
    },
    {
      id: 'ease-out',
      label: 'Decelerate',
      desc: 'Slows down'
    },
    {
      id: 'ease-both',
      label: 'Ease Both',
      desc: 'In + out'
    },
    {
      id: 'elastic',
      label: 'Elastic (Spring)',
      desc: 'Playful bounce'
    }
  ]

  const play = (next) => {
    setEasing(next)
    setIsRight((value) => !value)
  }

  useLayoutEffect(() => {
    const track = trackRef.current
    const logoEl = logoRef.current
    if (!track || !logoEl) return

    const updateOffset = () => {
      const max = Math.max(0, track.clientWidth - logoEl.clientWidth - 32)
      track.style.setProperty('--logo-max', `${max}px`)
    }

    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [])

  return (
    <section className="slide-layout slide11">
      <div className="speaker-line">Common easing curves.</div>
      <div className="slide-header">
        <h2 className="slide-title">Common Easing Curves</h2>
        <p className="slide-subtitle">
          Velg en kurve og se Tieto-logoen bevege seg over skjermen.
        </p>
      </div>
      <div className="slide11-grid">
        {curves.map((curve) => (
          <button
            key={curve.id}
            type="button"
            className={`slide11-card ${
              easing === curve.id ? 'is-active' : ''
            }`}
            onClick={() => play(curve.id)}
          >
            <div className="slide11-curve">
              <span className="slide11-dot" />
              <span className="slide11-dot slide11-dot--end" />
              <svg viewBox="0 0 100 60" aria-hidden="true">
                {curve.id === 'linear' && (
                  <path d="M6 54 L 94 6" />
                )}
                {curve.id === 'ease-in' && (
                  <path d="M6 54 C 40 54, 70 40, 94 6" />
                )}
                {curve.id === 'ease-out' && (
                  <path d="M6 54 C 30 20, 60 6, 94 6" />
                )}
                {curve.id === 'ease-both' && (
                  <path d="M6 54 C 30 54, 40 6, 94 6" />
                )}
                {curve.id === 'elastic' && (
                  <path d="M6 54 C 40 10, 60 10, 70 30 S 90 50, 94 6" />
                )}
              </svg>
            </div>
            <div className="slide11-card-title">{curve.label}</div>
            <div className="slide11-card-desc">{curve.desc}</div>
          </button>
        ))}
      </div>
      <div className="slide11-track" ref={trackRef}>
        <img
          src={logo}
          alt="Tieto logo"
          className={`slide11-logo easing-${easing} ${
            isRight ? 'is-right' : ''
          }`}
          ref={logoRef}
        />
      </div>
    </section>
  )
}
