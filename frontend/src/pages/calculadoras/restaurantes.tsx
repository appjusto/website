import PageLayout from "src/components/PageLayout";
import RestaurantsHero from "src/components/calculators/restaurants/hero";
import SharingModal from "src/components/SharingModal";
import RestaurantCalculator from "src/components/calculators/restaurants/calculator";
import Head from "next/head";
import Seo from "src/components/Seo";
import AppsModal from "src/components/AppsModal";

export default function Restaurants() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
        />
      </Head>
      <PageLayout pageName="Restaurantes">
        <RestaurantsHero />
        <RestaurantCalculator />
        <AppsModal />
        <SharingModal />
      </PageLayout>
    </>
  );
}
