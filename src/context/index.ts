import React from 'react'

interface PageContext {
  showModalConfirmation: boolean
  showModalRecommendation: boolean
  handleModals: (modal: string)  => void
}

export default React.createContext<PageContext>({} as PageContext)