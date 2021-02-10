import PageLayout from '../components/PageLayout'
import About from '../components/About'
import ModalRecommendation from '../components/ModalRecommendation'
import ModalConfirmation from '../components/ModalConfirmation'

import Logo from '../../public/logo-pages.svg'

export default function AboutPage() {
  return (
    <PageLayout pageName="Sobre o AppJusto" logo={Logo}>
      <About />
      <ModalRecommendation />
      <ModalConfirmation />
    </PageLayout>
  )
}