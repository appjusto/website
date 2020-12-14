import React, { useState, useMemo, useContext } from 'react'
import { db } from '../../firebase'

interface PageContextProps {
  showModalConfirmation: {show: boolean, type: string}
  showModalRecommendation: boolean
  showModalSharing: boolean
  registrationMsg: {status: boolean, message: string}
  handleMessage: (message: string) => void
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
const PageContext = React.createContext<PageContextProps>({} as PageContextProps)

export const PageContextProvider = (props) => {
  const [showModalConfirmation, setShowModalConfirmation] = useState({
    show: false, type: ""
  })
  const [showModalRecommendation, setShowModalRecommendation] = useState(false)
  const [showModalSharing, setShowModalSharing] = useState(false)
  const [registrationMsg, setRegistrationMsg] = useState({status: false, message: ""})
  const dbRef = useMemo(() => db.collection('registrations'),[])
  const sumaryRef = useMemo(() => db.collection("summary").doc("data"), [])
  const handleModalConfirmation = (type: string) => {
    return setShowModalConfirmation({
      show: !showModalConfirmation.show, type
    })
  }

  const handleModalRecommendation = () => {
    return setShowModalRecommendation(!showModalRecommendation)
  }

  const handleModalSharing = () => {
    return setShowModalSharing(!showModalSharing)
  }

  const handleMessage = (message: string) => {
    if(message !== "") {
      setRegistrationMsg({ status: true, message })
      setTimeout(() => setRegistrationMsg({status: false, message: ""}), 5000)
    } else {
      setRegistrationMsg({ status: false, message: "" })
    }
  }

  const findPhone = (phone: string, type: string) => {
    const query = dbRef
      .where('phone', '==', phone)
      .where('type', '==', type)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return true;
        } else {
          return false
        }
      })
      .catch(err => {
        console.log('Error getting documents', err)
        return false;
      });
      return query
  }

  const findCity = (city: string) => {
    const query = dbRef.where('city', '==', city).get()
      .then(snapshot => {
        if (snapshot.empty) {
          return true;
        } else {
          return false
        }
      })
      .catch(err => {
        console.log('Error getting documents', err)
        return false;
      });
      return query
  }
  const handleRegistration = async (
    type: string, 
    phone: string, 
    city: string, 
    indicated_by: string
    ) => {
    handleMessage("")
    try {
      const isNewPhone = await findPhone(phone, type)
      if(!isNewPhone) {
        handleMessage("O celular informado já foi cadastrado para o perfil selecionado. Você pode tentar com outro perfil.")
        return false
      }
      const batch = db.batch()
      const isNewCity = await findCity(city)
      const oldSummary = (await sumaryRef.get()).data()
      const newCitiesValue = isNewCity ? oldSummary.cities + 1 : oldSummary.cities
      const newSummary = {
        ...oldSummary,
        cities: newCitiesValue, 
        [`${type}`]: oldSummary[`${type}`] + 1
      }
      const newDoc = {
        type,
        phone, 
        city,
        indicated_by
      }
      batch.set(dbRef.doc(), newDoc);
      batch.update(sumaryRef, newSummary)
      batch.commit()
      return true
    } catch (error) {
      handleMessage("Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes.")
      return false
    }
  }
  const context = {
    showModalConfirmation,
    showModalRecommendation,
    showModalSharing,
    registrationMsg,
    handleMessage,
    handleModalConfirmation,
    handleModalRecommendation,
    handleModalSharing,
    handleRegistration
  }
  return <PageContext.Provider value={context} {...props} />
}

export const usePageContext = () => {
  const context = useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}