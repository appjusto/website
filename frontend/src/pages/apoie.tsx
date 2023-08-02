import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import DecentWork from "@/components/home/decent-work";
import { SupportFooter } from "@/components/support/Footer";
import { SupportHero } from "@/components/support/hero";
import Head from "next/head";

export default function SupportPage() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Restaurantes, Entregadores, Consumidores e Plataforma, juntos, construindo um delivery que seja bom pra todos - a cada pedido"
          title="Apoie o AppJusto"
          author="@appjusto"
        />
      </Head>
      <PageLayout pageName="Apoie">
        <SupportHero />
        <DecentWork />
        <SupportFooter />
      </PageLayout>
    </>
  );
}
