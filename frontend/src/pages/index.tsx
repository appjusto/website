import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import SharingModal from '../components/SharingModal';
import Head from "next/head";
import Seo from '../components/Seo';
import AppsModal from '../components/AppsModal';
import MainVideo from '../components/home/main-video';
import Commitment from '../components/home/commitment';
import Better from '../components/home/better';
import Testimonials from '../components/home/testimonials';
import Invest from '../components/home/invest';
import Media from '../components/home/media';

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
      <PageLayout pageName="Home">
        <Hero />
        <MainVideo />
        <Commitment />
        <Better />
        <Testimonials />
        <Invest />
        <Media />
        <AppsModal />
        <SharingModal />
      </PageLayout>
    </>
  )
}
