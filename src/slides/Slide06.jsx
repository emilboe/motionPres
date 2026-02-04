import headspaceGif from '../assets/headspace.gif'
import errorGif from '../assets/error.gif'
import motionOnboardingGif from '../assets/motion onboarding.gif'
import './Slide06.css'

export default function Slide06() {
  return (
    <section className="slide-layout slide06">
      <div className="speaker-line">
        Emotional motion builds connection.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Emosjonell Motion Eksempel</h2>
        <p className="slide-subtitle">
          En liten, varm animasjon kan gjøre opplevelsen mer menneskelig.
        </p>
      </div>
      <div className="slide06-media">
        <div className="slide06-item">
          <img src={headspaceGif} alt="Headspace animation" />
          <div className="slide06-source">Headspace</div>
        </div>
        <div className="slide06-item">
          <img src={errorGif} alt="Error animation" />
          <div className="slide06-source">Andrei Mironov</div>
        </div>
        <div className="slide06-item">
          <img src={motionOnboardingGif} alt="Motion onboarding animation" />
          <div className="slide06-source">Johny Vino</div>
        </div>
      </div>
    </section>
  )
}
