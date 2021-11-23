import PageLayout from '../../components/PageLayout'
import RestaurantsHero from '../../components/calculators/restaurants/hero'
import SharingModal from '../../components/SharingModal'
import RestaurantCalculator from '../../components/calculators/restaurants/calculator'

export default function Home() {
  return (
    <PageLayout pageName="Restaurantes">
      <RestaurantsHero />
      <RestaurantCalculator />
      <SharingModal />
    </PageLayout>
  )
}
