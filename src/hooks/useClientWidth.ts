import { useState, SetStateAction, useEffect } from 'react';

import { getCorrectDimension } from '../utils'

const useClientWidth = () => {
  const [width, setWidth] = useState(0)
  async function getWidth() {
    const width = await getCorrectDimension("width")
    setWidth(width as SetStateAction<number>)
  }
  useEffect(() => {
    getWidth()
  }, [])
  useEffect(() => {
    window.addEventListener('resize', getWidth)
    return () => window.removeEventListener('resize', getWidth)
  }, [])
  return width;
}

export default useClientWidth;
