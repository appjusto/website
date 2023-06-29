import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Footer } from "@/components/decentwork/Footer";
import { DWHero } from "@/components/decentwork/hero";
import { Section1 } from "@/components/decentwork/section1";
import { Section2 } from "@/components/decentwork/section2";
import { Section3 } from "@/components/decentwork/section3";
import { Section4 } from "@/components/decentwork/section4";
import Head from "next/head";

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
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </PageLayout>
    </>
  );
}
