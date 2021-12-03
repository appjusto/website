import React from 'react'
import firebase from 'firebase/app';
import getFirebaseClient from '../../firebaseApp';
import * as fbq from '../utils/fpixel';

type VideoModalConfig = { isOpen: boolean, videoId?: string, title?: string };

type ConsentResponse = 'accept' | 'refuse';
interface PageContextProps {
  showSharingModal: boolean;
  setShowSharingModal(value: boolean): void;
  showAppsModal: boolean;
  setShowAppsModal(value: boolean): void;
  videoModalConfig: VideoModalConfig;
  setVideoModalConfig(config: VideoModalConfig): void;
  analytics?: firebase.analytics.Analytics;
  userConsent: undefined | boolean;
  handleUserConsent(response: ConsentResponse): void;
  storeLink: string;
};

const PageContext = React.createContext<PageContextProps>({} as PageContextProps);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const PageContextProvider = (props: Props) => {
  // state
  const [showSharingModal, setShowSharingModal] = React.useState(false);
  const [showAppsModal, setShowAppsModal] = React.useState(false);
  const [videoModalConfig, setVideoModalConfig] = React.useState<VideoModalConfig>({ isOpen: false });
  const [analytics, setAnalytics] = React.useState<firebase.analytics.Analytics>();
  const [userConsent, setUserConsent] = React.useState<boolean>();
  // handlers
  const handleUserConsent = React.useCallback((response: ConsentResponse) => {
    if(response === 'refuse') {
      localStorage.setItem('appjusto-consent', 'false');
      setUserConsent(false);
      return;
    }
    localStorage.setItem('appjusto-consent', 'true');
    setUserConsent(true);
  }, []);
  // helpers
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  const storeLink = env === 'live' ?
    'https://login.appjusto.com.br/consumer/store' : `https://${env}.login.appjusto.com.br/consumer/store`;
    // side effects
  React.useEffect(() => {
    (async () => {
      const { analytics } = await getFirebaseClient();
      analytics.setAnalyticsCollectionEnabled(false);
      setAnalytics(analytics);
    })();
  }, [])
  React.useEffect(() => {
    const consent = localStorage.getItem('appjusto-consent');
    if(consent === 'true') setUserConsent(true);
    else if(consent === 'false') setUserConsent(false);
  }, []);
  console.log('userConsent', userConsent);
  React.useEffect(() => {
    if(!analytics) return;
    if(!userConsent) return;
    analytics.setAnalyticsCollectionEnabled(true);
    fbq.grantConsent();
  }, [analytics, userConsent]);
  // provider
  return <PageContext.Provider value={{
    showSharingModal,
    setShowSharingModal,
    showAppsModal,
    setShowAppsModal,
    videoModalConfig,
    setVideoModalConfig,
    analytics,
    userConsent,
    handleUserConsent,
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
