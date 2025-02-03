// ScrollToTop.js
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location])

  return null // No UI, just handling scroll logic
}

export default ScrollToTop
