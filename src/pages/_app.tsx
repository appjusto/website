import { useState, useCallback } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import PageContex from '../context/'

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [showModalConfirmation, setShowModalConfirmation] = useState(false)
  const [showModalRecommendation, setShowModalRecommendation] = useState(false)
  const handleModals = (modal: string) => {
    if(modal === "confirmation") {
      console.log("chamou")
      return setShowModalConfirmation(!showModalConfirmation)
    } else {
      return setShowModalRecommendation(!showModalRecommendation)
    }
  }
  console.log(showModalConfirmation)
  return (
    <PageContex.Provider value={{
      showModalConfirmation,
      showModalRecommendation,
      handleModals
    }}>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
    </PageContex.Provider>
  )
}

export default MyApp
