import React from 'react'
import firebase from 'firebase/app';
import getFirebaseClient from '../../firebaseApp';

type VideoModalConfig = { isOpen: boolean, videoId?: string, title?: string };
interface PageContextProps {
  showSharingModal: boolean;
  setShowSharingModal(value: boolean): void;
  showAppsModal: boolean;
  setShowAppsModal(value: boolean): void;
  videoModalConfig: VideoModalConfig;
  setVideoModalConfig(config: VideoModalConfig): void;
  analytics?: firebase.analytics.Analytics;
  storeLink: string;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = (props) => {
  // state
  const [showSharingModal, setShowSharingModal] = React.useState(false);
  const [showAppsModal, setShowAppsModal] = React.useState(false);
  const [videoModalConfig, setVideoModalConfig] = React.useState<VideoModalConfig>({ isOpen: false });
  const [analytics, setAnalytics] = React.useState<firebase.analytics.Analytics>();
  // helpers
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  const storeLink = env === 'live' ?
    'https://login.appjusto.com.br/consumer/store' : `https://${env}.login.appjusto.com.br/consumer/store`;
  // side effects
  React.useEffect(() => {
    (async () => {
      const { analytics } = await getFirebaseClient();
      setAnalytics(analytics);
    })();
  }, [])
  // provider
  return <PageContext.Provider value={{
    showSharingModal,
    setShowSharingModal,
    showAppsModal,
    setShowAppsModal,
    videoModalConfig,
    setVideoModalConfig,
    analytics,
    storeLink
  }} {...props}/>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)
  if(!context) {
    throw new Error("usePageConext must be used within the PageContextProvider");
  }
  return context
}
