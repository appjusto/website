import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import Numbers from '../components/home/numbers'
import Monopoly from '../components/home/monopoly'
import Alternative from '../components/home/alternative'
import Partners from '../components/home/partners'
import Commitment from '../components/home/commitment'
import ModalConfirmation from '../components/ModalConfirmation'

export default function Home() {
  return (
    <PageLayout pageName="Home" logo="/logo-home.svg">
      <Hero />
      <Numbers />
      <Monopoly />
      <Alternative />
      <Commitment />
      <Partners />
      <ModalConfirmation />
    </PageLayout>
  )
}