import Head from "next/head";
import Network from '../components/network';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';

export default function Net() {
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
      <PageLayout pageName="Conheça a rede">
        <Network />
      </PageLayout>
    </>
  )
}
