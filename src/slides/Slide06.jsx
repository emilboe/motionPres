import headspaceVideo from '../assets/headspace.mp4'
import './Slide06.css'

export default function Slide06() {
  return (
    <section className="slide-layout slide06">
      <div className="speaker-line">
        Emotional motion builds connection.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Emotional Motion Example</h2>
        <p className="slide-subtitle">
          En liten, varm animasjon kan gjøre opplevelsen mer menneskelig.
        </p>
      </div>
      <div className="slide06-video">
        <video
          src={headspaceVideo}
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>
    </section>
  )
}
