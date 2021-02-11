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
import firebase from 'firebase';

interface PageContextProps {
  contextState: {
    firebase: firebase.app.App
    database: firebase.firestore.Firestore
    functions: firebase.functions.Functions
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
  functions: null,
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

  const { database, functions } = contextState
  const dbRegistrationsRef = useMemo(() =>
    database?.collection('registrations'), [database])
  const dbIndicationsRef = useMemo(() =>
    database?.collection('indications'), [database])
  const dbSummaryRef = useMemo(() =>
    database?.collection("summary").doc("data"), [database])

  useEffect(() => {
    const loadFirebase = async () => {
      const { firebase, db, functions } = await getFirebaseClient()
      return contextDispatch({type: "update_firebase", payload: {firebase, db, functions}})
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
      const response = await functions.httpsCallable('createRegistration')({profile, phone, city});
      if(!response.data.status) {
        if(response.data.message === 'CellIsNotNew') {
          handleMessage(contextDispatch, celIsNotNewMsg, "registration")
        } else {
          handleMessage(contextDispatch, serverErrorMsg, "registration")
        }
        return false
      }
      return true
    } catch (error) {
      handleMessage(contextDispatch, serverErrorMsg, "registration")
      return false
    }
  }

  const handleIndication = async (email: string) => {
    handleMessage(contextDispatch, "")
    try {
      const response = await functions.httpsCallable('createIndication')({email})
      if(!response.data.status) {
        if(response.data.message === 'EmailIsNotNew') {
          handleMessage(contextDispatch, emailIsNotNewMsg, "recommendation")
        } else {
          handleMessage(contextDispatch, serverErrorMsg, "recommendation")
        }
        return false
      }
      return true
    } catch (error) {
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
