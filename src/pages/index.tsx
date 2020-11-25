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
import Alternative from '../components/home/alternative'
import Partners from '../components/home/partners'

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Numbers />
        <Monopoly />
        <Alternative />
        <Partners />
      </Main>
      <Footer />
      <ShareFooter />
    </>
  )
}
