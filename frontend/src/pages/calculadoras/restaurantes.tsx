import PageLayout from '../../components/PageLayout'
import RestaurantsHero from '../../components/calculators/restaurants/hero'
import ModalConfirmation from '../../components/ModalConfirmation'
import RestaurantCalculator from '../../components/calculators/restaurants/calculator'

export default function Home() {
  return (
    <PageLayout pageName="Restaurantes">
      <RestaurantsHero />
      <RestaurantCalculator />
      <ModalConfirmation />
    </PageLayout>
  )
}
