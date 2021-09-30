import React from 'react'
import { pageContextReducer, Actions } from '../reducers/pageContextReducer'

interface PageContextProps {
  contextState: {
    showModalConfirmation: {show: boolean, type: string};
  };
  contextDispatch: React.Dispatch<Actions>;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

const initialState = {
  showModalConfirmation: {show: false, type: ""},
};

export const PageContextProvider = (props) => {
  // state
  const [contextState, contextDispatch] = React.useReducer(
    pageContextReducer, initialState
  )
  // provider
  return <PageContext.Provider value={{ contextState, contextDispatch }} {...props}/>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}
