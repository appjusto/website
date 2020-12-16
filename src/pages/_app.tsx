import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import theme from '../styles/theme';

import { PageContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
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
