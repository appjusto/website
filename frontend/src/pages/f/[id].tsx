import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../../components/Container";
import CustomLinkButton from "../../components/CustomLinkButton";
import { AppsBox } from "../../components/Fleet/AppsBox";
import { FleetFeature } from "../../components/Fleet/FleetFeature";
import Footer from "../../components/Footer";
import Topic from "../../components/home/better/Topic";
import React from "react";
import { formatCurrency } from "../../utils";
import { GetStaticPaths, GetStaticProps } from "next";
import Seo from "../../components/Seo";
import { getFleet } from "../../utils/businesses";
import { NextLink } from "src/components/NextLink";
import { Fleet } from "src/types";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "appjusto" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string;
  const fleet = await getFleet(id);
  if (!fleet) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      fleet,
    },
    revalidate: 60,
  };
};

interface FleetPageProps {
  fleet: Fleet;
}

export default function FleetPage({ fleet }: FleetPageProps) {
  // UI
  return (
    <Box>
      <Head>
        <title>AppJusto | {fleet?.name ?? "Frotas"}</title>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title={`AppJusto | ${fleet?.name ?? "Frotas"}`}
          author="@appjusto"
        />
      </Head>
      <AppsBox />
      <Container maxW="1120px" h={{ base: "auto", lg: "100vh" }} pb="16">
        <Box display={{ base: "block", md: "none" }} mb="4">
          <NextLink href="/" _focus={{ outline: "none" }} w="94px">
            <Image src="/logo-pages.svg" alt="Logo AppJusto" width="94px" />
          </NextLink>
        </Box>
        <Stack direction={{ base: "column", lg: "row" }} spacing={12}>
          <Box maxW={{ md: "300px", lg: "320px" }}>
            <Text fontSize="24px" lineHeight="26px" fontWeight="700">
              Você foi convidado a fazer parte da frota {fleet.name ?? "N/E"}
              no AppJusto! Bora lá?
            </Text>
            <Text mt="4" fontSize="15px" lineHeight="21px" fontWeight="500">
              Para entrar, é só baixar o AppJusto e fazer o cadastro usando o
              seu celular. Rapidinho você vai ser aprovado e poderá fazer suas
              entregas!
            </Text>
            <Box mt="4" display={{ base: "none", lg: "block" }}>
              <Image src="/icon-intro-delivery.svg" w="140px" />
            </Box>
            <Stack
              mt="6"
              w="100%"
              display={{ base: "flex", md: "none" }}
              direction="row"
              spacing={4}
            >
              <CustomLinkButton
                w="100%"
                name="app-courier-android"
                linkLabel="Android"
                variant="primary"
                fontSize="16px"
                icon="/icon-play-store.png"
                iconAlt="ícone play store"
                link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
                isExternal
              />
              <CustomLinkButton
                w="100%"
                name="app-courier-ios"
                linkLabel="Em breve"
                variant="disabled"
                fontSize="16px"
                icon="/icon-apple.png"
                iconAlt="ícone apple store"
                link="/"
                isExternal
                isDisabled
              />
            </Stack>
          </Box>
          <Box minW="272px" maxW={{ md: "300px", lg: "320px" }}>
            <Text fontSize="18px" lineHeight="26px" fontWeight="500">
              {fleet?.name ?? "N/E"}
            </Text>
            <FleetFeature
              label="Pagamento Mínimo"
              value={
                fleet?.minimumFee ? formatCurrency(fleet.minimumFee) : "N/E"
              }
            />
            <FleetFeature
              label="Distância Inicial Mínima"
              value={
                fleet?.distanceThreshold
                  ? `${fleet.distanceThreshold / 1000} km`
                  : "N/E"
              }
            />
            <FleetFeature
              label="Valor Adicional por Km Rodado"
              value={
                fleet?.additionalPerKmAfterThreshold
                  ? formatCurrency(fleet.additionalPerKmAfterThreshold)
                  : "N/E"
              }
            />
            <FleetFeature
              type="gray"
              label="Distância Máxima para Entrega"
              value={
                fleet?.maxDistance ? `${fleet.maxDistance / 1000} km` : "N/E"
              }
            />
            <FleetFeature
              type="gray"
              label="Distância Máxima até a Origem"
              value={
                fleet?.maxDistanceToOrigin
                  ? `${fleet?.maxDistanceToOrigin / 1000} km`
                  : "N/E"
              }
            />
            <Box mt="4" display={{ base: "block", lg: "none" }}>
              <Image src="/icon-intro-delivery.svg" w="140px" />
            </Box>
          </Box>
        </Stack>
        <Box>
          <Text mt="6" fontSize="24px" lineHeight="26px" fontWeight="700">
            As vantagens do AppJusto para entregadores
          </Text>
          <Topic
            size="sm"
            label="Autonomia para definir o preço das corridas e outras condições pelo nosso sistema de frotas"
            check
          />
          <Topic
            size="sm"
            label="Remuneração na frota AppJusto: R$ 10 até 5km e mais R$ 2 por km adicional"
            check
          />
          <Topic
            size="sm"
            label="Recebem valor integral pago pela entrega (subtraindo a taxa da operadora financeira)"
            check
          />
          <Topic
            size="sm"
            label="Sem suspensões automáticas: o processo sempre passa por um atendente"
            check
          />
          <Topic
            size="sm"
            label="Transparência em todas as regras e preços da plataforma"
            check
          />
        </Box>
      </Container>
      <Footer sharing={false} containerMaxWidth="1120px" />
    </Box>
  );
}
