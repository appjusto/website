import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import Alternative from '../components/home/alternative'
import Partners from '../components/home/partners'
import Support from '../components/home/support'
import Commitment from '../components/home/commitment'
import ModalConfirmation from '../components/ModalConfirmation'
import RegistrationBox from '../components/home/hero/RegistrationBox'
import Better from '../components/home/better'
import Share from '../components/home/share'
import UN from '../components/home/un'
import Media from '../components/home/media'

export default function Home() {
  return (
    <PageLayout pageName="Home">
      <Hero />
      <RegistrationBox />
      <Better />
      <Media />
      <Share />
      <Alternative />
      <Commitment />
      <Partners />
      <UN />
      <Support />
      <ModalConfirmation />
    </PageLayout>
  )
}
