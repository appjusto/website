import Head from 'next/head'
import Footer from '../components/Footer'
import Section from '../components/Section'
import ShareFooter from '../components/ShareFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section id="hero">
          <h1>WooW</h1>
        </Section>
      </main>
      <Footer />
      <ShareFooter />
    </>
  )
}
