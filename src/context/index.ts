import React, { Dispatch, SetStateAction } from 'react'

interface PageContext {
  showModalConfirmation: {show: boolean, type: string}
  showModalRecommendation: boolean
  showModalSharing: boolean
  registrationMsg: {status: boolean, message: string}
  googlePlacesScript: boolean
  setGooglePlacesScript: Dispatch<SetStateAction<boolean>> 
  setRegistrationMsg: ({status: boolean, message: string}) => void
  handleModalConfirmation: (type: string)  => void
  handleModalRecommendation: ()  => void
  handleModalSharing: ()  => void
  handleRegistration: (
    type: string, 
    phone: string, 
    city: string, 
    indicated_by: string 
  )  => Promise<boolean>
}

export default React.createContext<PageContext>({} as PageContext)