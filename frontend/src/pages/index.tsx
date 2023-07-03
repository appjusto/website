import AppsModal from "@/components/AppsModal";
import { CookieBar } from "@/components/CookieBar";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import SharingModal from "@/components/SharingModal";
import VideoModal from "@/components/VideoModal";
import Better from "@/components/home/better";
import Commitment from "@/components/home/commitment";
import Crowdfunding from "@/components/home/crowdfunding";
import DecentWork from "@/components/home/decent-work";
import Hero from "@/components/home/hero";
import MainVideo from "@/components/home/main-video";
import Media from "@/components/home/media";
import Support from "@/components/home/support";
import Testimonials from "@/components/home/testimonials";
import Together from "@/components/home/together";
import Un from "@/components/home/un";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
        />
      </Head>
      <PageLayout pageName="Home">
        <Hero />
        <MainVideo />
        <DecentWork />
        <Commitment />
        <Better />
        <Testimonials />
        <Crowdfunding />
        <Media />
        <Support />
        <Un />
        <Together />
        <CookieBar />
        <AppsModal />
        <VideoModal />
        <SharingModal />
      </PageLayout>
    </>
  );
}
