import { useEffect, useState } from 'react'
import logo from '../assets/tietologo.png'
import './SlideDeck.css'

export default function SlideDeck({ slides }) {
  const [index, setIndex] = useState(0)
  const total = slides.length
  const CurrentSlide = slides[index]
  const goPrev = () => setIndex((current) => Math.max(current - 1, 0))
  const goNext = () => setIndex((current) => Math.min(current + 1, total - 1))

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        goNext()
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        goPrev()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [total])

  return (
    <div className="deck">
      <button
        type="button"
        className="deck-logo-button"
        onClick={() => setIndex(0)}
        aria-label="Go to first slide"
      >
        <img className="deck-logo" src={logo} alt="Tieto logo" />
      </button>
      <div className="slide" key={index}>
        <CurrentSlide />
      </div>
      <div className="deck-hint">
        <button
          type="button"
          className="deck-nav"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <span className="deck-count">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          className="deck-nav"
          onClick={goNext}
          disabled={index === total - 1}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  )
}

