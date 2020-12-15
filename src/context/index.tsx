import React, { useReducer, useContext, Dispatch } from 'react'
import { db } from '../../firebase'

import { pageContextReducer, Actions } from '../reducers/pageContextReducer'

interface PageContextProps {
  contextState: {
    showModalConfirmation: {show: boolean, type: string}
    showModalRecommendation: boolean
    registrationMsg: {status: boolean, form: string, message: string}
  }
  contextDispatch: Dispatch<Actions>
}

const PageContext = React.createContext<PageContextProps>({} as PageContextProps)

const initialState = {
  showModalConfirmation: {show: false, type: ""},
  showModalRecommendation: false,
  registrationMsg: {status: false, form: "", message: ""}
}

export const PageContextProvider = (props) => {
  const [contextState, contextDispatch] = useReducer(pageContextReducer, initialState)
  return <PageContext.Provider value={{contextState, contextDispatch}} {...props} />
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

const findPhone = (dbRef, phone: string, type: string) => {
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

const findCity = (dbRef, city: string) => {
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
  form: string,
  type: string, 
  phone: string, 
  city: string, 
  indicated_by: string
  ) => {
  handleMessage(dispatch, "")
  const dbRef = db.collection('registrations')
  const sumaryRef = db.collection("summary").doc("data")
  try {
    const isNewPhone = await findPhone(dbRef, phone, type)
    if(!isNewPhone) {
      handleMessage(dispatch, "O celular informado já foi cadastrado para o perfil selecionado. Você pode tentar com outro perfil.", form)
      return false
    }
    const batch = db.batch()
    const isNewCity = await findCity(dbRef, city)
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
    handleMessage(dispatch, "Desculpe. Não foi possível acessar o servidor. Tente novamente em alguns instantes.", form)
    return false
  }
}