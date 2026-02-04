import './Slide08.css'

export default function Slide08() {
  return (
    <section className="slide-layout slide08">
      <div className="speaker-line">Timing og tempo.</div>
      <div className="slide-header">
        <h2 className="slide-title">Timing Basics</h2>
        <p className="slide-subtitle">
          Timing skal matche skala og intensjon.
        </p>
      </div>
      <div className="slide08-columns">
        <div className="slide08-block">
          <h3>Mikrointeraksjoner</h3>
          <p>
            Hover og tap bør ligge under ~300 ms, ellers føles det tregt. Dette
            handler om opplevd hastighet, ikke faktisk ytelse.
          </p>
        </div>
        <div className="slide08-block">
          <h3>Større bevegelser</h3>
          <p>
            Modaler, hele skjermoverganger og paneler trenger lengre tid. Hvis
            ikke føles de rykkete og harde.
          </p>
        </div>
      </div>
      <div className="slide08-loaders">
        <div className="slide08-loader slow" aria-hidden="true" />
        <div className="slide08-loader fast" aria-hidden="true" />
      </div>
    </section>
  )
}
