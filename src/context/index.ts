import React from 'react'

interface PageContext {
  showModalConfirmation: {show: boolean, type: string}
  showModalRecommendation: boolean
  handleModalConfirmation: (type: string)  => void
  handleModalRecommendation: ()  => void
}

export default React.createContext<PageContext>({} as PageContext)