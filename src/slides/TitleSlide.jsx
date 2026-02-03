import './TitleSlide.css'

export default function TitleSlide() {
  return (
    <section className="slide-layout title-slide">
      <div className="speaker-line">
        UI animation, motion, and interaction design
      </div>
      <div className="title-block">
        <h1 className="title-text">UI Animation Motion Design</h1>
        <p className="title-subtext">Interaction Design</p>
      </div>
      <p className="slide-subtitle">
        Et lynkurs i UI-animasjon og hvordan motion kan løfte design, med
        interaktive demoer underveis.
      </p>
    </section>
  )
}
