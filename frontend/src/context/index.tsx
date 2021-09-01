import React from 'react'
import { pageContextReducer, Actions } from '../reducers/pageContextReducer'
import getFirebaseClient from '../../firebaseApp'
import firebase from 'firebase/app';

interface PageContextProps {
  contextState: {
    firebase: firebase.app.App;
    analytics: firebase.analytics.Analytics;
    showModalConfirmation: {show: boolean, type: string}
  };
  contextDispatch: React.Dispatch<Actions>;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

const initialState = {
  firebase: null,
  analytics: null,
  showModalConfirmation: {show: false, type: ""},
};

export const PageContextProvider = (props) => {
  const [contextState, contextDispatch] = React.useReducer(
    pageContextReducer, initialState
  )
  React.useEffect(() => {
    (async () => {
      const { firebase, analytics } = await getFirebaseClient()
      return contextDispatch({
        type: "update_firebase", payload: { firebase, analytics }
      })
    })();
  }, [])
  return <PageContext.Provider value={{ contextState, contextDispatch }} {...props}/>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}
