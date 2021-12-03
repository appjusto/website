import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { FB_PIXEL_ID } from '../utils/fpixel';

export default class MyDocument extends Document {
  // Para aplicações globais no header
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="facebook-domain-verification" content="09j3j6jh7mwpa0fu7vuiv4vyj3zesq" />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  };
};
