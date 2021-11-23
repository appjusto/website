import React from 'react'
interface PageContextProps {
  showSharingModal: boolean;
  setShowSharingModal(value: boolean): void;
  showAppsModal: boolean;
  setShowAppsModal(value: boolean): void;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = (props) => {
  // state
  const [showSharingModal, setShowSharingModal] = React.useState(false);
  const [showAppsModal, setShowAppsModal] = React.useState(false);
  // provider
  return <PageContext.Provider value={{ showSharingModal, setShowSharingModal, showAppsModal, setShowAppsModal }} {...props}/>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}
