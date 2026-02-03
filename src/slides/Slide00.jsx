import './Slide00.css'

export default function Slide00() {
  return (
    <section className="slide-layout slide00">
      <div className="speaker-line">Bevegelse forklarer samspill.</div>
      <div className="slide-header">
        <h2 className="slide-title">Motion er ikke pynt</h2>
        <p className="slide-subtitle">
          Animasjon viser hvordan grensesnittet forstår handlingene dine, hva som
          nettopp skjedde, og hvor oppmerksomheten bør ligge.
        </p>
      </div>
      <ul className="slide-list">
        <li>Statisk skjerm viser struktur. Bevegelse viser oppførsel.</li>
        <li>Oppførsel er halve produktet — uten ord.</li>
        <li>Fra klikkbar prototype til motion: intensjon uten gjetting.</li>
        <li>Handling registrert, noe skjer, noe blir ferdig.</li>
        <li>Konsistent bevegelse gir klarhet og mer levende UI.</li>
      </ul>
    </section>
  )
}
