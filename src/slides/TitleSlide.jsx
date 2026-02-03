import './TitleSlide.css'

export default function TitleSlide() {
  return (
    <section className="slide-layout title-slide">
      <div className="speaker-line">
      Secret text
      </div>
      <div className="title-block">
        <h1 className="title-text">UI Animation, Motion Design & Micro Interaction 101</h1>
        <p className="title-subtext">"Motion is communication."</p>
      </div>
      <p className="slide-subtitle">
        Et lynkurs i UI-animasjon og hvordan bevegelse kan løfte design, med
        interaktive demoer og eksempler.
      </p>
    </section>
  )
}
