import PageLayout from '../../components/PageLayout'
import RestaurantsHero from '../../components/calculators/restaurants/hero'
import ModalConfirmation from '../../components/ModalConfirmation'

export default function Home() {
  return (
    <PageLayout pageName="Restaurantes">
      <RestaurantsHero />
      <ModalConfirmation />
    </PageLayout>
  )
}
