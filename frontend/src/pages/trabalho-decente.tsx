import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { DWHero } from "@/components/decentwork/0-hero";
import { Remuneration } from "@/components/decentwork/1-remuneration";
import { Conditions } from "@/components/decentwork/2-conditions";
import { Contracts } from "@/components/decentwork/3-contracts";
import { Management } from "@/components/decentwork/4-management";
import { Representations } from "@/components/decentwork/5-representations";
import { Footer } from "@/components/decentwork/Footer";
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
        <Remuneration />
        <Conditions />
        <Contracts />
        <Management />
        <Representations />
        <Footer />
      </PageLayout>
    </>
  );
}
