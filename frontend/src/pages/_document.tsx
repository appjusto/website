import Document, { Html, Head, Main, NextScript } from "next/document";
import * as fbq from "@/utils/fpixel";

export default class MyDocument extends Document {
  // Para aplicações globais no header
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            name="facebook-domain-verification"
            content="09j3j6jh7mwpa0fu7vuiv4vyj3zesq"
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
