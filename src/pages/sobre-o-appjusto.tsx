import PageLayout from '../components/PageLayout'
import About from '../components/About'
import ModalRecommendation from '../components/ModalRecommendation'
import ModalConfirmation from '../components/ModalConfirmation'
import ModalSharing from '../components/ModalSharing'

export default function AboutPage() {
  return (
    <PageLayout pageName="Sobre o AppJusto" logo="/logo-pages.svg">
      <About />
      <ModalRecommendation />
      <ModalConfirmation />
      <ModalSharing />
    </PageLayout>
  )
}