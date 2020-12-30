import {
  createContext,
  useEffect,
  useReducer,
  useContext,
  useMemo,
  Dispatch
} from 'react'
import { pageContextReducer, Actions } from '../reducers/pageContextReducer'
import getFirebaseClient from '../../firebaseApp'
import { findEmail, findPhone, findCity } from '../utils'

import { setFirestoreTimeout} from '../utils'
interface PageContextProps {
  contextState: {
    firebase: any
    database: any //firebase.firestore.Firestore
    showModalConfirmation: {show: boolean, type: string}
    showModalRecommendation: boolean
    registrationMsg: {status: boolean, form: string, message: string}
  }
  dbSummaryRef: any //firebase.firestore.DocumentReference
  contextDispatch: Dispatch<Actions>
  handleRegistration: (profile: string, phone: string, city: string) => boolean
  handleIndication: (email: string) => boolean
}

const PageContext = createContext<PageContextProps>({} as PageContextProps)

const initialState = {
  firebase: null,
  database: null,
  showModalConfirmation: {show: false, type: ""},
  showModalRecommendation: false,
  registrationMsg: {status: false, form: "", message: ""},
}

const celIsNotNewMsg = "O celular informado já foi cadastrado para o perfil selecionado. Você pode tentar com outro perfil."
const emailIsNotNewMsg = "O e-mail informado já havia sido indicado. Tente novamente com um novo e-mail."
const serverErrorMsg = "Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes."

export const PageContextProvider = (props) => {
  const [contextState, contextDispatch] = useReducer(
    pageContextReducer, initialState
  )

  const { database } = contextState
  const dbRegistrationsRef = useMemo(() =>
    database?.collection('registrations'), [database])
  const dbIndicationsRef = useMemo(() =>
    database?.collection('indications'), [database])
  const dbSummaryRef = useMemo(() =>
    database?.collection("summary").doc("data"), [database])

  useEffect(() => {
    const loadFirebase = async () => {
      const { firebase, db } = await getFirebaseClient()
      return contextDispatch({type: "update_firebase", payload: {firebase, db}})
    }
    loadFirebase()
  }, [])

  const handleRegistration = async (
    profile: string,
    phone: string,
    city: string,
    ) => {
    handleMessage(contextDispatch, "")
    try {
      const checkPhone = await findPhone(dbRegistrationsRef, phone, profile)
      if(checkPhone === "found") {
        handleMessage(contextDispatch, celIsNotNewMsg, "registration")
        return false
      }
      if(checkPhone === "error") {
        throw new Error("connection error");
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
      const FieldValue = contextState.firebase.firestore.FieldValue
      batch.set(dbRegistrationsRef.doc(), {
        profile,
        phone,
        city,
        created_at: FieldValue.serverTimestamp()
      });
      batch.update(dbSummaryRef, newSummary)
      const connectionStatus = await batch.commit()
        .then(() => {
          return true
        })
        .catch((error) => {
          console.log("batch.update error", error)
          return false
        })
      if(connectionStatus) {
        return true
      } else {
        return false
      }
    } catch (error) {
      handleMessage(contextDispatch, serverErrorMsg, "registration")
      return false
    }
  }

  const handleIndication = async (email: string) => {
    const FieldValue = contextState.firebase.firestore.FieldValue
    handleMessage(contextDispatch, "")
    try {
      const checkEmail = await findEmail(dbIndicationsRef, email)
      if(checkEmail === "found") {
        handleMessage(contextDispatch, emailIsNotNewMsg, "recommendation")
        return false
      }
      if(checkEmail === "error") {
        throw new Error("connection error");
      }
      const connectionStatus = await dbIndicationsRef.add(
        { email, created_at: FieldValue.serverTimestamp()}
      )
        .then(() => {
          return true
        })
        .catch((error) => {
          console.log("connection error", error)
          return false
        })
      if(connectionStatus) {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      handleMessage(contextDispatch, serverErrorMsg, "recommendation")
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
