import './Slide01.css'

export default function Slide01() {
  return (
    <section className="slide-layout slide01">
      <div className="speaker-line">
        Intro: why motion matters.
      </div>
      <div className="slide-header">
        <h2 className="slide-title slide01-title">
          <span>Benefits:</span> Motion and Interactive Prototyping
        </h2>
        <p className="slide-subtitle">
          Et raskt overblikk over hvorfor motion og prototyping gjør design mer
          forståelig, minneverdig og overbevisende.
        </p>
      </div>
      <div className="slide01-grid">
        <div className="slide01-item">
          <h3>Communicate ideas</h3>
          <p>Devs and stakeholders</p>
        </div>
        <div className="slide01-item">
          <h3>Stand out</h3>
          <p>Personal and agency level</p>
        </div>
        <div className="slide01-item">
          <h3>Delight users</h3>
          <p>More memorable, interactive experiences</p>
        </div>
        <div className="slide01-item">
          <h3>Push design forward</h3>
          <p>Move beyond templated UI patterns</p>
        </div>
      </div>
    </section>
  )
}
