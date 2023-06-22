import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { NotificationsPage } from "@/components/notifications";
import Head from "next/head";

export default function Net() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
        />
      </Head>
      <PageLayout pageName="Preferências de notificação">
        <NotificationsPage />
      </PageLayout>
    </>
  );
}
