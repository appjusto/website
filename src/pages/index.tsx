import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Section from '../components/Section'
import ShareFooter from '../components/ShareFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <Hero />
        <Section bg="primary"/>
      </Main>
      <Footer />
      <ShareFooter />
    </>
  )
}
