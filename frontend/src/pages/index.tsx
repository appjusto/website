import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import Alternative from '../components/home/alternative'
import Partners from '../components/home/partners'
import Support from '../components/home/support'
import Commitment from '../components/home/commitment'
import ModalConfirmation from '../components/ModalConfirmation'
import Helpdesk from '../components/Helpdesk'
import RegistrationBox from '../components/home/hero/RegistrationBox'
import Better from '../components/home/better'
import Share from '../components/home/share'
import ShareFooter from '../components/ShareFooter'

export default function Home() {
  console.log("Render !!!")
  return (
    <PageLayout pageName="Home">
      <Hero />
      <RegistrationBox />
      <Better />
      <Share />
      <Alternative />
      <Commitment />
      <Partners />
      <Support />
      <ShareFooter />
      <ModalConfirmation />
      <Helpdesk />
    </PageLayout>
  )
}
