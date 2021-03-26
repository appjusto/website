import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import ModalConfirmation from '../components/ModalConfirmation'
import Helpdesk from '../components/Helpdesk'
import RegistrationBox from '../components/home/hero/RegistrationBox'
import Better from '../components/home/better'

export default function Home() {
  return (
    <PageLayout pageName="Home">
      <Hero />
      <RegistrationBox />
      <Better />
      <ModalConfirmation />
      <Helpdesk />
    </PageLayout>
  )
}
