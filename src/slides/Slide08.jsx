import './Slide08.css'

export default function Slide08() {
  return (
    <section className="slide-layout slide08">
      <div className="speaker-line">Timing basics.</div>
      <div className="slide-header">
        <h2 className="slide-title">Timing Basics</h2>
        <p className="slide-subtitle">
          Varighet påvirker hvor raskt eller dramatisk en interaksjon føles.
        </p>
      </div>
      <div className="slide08-columns">
        <div className="slide08-block">
          <h3>Short durations</h3>
          <p>
            Think micro interactions like hover &amp; click states. Rule of
            thumb, limit these types of interactions to 300ms max or else
            perceived performance may suffer.
          </p>
        </div>
        <div className="slide08-block">
          <h3>Long durations</h3>
          <p>
            Typically used to create drama, or impact. Think screen-to-screen
            transitions, or elements traversing large parts of a screen.
          </p>
        </div>
      </div>
    </section>
  )
}
