import Head from "next/head";
import PageLayout from '../components/PageLayout';
import Research from '../components/research';
import Seo from '../components/Seo';

export default function ResearchPage() {
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
      <PageLayout pageName="Pesquisa">
        <Research />
      </PageLayout>
    </>
  )
}
