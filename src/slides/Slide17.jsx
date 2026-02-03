import { useEffect, useRef } from 'react'
import layer0 from '../assets/parallax/layer_0.png'
import layer1 from '../assets/parallax/layer_1.png'
import layer2 from '../assets/parallax/layer_2.png'
import layer3 from '../assets/parallax/layer_3.png'
import layer4 from '../assets/parallax/layer_4.png'
import layer5 from '../assets/parallax/layer_5.png'
import layer6 from '../assets/parallax/layer_6.png'
import './Slide17.scss'

export default function Slide17() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const container = parallaxRef.current
    if (!container) return undefined

    const SCROLL_SMOOTHING = 0.08
    const LAYER_SPEED_MULTIPLIER = 2
    const COVER_SPEED = 0.28
    const INITIAL_OFFSET = -20
    let frame = 0
    const layers = Array.from(
      container.querySelectorAll('.parallax__layer')
    )
    const cover = container.querySelector('.parallax__cover')
    let virtualScroll = 0
    let targetScroll = 0
    let rafId = 0
    let maxScroll = cover
      ? cover.offsetTop + cover.offsetHeight - container.clientHeight
      : container.clientHeight

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

    const update = () => {
      const scrollTop = virtualScroll
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.speed || 0) * LAYER_SPEED_MULTIPLIER
        const offset = -scrollTop * speed + INITIAL_OFFSET
        layer.style.setProperty('--offset', `${offset}px`)
      })
      if (cover) {
        cover.style.transform = `translateY(${-scrollTop * COVER_SPEED}px)`
      }
      frame = 0
    }

    const animate = () => {
      const delta = targetScroll - virtualScroll
      if (Math.abs(delta) > 0.5) {
        virtualScroll += delta * SCROLL_SMOOTHING
        update()
        rafId = window.requestAnimationFrame(animate)
      } else {
        virtualScroll = targetScroll
        update()
        rafId = 0
      }
    }

    const onWheel = (event) => {
      event.preventDefault()
      maxScroll = cover
        ? cover.offsetTop + cover.offsetHeight - container.clientHeight
        : container.clientHeight
      targetScroll = clamp(
        targetScroll + event.deltaY,
        0,
        Math.max(0, maxScroll)
      )
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate)
      }
    }

    update()
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      if (rafId) window.cancelAnimationFrame(rafId)
      container.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <section className="slide17">
      <div className="parallax" ref={parallaxRef}>
        <div className="parallax__layer parallax__layer__0" data-speed="0.04">
          <img src={layer0} alt="Parallax layer 0" />
        </div>
        <div className="parallax__layer parallax__layer__1" data-speed="0.05">
          <img src={layer1} alt="Parallax layer 1" />
        </div>
        <div className="parallax__layer parallax__layer__2" data-speed="0.06">
          <img src={layer2} alt="Parallax layer 2" />
        </div>
        <div className="parallax__layer parallax__layer__3" data-speed="0.08">
          <img src={layer3} alt="Parallax layer 3" />
        </div>
        <div className="parallax__layer parallax__layer__4" data-speed="0.1">
          <img src={layer4} alt="Parallax layer 4" />
        </div>
        <div className="parallax__layer parallax__layer__5" data-speed="0.12">
          <img src={layer5} alt="Parallax layer 5" />
        </div>
        <div className="parallax__layer parallax__layer__6" data-speed="0.14">
          <img src={layer6} alt="Parallax layer 6" />
        </div>
        <div className="parallax__cover">hallaisen</div>
      </div>
    </section>
  )
}
