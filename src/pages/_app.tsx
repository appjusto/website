import { useState, useCallback } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import PageContex from '../context/'

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [showModalConfirmation, setShowModalConfirmation] = useState({
    show: false, type: "subscribe"
  })
  const [showModalRecommendation, setShowModalRecommendation] = useState(false)

  const handleModalConfirmation = (type: string) => {
    return setShowModalConfirmation({
      show: !showModalConfirmation.show, type
    })
  }

  const handleModalRecommendation = () => {
    return setShowModalRecommendation(!showModalRecommendation)
  }
  
  return (
    <PageContex.Provider value={{
      showModalConfirmation,
      showModalRecommendation,
      handleModalConfirmation,
      handleModalRecommendation
    }}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </PageContex.Provider>
  )
}

export default MyApp
