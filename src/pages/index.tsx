import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/home/hero'
import Main from '../components/Main'
//import Section from '../components/Section'
import ShareFooter from '../components/ShareFooter'
import Numbers from '../components/home/numbers'
import Monopoly from '../components/home/monopoly'
import Section from '../components/Section'

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
        <Numbers />
        <Monopoly />
        <Section bg="white" h="100vh" />
      </Main>
      <Footer />
      <ShareFooter />
    </>
  )
}
