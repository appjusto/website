import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import Image from '../../Image';
import Section from "../../Section";
import Container from '../../Container';
import NextLink from 'next/link';

const MainVideo: React.FC = () => {
  return (
    <Section mt={{ lg: '4'}} id="main-video" h="auto">
      <Container bgColor="#2F422C" pt="16" px="100px" pb="2" >
        <Flex direction={{base: 'column', md: 'row'}} h="100%" color="white">
          <Box w="60%">
            <Box position="relative">
              <Image src="/team.jpeg" boxShadow="black -24px 24px" zIndex="100" />
            <Center position="absolute" top="0" left="0" w="100%" h="100%" zIndex="999">
                <Image src="/icon-play.svg" w="96px" h="96px" _hover={{ opacity: "0.6" }} cursor="pointer" />
              </Center>
            </Box>
            <Text mt="8" fontSize="16px" lineHeight="22px" fontWeight="500" textAlign="center">
              Assista ao vídeo e entenda a nossa proposta
            </Text>
          </Box>
          <Box w="40%" py="4" px="5">
            <Heading as="h2" fontSize="48px" lineHeight="57.6px" fontWeight="700">
              Só é bom quando é bom para todos
            </Heading>
            <Text mt="8" fontSize="20px" lineHeight="26px" fontWeight="500">
              Mais que uma plataforma de entregas. Queremos ser exemplo de como um negócio da economia de plataforma pode crescer e, ao mesmo tempo, gerar prosperidade para todos - fornecedores, consumidores, entregadores, acionistas - reduzindo desigualdades.
            </Text>
            <NextLink  href="/investimento-coletivo" passHref>
              <Button mt="8" w="auto" variant="outlineWhite" px="6">
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
