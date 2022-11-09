import React from "react";
import { Analytics } from "firebase/app/dist/analytics";
import getFirebaseClient from "../../firebaseApp";
import * as fbq from "../utils/fpixel";

type VideoModalConfig = { isOpen: boolean; videoId?: string; title?: string };

type ConsentResponse = "accepted" | "refused" | "pending";
interface PageContextProps {
  showSharingModal: boolean;
  setShowSharingModal(value: boolean): void;
  showAppsModal: boolean;
  setShowAppsModal(value: boolean): void;
  videoModalConfig: VideoModalConfig;
  setVideoModalConfig(config: VideoModalConfig): void;
  analytics?: Analytics;
  userConsent?: ConsentResponse;
  handleUserConsent(response: ConsentResponse): void;
  storeLink: string;
  kriaLink: string;
}

const PageContext = React.createContext<PageContextProps>(
  {} as PageContextProps
);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const PageContextProvider = (props: Props) => {
  // state
  const [showSharingModal, setShowSharingModal] = React.useState(false);
  const [showAppsModal, setShowAppsModal] = React.useState(false);
  const [videoModalConfig, setVideoModalConfig] =
    React.useState<VideoModalConfig>({ isOpen: false });
  const [analytics, setAnalytics] = React.useState<Analytics>();
  const [userConsent, setUserConsent] = React.useState<ConsentResponse>();
  // handlers
  const handleUserConsent = React.useCallback((response: ConsentResponse) => {
    localStorage.setItem("appjusto-consent", response);
    setUserConsent(response);
  }, []);
  // helpers
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  const storeLink =
    env === "live"
      ? "https://login.appjusto.com.br/consumer/store"
      : `https://${env}.login.appjusto.com.br/consumer/store`;
  const kriaLink =
    "https://app.kria.vc/agents/users/offers/277?locale=pt-BR&utm_source=appjusto&utm_medium=landing&utm_campaign=crowd";
  // side effects
  React.useEffect(() => {
    const consent = localStorage.getItem("appjusto-consent");
    if (consent === "true" || consent === "accepted")
      setUserConsent("accepted");
    else if (consent === "false" || consent === "refused")
      setUserConsent("refused");
    else setUserConsent("pending");
  }, []);
  React.useEffect(() => {
    if (userConsent === undefined) return;
    if (userConsent === "refused") {
      fbq.revokeConsent();
    } else if (userConsent === "accepted") {
      (async () => {
        const { firebase } = getFirebaseClient();
        const analytics = await import("firebase/analytics").then(
          ({ getAnalytics }) => getAnalytics(firebase)
        );
        setAnalytics(analytics);
      })();
    }
  }, [userConsent]);
  // provider
  return (
    <PageContext.Provider
      value={{
        showSharingModal,
        setShowSharingModal,
        showAppsModal,
        setShowAppsModal,
        videoModalConfig,
        setVideoModalConfig,
        analytics,
        userConsent,
        handleUserConsent,
        storeLink,
        kriaLink,
      }}
      {...props}
    />
  );
};

export const usePageContext = () => {
  const context = React.useContext(PageContext);
  if (!context) {
    throw new Error(
      "usePageConext must be used within the PageContextProvider"
    );
  }
  return context;
};
