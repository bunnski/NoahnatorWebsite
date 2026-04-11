import { useRef, useState } from 'react'
import CardPopup from './CardPopup'
import './TiltCard.css'

function TiltCard({ title, description, bgImage, fgImage, fgPosition, url }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('perspective(800px) rotateY(0deg) scale(1)')
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const centerX = rect.width / 2
    const rotateY = ((x - centerX) / centerX) * 5
    setTransform(`perspective(800px) rotateY(${rotateY}deg) scale(1.05)`)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateY(0deg) scale(1)')
    setIsHovered(false)
  }

  const handleClick = () => {
    if (url) {
      if (url.startsWith('http')) {
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = url
      }
    }
  }

  return (
    <>
      <div
        className={`tilt-card ${url ? 'tilt-card-clickable' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className="tilt-card-inner"
          ref={cardRef}
          style={{ transform, transition: 'transform 0.15s ease-out' }}
        >
          {bgImage && <div className="tilt-card-bg" style={{ backgroundImage: `url(${bgImage})` }} />}
          {fgImage && <div className="tilt-card-fg" style={{ backgroundImage: `url(${fgImage})`, backgroundPosition: fgPosition || 'center' }} />}
        </div>
      </div>
      {isHovered && title && (
        <CardPopup
          cardRef={cardRef}
          title={title}
          description={description}
          bgImage={bgImage}
          fgImage={fgImage}
          fgPosition={fgPosition}
        />
      )}
    </>
  )
}

export default TiltCard
