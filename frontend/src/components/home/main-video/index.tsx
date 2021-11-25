import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import Image from '../../Image';
import Section from "../../Section";
import Container from '../../Container';
import NextLink from 'next/link';
import SectionHeading from '../../SectionHeading';

const MainVideo: React.FC = () => {
  return (
    <Section mt={{ base: '8', lg: '4'}} id="main-video" h="auto">
      <Container bgColor="#2F422C" pt={{base: '8', lg: '16'}} px={{base: '4', md:'6', lg: '100px'}} pb={{base: '10', lg: '3'}} >
        <Flex direction={{base: 'column', md: 'row'}} h="100%" color="white">
          <Box w={{base: '100%', md: '50%', lg: '60%'}}>
            <Box position="relative">
              <Image src="/team.jpeg" boxShadow={{lg: 'black -24px 24px'}} zIndex="100" />
              <Center position="absolute" top="0" left="0" w="100%" h="100%" zIndex="200">
                <Image src="/icon-play.svg" w="96px" h="96px" _hover={{ opacity: "0.6" }} cursor="pointer" />
              </Center>
            </Box>
            <Text mt={{base: '2', lg: '8'}} fontSize="16px" lineHeight="22px" fontWeight="500" textAlign="center">
              Assista ao vídeo e entenda a nossa proposta
            </Text>
          </Box>
          <Box mt={{base: '8' , lg: '0'}} w={{base: '100%', md: '50%', lg: '40%'}} py={{ lg: '4'}} px={{ lg: '5'}} pl={{md: '6', lg: '0'}}>
            <SectionHeading highlighted color="white">
              Só é bom quando é bom para todos
            </SectionHeading>
            <Text mt="8" fontSize={{base: '18px', lg: '20px'}} lineHeight="26px" fontWeight="500">
              Mais que uma plataforma de entregas. Queremos ser exemplo de como um negócio da economia de plataforma pode crescer e, ao mesmo tempo, gerar prosperidade para todos - fornecedores, consumidores, entregadores, acionistas - reduzindo desigualdades.
            </Text>
            <NextLink  href="/investimento-coletivo" passHref>
              <Button mt="8" w={{base: '100%', lg: 'auto'}} size="lg" variant="outlineWhite" px="6">
                Saiba mais do financiamento coletivo
              </Button>
            </NextLink>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}

export default MainVideo;
