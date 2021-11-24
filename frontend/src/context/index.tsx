import React from 'react'
import firebase from 'firebase/app';
import getFirebaseClient from '../../firebaseApp';
import { pageContextReducer, Actions } from '../reducers/pageContextReducer'

interface PageContextProps {
  contextState: {
    showModalConfirmation: {show: boolean, type: string};
  };
  contextDispatch: React.Dispatch<Actions>;
  analytics?: firebase.analytics.Analytics;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

const initialState = {
  showModalConfirmation: {show: false, type: ""},
};

export const PageContextProvider = (props) => {
  // state
  const [contextState, contextDispatch] = React.useReducer(
    pageContextReducer, initialState
  );
  const [analytics, setAnalytics] = React.useState<firebase.analytics.Analytics>();
  // side effects
  React.useEffect(() => {
    (async () => {
      const { analytics } = await getFirebaseClient();
      setAnalytics(analytics);
    })();
  }, [])
  // provider
  return <PageContext.Provider value={{ contextState, contextDispatch, analytics }} {...props}/>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}
