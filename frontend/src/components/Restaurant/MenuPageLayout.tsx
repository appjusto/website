import { Box } from "@chakra-ui/react";
import Head from 'next/head';
import Container from "../Container";
import Footer from "../Footer";
import React from 'react';
import Seo from "../Seo";
import { RestaurantAppsBox } from "./RestaurantAppsBox";
import { Mode, OrderButton } from "./OrderButton";
import { useRouter } from "next/router";

interface MenuPageLayoutProps {
  businessName?:  string;
  businessDescription?:  string;
  businessPhone?:  string;
  isMenu: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export default function MenuPageLayout({
  businessName, businessDescription, businessPhone, isMenu, children
}: MenuPageLayoutProps) {
  // router
  const { query } = useRouter();
  // state
  const [whatsLimit, setWhatsLimit] = React.useState(false);
  // refs
  const BoxRef = React.useRef<HTMLDivElement>(null);
  const BoxRefHeight = BoxRef.current?.scrollHeight;
  // side effects
  React.useEffect(() => {
    if(!BoxRefHeight) return;
    const limit = BoxRefHeight - 206 - screen.height;
    const handleScroll = () => {
      if(!isMenu) return;
      if (document.documentElement.scrollTop >= limit) setWhatsLimit(true);
      else setWhatsLimit(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [BoxRefHeight, isMenu]);
  React.useEffect(() => {
    if(!isMenu || query.slug.length > 1) setWhatsLimit(true);
    else setWhatsLimit(false);
  }, [isMenu, query.slug]);
  // UI
  return (
    <Box ref={BoxRef}>
      <Head>
        <title>AppJusto | {businessName ?? 'Restaurante'}</title>
        <Seo
          metaDescription={businessDescription ?? "Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"}
          title={`AppJusto | ${businessName ?? 'Restaurante'}`}
          author="@appjusto"
          canonical_url="https://appjusto.com.br/"
        />
      </Head>
      <Box>
        <RestaurantAppsBox />
        <Container position="relative" w="100vw" minH="100vh" pb="24">
          <Box position="relative" mt={{base: '2', lg: '0'}} maxW={{base: '100%', lg: '656px'}} zIndex="999">
            {children}
            <OrderButton mode={query.mode as Mode} limit={whatsLimit} phone={businessPhone} />
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};
