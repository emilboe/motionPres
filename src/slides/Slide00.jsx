import starGif from '../assets/star animation.gif'
import uploadGif from '../assets/upload animation.gif'
import attachmentGif from '../assets/attachment animation.gif'
import './Slide00.css'

export default function Slide00() {
  return (
    <section className="slide-layout slide00">
      <div className="speaker-line">Bevegelse forklarer samspill.</div>
      <div className="slide-header">
        <h2 className="slide-title">Mer enn pynt</h2>
        <p className="slide-subtitle">
          Animasjon viser hvordan grensesnittet forstår handlingene dine, hva som
          nettopp skjedde, og hvor oppmerksomheten bør ligge.
        </p>
      </div>
      <div className="slide00-gifs">
        <img src={starGif} alt="Star animation" className="slide00-gif" />
        <img src={uploadGif} alt="Upload animation" className="slide00-gif" />
        <img
          src={attachmentGif}
          alt="Attachment animation"
          className="slide00-gif"
        />
      </div>
      <ul className="slide-list">
        <li>Statisk skjerm viser struktur. Bevegelse viser oppførsel.</li>
        <li>Motion design gjør intensjon tydeligere og UI mer levende.</li>
      </ul>
    </section>
  )
}
