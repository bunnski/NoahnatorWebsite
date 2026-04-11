import { useState, useEffect, useRef, useCallback } from 'react'
import './BannerCarousel.css'

const isVideo = (src) => /\.(mp4|webm|ogg)$/i.test(src)

function BannerCarousel({ banners, interval = 5000 }) {
  const [current, setCurrent] = useState(0)
  const [locked, setLocked] = useState(false)
  const timerRef = useRef(null)

  const total = banners?.length ?? 0

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (interval > 0 && total > 1 && !locked) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))
      }, interval)
    }
  }, [interval, total, locked])

  const toggleLock = useCallback(() => {
    setLocked((prev) => !prev)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const goTo = useCallback((index) => {
    setCurrent(index)
    resetTimer()
  }, [resetTimer])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const prev = () => goTo(current === 0 ? total - 1 : current - 1)
  const next = () => goTo(current === total - 1 ? 0 : current + 1)

  if (!banners || total === 0) return null

  return (
    <div className="banner-carousel">
      <div className="banner-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {banners.map((banner, i) => (
          <div key={i} className="banner-slide">
            {banner.image ? (
              isVideo(banner.image) ? (
                <video src={banner.image} autoPlay muted loop playsInline width={banner.width} height={banner.height} style={banner.style} />
              ) : (
                <img src={banner.image} alt={banner.alt || `Banner ${i + 1}`} width={banner.width} height={banner.height} style={banner.style} />
              )
            ) : (
              <div className="banner-placeholder">{banner.label || `Banner ${i + 1}`}</div>
            )}
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button className="banner-nav banner-prev" onClick={prev} aria-label="Previous banner">
            &#8249;
          </button>
          <button className="banner-nav banner-next" onClick={next} aria-label="Next banner">
            &#8250;
          </button>
          <div className="banner-dots">
            {banners.map((_, i) => (
              <button
                key={i}
                className={`banner-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to banner ${i + 1}`}
              />
            ))}
          </div>
          <button
            className={`banner-lock ${locked ? 'locked' : ''}`}
            onClick={toggleLock}
            aria-label={locked ? 'Unlock auto-advance' : 'Lock auto-advance'}
          >
            {locked ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
              </svg>
            )}
          </button>
        </>
      )}
    </div>
  )
}

export default BannerCarousel
