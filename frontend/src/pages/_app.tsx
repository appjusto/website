import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import { PageContextProvider } from '../context';
import { useFreshDesk } from '../hooks/useFreshDesk';

function MyApp({ Component, pageProps }) {
  // hooks
  useFreshDesk()
  // providers
  return (
    <PageContextProvider>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </PageContextProvider>
  )
}

export default MyApp
