import { useState, useCallback } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import PageContex from '../context/'

import theme from '../styles/theme';

  import { db } from '../../firebase'

function MyApp({ Component, pageProps }) {
  const [showModalConfirmation, setShowModalConfirmation] = useState({
    show: false, type: ""
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

  const handleSubscription = async (
    type: string, 
    email: string, 
    city: string, 
    uf: string, 
    indicated_by: string
    ) => {
    const batch = db.batch()
    const dbRef = db.collection(`${type}`).doc() 
    const sumaryRef = db.collection("summary").doc("data")
    const oldSummary = (await sumaryRef.get()).data()
    const newSummary = {
      ...oldSummary,
      [`${type}`]: oldSummary[`${type}`] + 1
    }
    const newDoc = {
      email, 
      city: `${city}-${uf}`, 
      uf, 
      indicated_by
    }
    batch.set(dbRef, newDoc);
    batch.update(sumaryRef, newSummary)
    return batch.commit()
  }

  return (
    <PageContex.Provider value={{
      showModalConfirmation,
      showModalRecommendation,
      handleModalConfirmation,
      handleModalRecommendation,
      handleSubscription
    }}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </PageContex.Provider>
  )
}

export default MyApp
