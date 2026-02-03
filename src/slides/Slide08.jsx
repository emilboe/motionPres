import { useState } from 'react'
import './Slide08.css'

const loaders = [
  { id: 'skeleton', label: 'Skeleton' },
  { id: 'shimmer', label: 'Shimmer' },
  { id: 'spinner', label: 'Spinner' },
  { id: 'progress', label: 'Progress' }
]

export default function Slide08() {
  const [loader, setLoader] = useState('skeleton')

  return (
    <section className="slide-layout slide08">
      <div className="speaker-line">
        Loading bridges waiting.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Loading &amp; State Changes</h2>
        <p className="slide-subtitle">
          En lasteanimasjon bør ikke si «vent». Den bør si «heng med».
        </p>
      </div>
      <ul className="slide-list">
        <li>Motion bridges waiting</li>
        <li>Avoid spinners if you can</li>
        <li>Skeletons set expectations</li>
      </ul>
      <div className="slide-actions">
        {loaders.map((option) => (
          <button
            key={option.id}
            type="button"
            className="slide-button"
            onClick={() => setLoader(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="slide08-stage">
        {loader === 'skeleton' && (
          <div className="slide08-skeleton">
            <div />
            <div />
            <div />
          </div>
        )}
        {loader === 'shimmer' && <div className="slide08-shimmer" />}
        {loader === 'spinner' && <div className="slide08-spinner" />}
        {loader === 'progress' && (
          <div className="slide08-progress">
            <div className="slide08-progress-fill" />
          </div>
        )}
      </div>
    </section>
  )
}
