import React from 'react'

interface PageContext {
  showModalConfirmation: {show: boolean, type: string}
  showModalRecommendation: boolean
  showModalSharing: boolean
  registrationMsg: {status: boolean, message: string}
  setRegistrationMsg: ({status: boolean, message: string}) => void
  handleModalConfirmation: (type: string)  => void
  handleModalRecommendation: ()  => void
  handleModalSharing: ()  => void
  handleRegistration: (
    type: string, 
    email: string, 
    city: string, 
    uf: string, 
    indicated_by: string 
  )  => Promise<boolean>
}

export default React.createContext<PageContext>({} as PageContext)