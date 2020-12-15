import React, { useReducer, useContext, useMemo, Dispatch } from 'react'
import { db } from '../../firebase'

import { pageContextReducer, Actions } from '../reducers/pageContextReducer'

interface PageContextProps {
  contextState: {
    showModalConfirmation: {show: boolean, type: string}
    showModalRecommendation: boolean
    registrationMsg: {status: boolean, form: string, message: string}
  }
  contextDispatch: Dispatch<Actions>
  dbRegistrationsRef: any
  dbIndicationsRef: any
  dbSummaryRef: any
}

const PageContext = React.createContext<PageContextProps>({} as PageContextProps)

const initialState = {
  showModalConfirmation: {show: false, type: ""},
  showModalRecommendation: false,
  registrationMsg: {status: false, form: "", message: ""}
}

export const PageContextProvider = (props) => {
  const [contextState, contextDispatch] = useReducer(pageContextReducer, initialState)
  const dbRegistrationsRef = useMemo(() => db.collection('registrations'), [])
  const dbIndicationsRef = useMemo(() => db.collection('indications'), [])
  const dbSummaryRef = useMemo(() => db.collection("summary").doc("data"), [])
  return <PageContext.Provider value={{
    contextState, 
    contextDispatch,
    dbRegistrationsRef,
    dbIndicationsRef,
    dbSummaryRef
  }} {...props}/>
}

export const usePageContext = () => {
  const context = useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}

export const handleMessage = (dispatch: Dispatch<Actions>, message: string, form: string = "") => {
  if(message !== "") {
    dispatch({ type: "update_message", payload: { form, message }})
    setTimeout(() => dispatch({ type: "update_message", payload: { message: "" }}), 5000)
  } else {
    dispatch({ type: "update_message", payload: { message: "" }})
  }
}

const findPhone = (dbRef: any, phone: string, profile: string) => {
  const query = dbRef
    .where('phone', '==', phone)
    .where('profile', '==', profile)
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

const findCity = (dbRef: any, city: string) => {
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
export const handleRegistration = async (
  dispatch: Dispatch<Actions>,
  dbRef: any,
  sumaryRef: any,
  profile: string, 
  phone: string, 
  city: string, 
  ) => {
  handleMessage(dispatch, "")
  try {
    const isNewPhone = await findPhone(dbRef, phone, profile)
    if(!isNewPhone) {
      handleMessage(dispatch, "O celular informado já foi cadastrado para o perfil selecionado. Você pode tentar com outro perfil.", "registration")
      return false
    }
    const batch = db.batch()
    const isNewCity = await findCity(dbRef, city)
    const oldSummary = (await sumaryRef.get()).data()
    const newCitiesValue = isNewCity ? oldSummary.cities + 1 : oldSummary.cities
    const newSummary = {
      ...oldSummary,
      cities: newCitiesValue, 
      [`${profile}`]: oldSummary[`${profile}`] + 1
    }
    const newDoc = {
      profile,
      phone, 
      city,
    }
    batch.set(dbRef.doc(), newDoc);
    batch.update(sumaryRef, newSummary)
    batch.commit()
    return true
  } catch (error) {
    handleMessage(dispatch, "Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes.", "registration")
    return false
  }
}

const findEmail = (dbRef: any, email: string) => {
  const query = dbRef
    .where('email', '==', email)
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

export const handleIndication = async (
  dispatch: Dispatch<Actions>,
  dbRef: any,
  email: string, 
  ) => {
  handleMessage(dispatch, "")
  try {
    const isNewEmail = await findEmail(dbRef, email)
    if(!isNewEmail) {
      handleMessage(dispatch, "O e-mail informado já foi recebido como indicação.", "recommendation")
      return false
    }
    const newDoc = { email }
    dbRef.add(newDoc)
    return true
  } catch (error) {
    handleMessage(dispatch, "Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes.", "recommendation")
    return false
  }
}