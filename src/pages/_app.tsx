import { useEffect } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import theme from '../styles/theme';

import firebase from '../../firebaseApp';

import { PageContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
 /* useEffect(() => {
    // Analytics initialization for 'next export' apps
    firebase.analytics();
  }, [])*/
  return (
    <PageContextProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </PageContextProvider>
  )
}

export default MyApp
