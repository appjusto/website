import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import Container from "../../components/Container";
import CustomLinkButton from "../../components/CustomLinkButton";
import Footer from "../../components/Footer";
import Topic from "../../components/home/better/Topic";
import Section from "../../components/Section";

interface FleetFeatureProps {
  type?: 'black' | 'gray';
  label: string;
  value: string;
}

const FleetFeature = ({ type = 'black', label, value }: FleetFeatureProps) => {
  return (
    <Flex mt="3" justifyContent="space-between">
      <Text
        fontSize="13px"
        lineHeight="18px"
        fontWeight="500"
        color={type === 'black' ? 'black' : '#697667'}
      >
        {label}
      </Text>
      <Text
        fontSize="13px"
        lineHeight="18px"
        fontWeight="500"
        color={type}
        bg={type === 'black' ? '' : '#F6F6F6'}
        border={type === 'black' ? '1px solid black' : 'none'}
        borderRadius="32px"
        px="2"
        py="1"
      >
        {value}
      </Text>
    </Flex>
  )
}

const AppsBox = () => {
  // UI
  return (
    <Section
      display={{base: 'none', md: 'flex'}}
      position={{ base: 'relative', md: 'fixed' }}
      top="10"
      zIndex="800"
    >
      <Container pt="0" display="flex" justifyContent="flex-end">
        <Flex
          flexDir="column"
          w="100%"
          maxW="370px"
          bg="white"
          border="1px solid #C8D7CB"
          p="8"
          color="black"
        >
          <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none'}} w='94px'>
            <Image
              src="/logo-pages.svg"
              alt="Logo AppJusto"
              width="120px"
            />
          </Link>
        </NextLink>
          <Text mt="8" fontSize="24px" lineHeight="26px" fontWeight="700">
            Baixe o app e comece a fazer suas entregas!
          </Text>
          <Stack mt="8" w="100%" direction="row" spacing={4}>
            <CustomLinkButton
              mt="0"
              name="app-courier-android"
              linkLabel="Android"
              variant="primary"
              fontSize="16px"
              icon="/icon-play-store.png"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            />
            <CustomLinkButton
              mt="0"
              name="app-courier-ios"
              linkLabel="Em breve"
              variant="disabled"
              fontSize="16px"
              icon="/icon-apple.png"
              link="#"
              isExternal={false}
              isDisabled
            />
          </Stack>
          <Link
            mt="6"
            href="https://appjusto.freshdesk.com/support/home"
            _focus={{ outline: 'none'}}
            isExternal
          >
            Saiba mais sobre o AppJusto
          </Link>
      </Flex>
    </Container>
  </Section>
  );
}

export default function Fleet1() {
  return (
    <Box>
      <AppsBox />
      <Container w="100vw" h={{base: 'auto', lg: '100vh'}} pb="16">
      <Box display={{base:  'block', md: 'none'}} mb="4">
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none'}} w='94px'>
            <Image
              src="/logo-pages.svg"
              alt="Logo AppJusto"
              width="94px"
            />
          </Link>
        </NextLink>
      </Box>
        <Stack direction={{base: 'column', lg: 'row'}} spacing={12}>
          <Box maxW="320px">
            <Text fontSize="24px" lineHeight="26px" fontWeight="700">
              Você foi convidado a fazer parte da frota [Nome da frota] no AppJusto!
              Bora lá?
            </Text>
            <Text mt="4" fontSize="15px" lineHeight="21px" fontWeight="500">
              Para entrar, é só baixar o AppJusto e fazer o cadastro usando o seu
              celular. Rapidinho você vai ser aprovado e poderá fazer suas entregas!
            </Text>
            <Box mt="4" display={{base:  'none', lg: 'block'}}>
              <Image src="/icon-intro-delivery.svg" w="140px"/>
            </Box>
            <Stack mt="6" w="100%" display={{base:  'flex', md: 'none'}} direction="row" spacing={4}>
              <CustomLinkButton
                mt="0"
                name="app-courier-android"
                linkLabel="Android"
                variant="primary"
                fontSize="16px"
                icon="/icon-play-store.png"
                link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
                isExternal
              />
              <CustomLinkButton
                mt="0"
                name="app-courier-ios"
                linkLabel="Em breve"
                variant="disabled"
                fontSize="16px"
                icon="/icon-apple.png"
                link="#"
                isExternal={false}
                isDisabled
              />
            </Stack>
          </Box>
          <Box minW="272px" maxW="320px">
            <Text fontSize="18px" lineHeight="26px" fontWeight="500">
              [Nome da frota]
            </Text>
            <FleetFeature label="Pagamento Mínimo" value="R$ 5,00" />
            <FleetFeature label="Distância Inicial Mínima" value="3 km" />
            <FleetFeature label="Valor Adicional por Km Rodado" value="R$ 2,00" />
            <FleetFeature type="gray" label="Distância Máxima para Entrega" value="10 km" />
            <FleetFeature type="gray" label="Distância Máxima até a Origem" value="5 km" />
            <FleetFeature type="gray" label="Porcentagem do Valor do Pedido" value="2%" />
            <FleetFeature type="gray" label="Valor Mínimo para Porcentagem" value="R$ 100,00" />
            <Box mt="4" display={{base:  'block', lg: 'none'}}>
              <Image src="/icon-intro-delivery.svg" w="140px"/>
            </Box>
          </Box>
        </Stack>
        <Box>
          <Text mt="6" fontSize="24px" lineHeight="26px" fontWeight="700">
            As vantagens do AppJusto para entregadores
          </Text>
          <Topic
            size="sm"
            label='Autonomia para definir o preço das corridas e outras condições pelo nosso sistema de frotas'
          />
          <Topic
            size="sm"
            label='Remuneração na frota AppJusto: R$ 10 até 5km e mais R$ 2 por km adicional'
          />
          <Topic
            size="sm"
            label='Recebem valor integral pago pela entrega (subtraindo a taxa da operadora financeira)'
          />
          <Topic
            size="sm"
            label='Sem suspensões automáticas: o processo sempre passa por um atendente'
          />
          <Topic
            size="sm"
            label='Transparência em todas as regras e preços da plataforma'
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
