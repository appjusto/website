import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import Seo from "@/components/Seo";
import DWHero from "@/components/decentwork/hero";
import Section1 from "@/components/decentwork/section1";

export default function DecentWorkPage() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="O AppJusto, como forma de aprimorar seu combate à precarização do trabalho pelas plataformas, está trabalhando na luta pelo trabalho decente. Elencamos as ações que estamos fazendo e que ainda iremos fazer baseada nos seguintes critérios: remuneração, contratos, gestão, condições e representações justas."
          title="AppJusto e trabalho decente"
          author="@appjusto"
        />
      </Head>
      <PageLayout pageName="Trabalho decente">
        <DWHero />
        <Section1 />
      </PageLayout>
    </>
  );
}
