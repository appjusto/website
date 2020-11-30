import React from 'react'

interface PageContext {
  showModalConfirmation: {show: boolean, type: string}
  showModalRecommendation: boolean
  handleModalConfirmation: (type: string)  => void
  handleModalRecommendation: ()  => void
  handleSubscription: (
    type: string, 
    email: string, 
    city: string, 
    uf: string, 
    indicated_by: string 
  )  => void
}

export default React.createContext<PageContext>({} as PageContext)