import PageLayout from '../../components/PageLayout'
import RestaurantsHero from '../../components/calculators/restaurants/hero'
import SharingModal from '../../components/SharingModal'
import RestaurantCalculator from '../../components/calculators/restaurants/calculator'
import Head from "next/head";
import Seo from '../../components/Seo';

export default function Home() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
          canonical_url="https://appjusto.com.br/"
        />
      </Head>
      <PageLayout pageName="Restaurantes">
        <RestaurantsHero />
        <RestaurantCalculator />
        <SharingModal />
      </PageLayout>
    </>
  )
}
