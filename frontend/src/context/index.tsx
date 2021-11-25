import React from 'react'
import firebase from 'firebase/app';
import getFirebaseClient from '../../firebaseApp';
interface PageContextProps {
  showSharingModal: boolean;
  setShowSharingModal(value: boolean): void;
  showAppsModal: boolean;
  setShowAppsModal(value: boolean): void;
  analytics?: firebase.analytics.Analytics;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = (props) => {
  // state
  const [showSharingModal, setShowSharingModal] = React.useState(false);
  const [showAppsModal, setShowAppsModal] = React.useState(false);
  const [analytics, setAnalytics] = React.useState<firebase.analytics.Analytics>();
  // side effects
  React.useEffect(() => {
    (async () => {
      const { analytics } = await getFirebaseClient();
      setAnalytics(analytics);
    })();
  }, [])
  // provider
  return <PageContext.Provider value={{
    showSharingModal, setShowSharingModal, showAppsModal, setShowAppsModal, analytics
  }} {...props}/>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}
