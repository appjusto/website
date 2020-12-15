import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import Seo from '../components/Seo'

export default class MyDocument extends Document {
  // Para aplicações globais no header
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <Seo 
            metaDescription="AppJusto. Mais do que um app de entregas. Somo um movimento por relações mais justas e transparentes. Faça parte agora!"
            title="AppJusto"
            author="@appjusto"
            canonical_url="https://appjusto.vercel.app/"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&display=swap" 
            rel="stylesheet" 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}