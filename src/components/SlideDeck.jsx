import { useEffect, useState } from 'react'
import logo from '../assets/tietologo.png'
import './SlideDeck.css'

export default function SlideDeck({ slides }) {
  const [index, setIndex] = useState(0)
  const total = slides.length
  const CurrentSlide = slides[index]

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        setIndex((current) => Math.min(current + 1, total - 1))
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        setIndex((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [total])

  return (
    <div className="deck">
      <img className="deck-logo" src={logo} alt="Tieto logo" />
      <div className="slide" key={index}>
        <CurrentSlide />
      </div>
      <div className="deck-hint">
        {index + 1} / {total}
      </div>
    </div>
  )
}

