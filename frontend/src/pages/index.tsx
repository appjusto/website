import PageLayout from "../components/PageLayout";
import Hero from "../components/home/hero";
import SharingModal from "../components/SharingModal";
import Head from "next/head";
import Seo from "../components/Seo";
import AppsModal from "../components/AppsModal";
import MainVideo from "../components/home/main-video";
import Commitment from "../components/home/commitment";
import Better from "../components/home/better";
import Testimonials from "../components/home/testimonials";
import Media from "../components/home/media";
import Support from "../components/home/support";
import Un from "../components/home/un";
import Crowdfunding from "../components/home/crowdfunding";
import Together from "../components/home/together";
import VideoModal from "../components/VideoModal";
import { CookieBar } from "../components/CookieBar";
import DecentWork from "src/components/home/decent-work";

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
        <Commitment />
        <Better />
        <Testimonials />
        <DecentWork />
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
