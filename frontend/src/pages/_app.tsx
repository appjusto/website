import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import theme from '../styles/theme';
import { PageContextProvider } from '../context';
import { useFreshDesk } from '../hooks/useFreshDesk';

function MyApp({ Component, pageProps }) {
  // hooks
  useFreshDesk()
  // providers
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
