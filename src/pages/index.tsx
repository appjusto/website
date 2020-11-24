import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/home/hero'
import Main from '../components/Main'
//import Section from '../components/Section'
import ShareFooter from '../components/ShareFooter'
import Numbers from '../components/home/numbers'

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
      </Main>
      <Footer />
      <ShareFooter />
    </>
  )
}
