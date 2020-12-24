import { useState, useEffect } from 'react';

const useClientWidth = () => {
  const [width, setWidth] = useState(0)
  const updateState = () => {
    if (typeof window !== 'undefined') {
      let w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
      if(width !== w) {
        setWidth(w)
      }
    }
  }
  useEffect(() => {
    updateState()
    window.addEventListener('resize', updateState)
    return () => window.removeEventListener('resize', updateState)
  }, [])
  console.log(width)
  return width;
}

export default useClientWidth;
