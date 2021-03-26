import PageLayout from '../components/PageLayout'
import About from '../components/About'
import ModalRecommendation from '../components/ModalRecommendation'
import ModalConfirmation from '../components/ModalConfirmation'

export default function AboutPage() {
  return (
    <PageLayout pageName="Sobre o AppJusto">
      <About />
      <ModalRecommendation />
      <ModalConfirmation />
    </PageLayout>
  )
}
