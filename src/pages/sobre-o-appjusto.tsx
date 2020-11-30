import PageLayout from '../components/PageLayout'
import AboutAppJusto from '../components/About'
import ModalRecommendation from '../components/ModalRecommendation'
import ModalConfirmation from '../components/ModalConfirmation'

export default function About() {
  return (
    <PageLayout pageName="Sobre o AppJusto" logo="/logo-pages.svg">
      <AboutAppJusto />
      <ModalRecommendation />
      <ModalConfirmation />
    </PageLayout>
  )
}