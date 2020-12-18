import React, { useEffect, useRef, useReducer, useContext, useMemo, Dispatch } from 'react'
import firebase from '../../firebaseApp'

import { pageContextReducer, Actions } from '../reducers/pageContextReducer'

import { findEmail, findPhone, findCity } from '../utils'

interface PageContextProps {
  contextState: {
    database: firebase.firestore.Firestore
    showModalConfirmation: {show: boolean, type: string}
    showModalRecommendation: boolean
    registrationMsg: {status: boolean, form: string, message: string}
    showCookiesBar: boolean
  }
  dbSummaryRef: firebase.firestore.DocumentReference
  contextDispatch: Dispatch<Actions>
  handleRegistration: (profile: string, phone: string, city: string) => boolean
  handleIndication: (email: string) => boolean
  safeAnalytics: (event: string, params?: object) => void
}

const PageContext = React.createContext<PageContextProps>({} as PageContextProps)

const initialState = {
  database: null,
  showModalConfirmation: {show: false, type: ""},
  showModalRecommendation: false,
  registrationMsg: {status: false, form: "", message: ""},
  showCookiesBar: false
}

type consentProps = { date: number, policyVersion: string, consentStatus: boolean }

export const PageContextProvider = (props) => {
  const [contextState, contextDispatch] = useReducer(pageContextReducer, initialState)

  const { database } = contextState
  const dbRegistrationsRef = database?.collection('registrations')
  const dbIndicationsRef = database?.collection('indications')
  const dbSummaryRef = database?.collection("summary").doc("data")
  const analyticsRef = useRef(null)

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

  useEffect(() => {
    import("firebase/analytics")
      .then(() => {
        analyticsRef.current = firebase.analytics()
      })
      .catch((error) => {
        console.error("Unable to lazy-load firebase/analytics:", error);
      })
  }, [])

  useEffect(() => {
    const appjusto_policy = localStorage.getItem("appjusto_policy_consent")
    const consent = JSON.parse(appjusto_policy) as consentProps
    if (consent?.policyVersion !== "0") {
      contextDispatch({type: "handle_cookiesBar", payload: { consent: false }})
    }
  }, [])

  const safeAnalytics = (event: string, params?: {}) => {
    if(analyticsRef.current) {
      analyticsRef.current.logEvent(event, params)
    }
  }

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
      safeAnalytics("registration")
      return true
    } catch (error) {
      safeAnalytics("registration_error", {error})
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
      safeAnalytics("indication_email")
      return true
    } catch (error) {
      safeAnalytics("indication_error", {error})
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
    safeAnalytics
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
