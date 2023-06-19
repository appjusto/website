import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { PageContextProvider } from "@/context";
import { useFreshDesk } from "@/hooks/useFreshDesk";
import React from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as fbq from "@/utils/fpixel";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // hooks
  useFreshDesk();
  // side effects
  React.useEffect(() => {
    fbq.pageview();
    const handleRouteChange = () => {
      fbq.pageview();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // providers
  return (
    <PageContextProvider>
      <ChakraProvider theme={theme}>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${fbq.FB_PIXEL_ID});
              fbq('track', 'PageView');
            `,
          }}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </PageContextProvider>
  );
}

export default MyApp;
