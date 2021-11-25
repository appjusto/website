import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import SharingModal from '../components/SharingModal';
import Head from "next/head";
import Seo from '../components/Seo';
import AppsModal from '../components/AppsModal';

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
        <AppsModal />
        <SharingModal />
      </PageLayout>
    </>
  )
}
