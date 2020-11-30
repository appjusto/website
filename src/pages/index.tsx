import { GetStaticProps } from 'next'

import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import Numbers from '../components/home/numbers'
import Monopoly from '../components/home/monopoly'
import Alternative from '../components/home/alternative'
import Partners from '../components/home/partners'
import Commitment from '../components/home/commitment'
import ModalConfirmation from '../components/ModalConfirmation'
import ModalRecommendation from '../components/ModalRecommendation'

import { db } from '../../firebase'

interface HomeProps {
  data: {
    cities: number
    consumers: number
    couriers: number
    restaurants: number
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const dbRef = db.collection("summary").doc("data")
  const data = await dbRef.get()
    .then(doc => {
      return doc.data()
    }).catch(err => {
      console.log(`Encountered error: ${err}`)})
  return {
    props: {
      data,
    },
    revalidate: 60,
  }
};

export default function Home<HomeProps>({ data }) {
  return (
    <PageLayout pageName="Home" logo="/logo-home.svg">
      <Hero />
      <Numbers summary={data}/>
      <Monopoly />
      <Alternative />
      <Commitment />
      <Partners />
      <ModalConfirmation />
      <ModalRecommendation />
    </PageLayout>
  )
}