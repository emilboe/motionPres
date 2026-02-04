import { useEffect, useRef, useState } from 'react'
import './Slide04.css'

const ROW_HEIGHT = 100
const INITIAL_ITEMS = [
  { id: 1, label: 'Avocado' },
  { id: 2, label: 'Mango' },
  { id: 3, label: 'Pasjonsfrukt' },
  { id: 4, label: 'Kokos' }
]

export default function Slide04() {
  const [items, setItems] = useState(INITIAL_ITEMS)
  const [staticItems, setStaticItems] = useState(INITIAL_ITEMS)
  const [dragId, setDragId] = useState(null)
  const [dragY, setDragY] = useState(0)
  const [dragIndex, setDragIndex] = useState(null)
  const [hoverIndex, setHoverIndex] = useState(null)
  const [staticDragId, setStaticDragId] = useState(null)
  const [staticDragY, setStaticDragY] = useState(0)
  const [staticDropIndex, setStaticDropIndex] = useState(null)
  const staticItemsRef = useRef(staticItems)
  const listRef = useRef(null)
  const staticListRef = useRef(null)
  const dragOffsetRef = useRef(0)
  const staticDragOffsetRef = useRef(0)
  const listTopRef = useRef(0)
  const staticListTopRef = useRef(0)
  const dragYRef = useRef(0)
  const staticDragYRef = useRef(0)
  const staticRafRef = useRef(0)

  useEffect(() => {
    staticItemsRef.current = staticItems
  }, [staticItems])

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

  const moveItem = (from, to) => {
    setItems((current) => {
      const next = [...current]
      const [moved] = next.splice(from, 1)
      next.splice(to, 0, moved)
      return next
    })
  }

  const moveStaticItem = (from, to) => {
    setStaticItems((current) => {
      const next = [...current]
      const [moved] = next.splice(from, 1)
      next.splice(to, 0, moved)
      return next
    })
  }

  const scheduleStaticDragUpdate = () => {
    if (staticRafRef.current) return
    staticRafRef.current = window.requestAnimationFrame(() => {
      staticRafRef.current = 0
      setStaticDragY(staticDragYRef.current)
    })
  }

  return (
    <section className="slide-layout slide04">
      <div className="speaker-line">
        Funksjonell motion forbedrer brukbarheten.
      </div>
      <div className="slide-header">
        <h2 className="slide-title">Funksjonell Motion Eksempel</h2>
        <p className="slide-subtitle">
          Dra for å endre rekkefølge. Interaksjonen gir feedback og gjør det
          tydelig hva som skjer.
        </p>
      </div>
      <div className="slide04-container">
        <div className="slide04-list" ref={listRef}>
          {items.map((item, index) => {
            const isDragging = dragId === item.id
            let y = index * ROW_HEIGHT

            if (dragIndex !== null && hoverIndex !== null) {
              if (index === dragIndex) {
                y = dragY
              } else if (dragIndex < hoverIndex) {
                if (index > dragIndex && index <= hoverIndex) {
                  y = (index - 1) * ROW_HEIGHT
                }
              } else if (dragIndex > hoverIndex) {
                if (index >= hoverIndex && index < dragIndex) {
                  y = (index + 1) * ROW_HEIGHT
                }
              }
            }

            return (
              <div
                key={item.id}
                className={`slide04-item ${isDragging ? 'is-dragging' : ''}`}
                style={{ transform: `translateY(${y}px)` }}
                onPointerDown={(event) => {
                  event.currentTarget.setPointerCapture(event.pointerId)
                  const listTop =
                    listRef.current?.getBoundingClientRect().top ?? 0
                  const startY = event.clientY - listTop
                  setDragId(item.id)
                  setDragIndex(index)
                  setHoverIndex(index)
                  listTopRef.current = listTop
                  dragOffsetRef.current = startY - index * ROW_HEIGHT
                  dragYRef.current = index * ROW_HEIGHT
                  setDragY(index * ROW_HEIGHT)
                }}
                onPointerMove={(event) => {
                  if (dragId !== item.id) return
                  const rawY =
                    event.clientY -
                    listTopRef.current -
                    dragOffsetRef.current
                  const maxY = (items.length - 1) * ROW_HEIGHT
                  const yPos = clamp(rawY, 0, maxY)
                  dragYRef.current = yPos
                  setDragY(yPos)
                  const newIndex = clamp(
                    Math.floor((yPos + ROW_HEIGHT / 2) / ROW_HEIGHT),
                    0,
                    items.length - 1
                  )
                  setHoverIndex(newIndex)
                }}
                onPointerUp={() => {
                  if (
                    dragIndex !== null &&
                    hoverIndex !== null &&
                    dragIndex !== hoverIndex
                  ) {
                    moveItem(dragIndex, hoverIndex)
                  }
                  setDragId(null)
                  setDragIndex(null)
                  setHoverIndex(null)
                  setDragY((value) => value)
                }}
                onPointerCancel={() => setDragId(null)}
              >
                <div className="slide04-item-content">
                  <span className="slide04-order">{index + 1}</span>
                  <span className="slide04-label">{item.label}</span>
                  <span className="slide04-grip" aria-hidden="true">
                    ⋮⋮
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="slide04-static">
          <div className="slide04-list slide04-list--static" ref={staticListRef}>
            {staticItems.map((item, index) => {
              const isDragging = staticDragId === item.id
              const y = isDragging ? staticDragY : index * ROW_HEIGHT

              return (
                <div
                  key={item.id}
                  className={`slide04-item slide04-item--static ${
                    isDragging ? 'is-dragging' : ''
                  }`}
                  style={{ transform: `translateY(${y}px)` }}
                  onPointerDown={(event) => {
                    event.currentTarget.setPointerCapture(event.pointerId)
                    const listTop =
                      staticListRef.current?.getBoundingClientRect().top ?? 0
                    const startY = event.clientY - listTop
                    setStaticDragId(item.id)
                    staticListTopRef.current = listTop
                    staticDragOffsetRef.current = startY - index * ROW_HEIGHT
                    staticDragYRef.current = index * ROW_HEIGHT
                    setStaticDragY(index * ROW_HEIGHT)
                  setStaticDropIndex(index)
                  }}
                  onPointerMove={(event) => {
                    if (staticDragId !== item.id) return
                    const yPos =
                      event.clientY -
                      staticListTopRef.current -
                      staticDragOffsetRef.current
                    staticDragYRef.current = yPos
                    scheduleStaticDragUpdate()
                    const newIndex = clamp(
                      Math.round(yPos / ROW_HEIGHT),
                      0,
                    staticItemsRef.current.length - 1
                    )
                  setStaticDropIndex(newIndex)
                  }}
                  onPointerUp={() => {
                  const currentItems = staticItemsRef.current
                  const fromIndex = currentItems.findIndex(
                    (entry) => entry.id === item.id
                  )
                  const toIndex =
                    staticDropIndex ?? currentItems.length - 1
                  if (fromIndex !== -1 && toIndex !== fromIndex) {
                    moveStaticItem(fromIndex, toIndex)
                  }
                  setStaticDragId(null)
                  setStaticDropIndex(null)
                  setStaticDragY((value) => value)
                  }}
                  onPointerCancel={() => setStaticDragId(null)}
                >
                  <div className="slide04-item-content is-static">
                    <span className="slide04-order">{index + 1}</span>
                    <span className="slide04-label">{item.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
