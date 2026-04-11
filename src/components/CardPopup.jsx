import { useEffect, useRef, useState } from 'react'
import './CardPopup.css'

function CardPopup({ cardRef, title, description, bgImage, fgImage, fgPosition }) {
  const popupRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0, side: 'right' })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!cardRef?.current) return

    const updatePosition = () => {
      const cardRect = cardRef.current.getBoundingClientRect()
      const popupWidth = 320
      const popupHeight = 200
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      const gap = 16
      let side = 'right'
      let x = cardRect.right + gap
      let y = cardRect.top + (cardRect.height / 2) - (popupHeight / 2)

      if (x + popupWidth > viewportWidth - 16) {
        side = 'left'
        x = cardRect.left - popupWidth - gap
      }

      if (y < 16) y = 16
      if (y + popupHeight > viewportHeight - 16) {
        y = viewportHeight - popupHeight - 16
      }

      if (x < 16) {
        x = cardRect.left + (cardRect.width / 2) - (popupWidth / 2)
        y = cardRect.bottom + gap
        side = 'bottom'
      }

      setPosition({ x, y, side })
      setVisible(true)
    }

    const timeout = setTimeout(updatePosition, 150)
    return () => clearTimeout(timeout)
  }, [cardRef])

  if (!visible) return null

  return (
    <div
      className={`card-popup card-popup-${position.side}`}
      ref={popupRef}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="card-popup-inner">
        <div className="card-popup-images">
          {bgImage && <div className="card-popup-bg" style={{ backgroundImage: `url(${bgImage})` }} />}
          {fgImage && <div className="card-popup-fg" style={{ backgroundImage: `url(${fgImage})`, backgroundPosition: fgPosition || 'center' }} />}
        </div>
        <div className="card-popup-content">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  )
}

export default CardPopup
