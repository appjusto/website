import React, { useEffect, useReducer, useContext, useMemo, Dispatch } from 'react'
import firebase from '../../firebaseApp'

import { pageContextReducer, Actions } from '../reducers/pageContextReducer'

import { findEmail, findPhone, findCity } from '../utils'

interface PageContextProps {
  contextState: {
    database: firebase.firestore.Firestore
    showModalConfirmation: {show: boolean, type: string}
    showModalRecommendation: boolean
    registrationMsg: {status: boolean, form: string, message: string}
  }
  dbSummaryRef: firebase.firestore.DocumentReference
  contextDispatch: Dispatch<Actions>
  handleRegistration: (profile: string, phone: string, city: string) => boolean
  handleIndication: (email: string) => boolean
}

const PageContext = React.createContext<PageContextProps>({} as PageContextProps)

const initialState = {
  database: null,
  showModalConfirmation: {show: false, type: ""},
  showModalRecommendation: false,
  registrationMsg: {status: false, form: "", message: ""},
}

export const PageContextProvider = (props) => {
  const [contextState, contextDispatch] = useReducer(pageContextReducer, initialState)

  const { database } = contextState
  const dbRegistrationsRef = useMemo(() =>
    database?.collection('registrations'), [database])
  const dbIndicationsRef = useMemo(() =>
    database?.collection('indications'), [database])
  const dbSummaryRef = useMemo(() =>
    database?.collection("summary").doc("data"), [database])

  useEffect(() => {
    import("firebase/firestore")
      .then(() => {
        const db = firebase.firestore();
        contextDispatch({type: "update_database", payload: db})
      })
      .catch((error) => {
        console.error("Unable to lazy-load firebase/firestore:", error);
      });
  }, [])

  const handleRegistration = async (
    profile: string,
    phone: string,
    city: string,
    ) => {
    handleMessage(contextDispatch, "")
    try {
      const isNewPhone = await findPhone(dbRegistrationsRef, phone, profile)
      if(!isNewPhone) {
        handleMessage(contextDispatch, "O celular informado já foi cadastrado para o perfil selecionado. Você pode tentar com outro perfil.", "registration")
        return false
      }
      const batch = contextState.database.batch()
      const isNewCity = await findCity(dbRegistrationsRef, city)
      const oldSummary = (await dbSummaryRef.get()).data()
      const newCitiesValue = isNewCity ? oldSummary.cities + 1 : oldSummary.cities
      const newSummary = {
        ...oldSummary,
        cities: newCitiesValue,
        [`${profile}`]: oldSummary[`${profile}`] + 1
      }
      const FieldValue = firebase.firestore.FieldValue
      batch.set(dbRegistrationsRef.doc(), {
        profile,
        phone,
        city,
        created_at: FieldValue.serverTimestamp()
      });
      batch.update(dbSummaryRef, newSummary)
      batch.commit()
      return true
    } catch (error) {
      handleMessage(contextDispatch, "Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes.", "registration")
      return false
    }
  }

  const handleIndication = async (email: string) => {
    const FieldValue = firebase.firestore.FieldValue
    handleMessage(contextDispatch, "")
    try {
      const isNewEmail = await findEmail(dbIndicationsRef, email)
      if(!isNewEmail) {
        handleMessage(contextDispatch, "O e-mail informado já havia sido indicado. Tente novamente com um novo e-mail.", "recommendation")
        return false
      }
      dbIndicationsRef.add({ email, created_at: FieldValue.serverTimestamp()})
      return true
    } catch (error) {
      handleMessage(contextDispatch, "Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes.", "recommendation")
      return false
    }
  }
  return <PageContext.Provider value={{
    contextState,
    dbSummaryRef,
    contextDispatch,
    handleRegistration,
    handleIndication,
  }} {...props}/>
}

export const usePageContext = () => {
  const context = useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}

export const handleMessage = (
  dispatch: Dispatch<Actions>, message: string, form: string = ""
  ) => {
  if(message !== "") {
    dispatch({ type: "update_message", payload: { form, message }})
    setTimeout(
      () => dispatch({ type: "update_message", payload: { message: "" }}),
      5000
    )
  } else {
    dispatch({ type: "update_message", payload: { message: "" }})
  }
}
