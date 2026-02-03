import { useEffect, useRef, useState } from 'react'
import fireflies from '../assets/Owl City - Fireflies.mp3'
import owlcityCover from '../assets/owlcity.jpg'
import './Slide12.css'

export default function Slide12() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)
  const rafRef = useRef(0)
  const startRef = useRef(0)

  useEffect(() => {
    if (!isPlaying) return undefined

    startRef.current = performance.now() - progress * 20000

    const tick = (now) => {
      const elapsed = now - startRef.current
      const next = Math.min(elapsed / 20000, 1)
      setProgress(next)
      if (next < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPlaying, progress])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (progress >= 1) {
      audio.currentTime = 0
      setProgress(0)
    }

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Failed to play audio', error)
    }
  }

  return (
    <section className="slide-layout slide12">
      <div className="speaker-line">
        Linear easing example.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Linear</h2>
        <p className="slide-subtitle">
          Linear bevegelse holder jevn fart, perfekt for lydvisualisering og
          tidsbaserte indikatorer.
        </p>
      </div>
      <div className="slide12-grid">
        <div className="slide12-audio">
          <div className="slide12-player">
            <div className="slide12-cover">
              <img src={owlcityCover} alt="Owl City - Fireflies" />
            </div>
            <div className="slide12-controls">
              <span className="slide12-skip">◀◀</span>
              <button
                type="button"
                className="slide12-play"
                onClick={togglePlay}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <span className="slide12-skip">▶▶</span>
            </div>
            <div className="slide12-waveform">
              <div className="slide12-spectrum">
                {Array.from({ length: 36 }).map((_, index) => {
                  const threshold = (index + 1) / 36
                  const isActive = progress >= threshold
                  const heights = [
                    18, 24, 32, 44, 36, 52, 28, 40, 58, 30, 46, 34,
                    62, 26, 38, 50, 30, 56, 42, 34, 48, 28, 54, 36,
                    60, 30, 44, 24, 40, 32, 52, 28, 46, 34, 38, 22
                  ]
                  const height = heights[index % heights.length]

                  return (
                    <span
                      key={index}
                      className={isActive ? 'is-active' : ''}
                      style={{ height: `${height}px` }}
                    />
                  )
                })}
              </div>
              <div className="slide12-progress">
                <span>1:38</span>
                <span className="slide12-progress-label">Fireflies</span>
                <span>3:34</span>
              </div>
            </div>
          </div>
          <div className="slide12-credit">
            Linear fill (20s) synced to play
          </div>
          <audio
            ref={audioRef}
            src={fireflies}
            onEnded={() => {
              setIsPlaying(false)
              setProgress(1)
            }}
          />
        </div>
        <div className="slide12-curve">
          <div className="slide12-curve-card">
            <div className="slide12-curve-title">Linear</div>
            <div className="slide12-curve-box">
              <span className="slide12-dot" />
              <span className="slide12-dot slide12-dot--end" />
              <svg viewBox="0 0 100 60" aria-hidden="true">
                <path d="M6 54 L 94 6" />
              </svg>
            </div>
            <div className="slide12-curve-desc">
              Avoid linear easing unless animating objects that should move at
              a constant rate (i.e. music playing).
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
