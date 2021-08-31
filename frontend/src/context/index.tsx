import {
  createContext,
  useEffect,
  useReducer,
  useContext,
  //useMemo,
  Dispatch
} from 'react'
import { pageContextReducer, Actions } from '../reducers/pageContextReducer'
import getFirebaseClient from '../../firebaseApp'
import firebase from 'firebase/app';

interface PageContextProps {
  contextState: {
    firebase: firebase.app.App;
    //database: firebase.firestore.Firestore;
    //storage: firebase.storage.Storage;
    functions: firebase.functions.Functions;
    showModalConfirmation: {show: boolean, type: string};
    showModalRecommendation: boolean;
    registrationMsg: {status: boolean, form: string, message: string};
  };
  contextDispatch: Dispatch<Actions>;
  //fleetsRef: firebase.firestore.CollectionReference;
  //businessRef: firebase.firestore.CollectionReference;
  //storageRef: firebase.storage.Reference;
  //handleRegistration: (profile: string, phone: string, city: string, email: string) => boolean
  //handleIndication: (email: string) => boolean
};

const PageContext = createContext<PageContextProps>({} as PageContextProps);

const initialState = {
  firebase: null,
  database: null,
  storage: null,
  functions: null,
  showModalConfirmation: {show: false, type: ""},
  showModalRecommendation: false,
  registrationMsg: {status: false, form: "", message: ""},
};

//const celIsNotNewMsg = "O celular informado já foi cadastrado para o perfil selecionado. Você pode tentar com outro perfil."
//const emailIsNotNewMsg = "O e-mail informado já havia sido indicado. Tente novamente com um novo e-mail."
//const serverErrorMsg = "Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes."

export const PageContextProvider = (props) => {
  const [contextState, contextDispatch] = useReducer(
    pageContextReducer, initialState
  )

  /*const { database, storage, functions } = contextState
  const dbRegistrationsRef = useMemo(() =>
    database?.collection('registrations'), [database])
  const dbIndicationsRef = useMemo(() =>
    database?.collection('indications'), [database])
  const dbSummaryRef = useMemo(() =>
    database?.collection("summary").doc("data"), [database])
  const fleetsRef = useMemo(() =>
    database?.collection('fleets'), [database]);
  const businessRef = useMemo(() =>
    database?.collection('businesses'), [database]);
  const storageRef = useMemo(() =>
    storage?.ref(), [storage]);*/

  useEffect(() => {
    const loadFirebase = async () => {
      const { firebase, functions } = await getFirebaseClient()
      return contextDispatch({
        type: "update_firebase", payload: {firebase, db: null, storage: null, functions}
      })
    }
    loadFirebase()
  }, [])

  /*const handleRegistration = async (
    profile: string,
    phone: string,
    city: string,
    email: string
    ) => {
    handleMessage(contextDispatch, "")
    try {
      const createdOn = firebase.firestore.FieldValue.serverTimestamp()
      await dbRegistrationsRef.add({
        city,
        phone,
        profile,
        email,
        createdOn
      })
      return true
    } catch (error) {
      handleMessage(contextDispatch, serverErrorMsg, "registration")
      return false
    }
  }*/

  /*const handleIndication = async (email: string) => {
    handleMessage(contextDispatch, "")
    try {
      const createdOn = firebase.firestore.FieldValue.serverTimestamp()
      await dbIndicationsRef.doc(email).set({createdOn})
      return true
    } catch (error) {
      if(error.toString().includes('Missing or insufficient permissions')) {
        handleMessage(contextDispatch, emailIsNotNewMsg, "recommendation")
        return false
      }
      handleMessage(contextDispatch, serverErrorMsg, "recommendation")
      return false
    }
  }*/
  return <PageContext.Provider value={{
    contextState,
    contextDispatch,
    //fleetsRef,
    //businessRef,
    //storageRef,
    //handleRegistration,
    //handleIndication,
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
