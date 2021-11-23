import React from 'react'
interface PageContextProps {
  showSharingModal: boolean;
  setShowSharingModal(value: boolean): void;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = (props) => {
  // state
  const [showSharingModal, setShowSharingModal] = React.useState(false);
  // provider
  return <PageContext.Provider value={{ showSharingModal, setShowSharingModal }} {...props}/>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}
