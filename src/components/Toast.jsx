import { useEffect, useState } from 'react'
import './Toast.css'

function Toast({ message, duration = 2000 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (message) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), duration)
      return () => clearTimeout(timer)
    }
  }, [message, duration])

  if (!visible || !message) return null

  return (
    <div className="toast">
      {message}
    </div>
  )
}

export default Toast
