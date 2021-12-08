import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import CustomLinkButton from '../../CustomLinkButton';
import React from 'react';
import { usePageContext } from '../../../context';

const MainVideo: React.FC = () => {
  // context
  const { kriaLink } = usePageContext();
  // state
  const [isVideoActive, setIsVideoActive] = React.useState(false);
  // UI
  return (
    <Section mt={{ base: '8', lg: '4'}} id="main-video" h="auto">
      <Container bgColor="#2F422C" pt={{base: '8', lg: '16'}} px={{base: '4', md:'6', lg: '100px'}} pb={{base: '10', lg: '3'}} >
        <Flex direction={{base: 'column', md: 'row'}} h="100%" justifyContent="space-between" color="white">
          <Box w={{base: '100%', md: '50%', lg: '60%'}}>
            {
              isVideoActive ? (
                <Box position="relative" boxShadow={{lg: 'black -24px 24px'}} bgColor="black" h={{base: '225px', md: '255px', lg: '444px'}}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube-nocookie.com/embed/rm6ZAsuefqA?autoplay=1&controls=0&modestbranding=1"
                    title="Explicando AppJusto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Box>
              ) : (
                <Box position="relative">
                  <Image src="/team.jpeg" boxShadow={{lg: 'black -24px 24px'}} zIndex="100" alt="equipe Appjusto" />
                  <Center
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    zIndex="200"
                    cursor="pointer"
                    _hover={{ opacity: "0.6" }}
                    onClick={() => setIsVideoActive(true)}
                  >
                    <Image src="/icon-play.svg" w="96px" h="96px" alt="Play" />
                  </Center>
                </Box>
              )
            }
            <Text mt={{base: '2', lg: '8'}} fontSize="16px" lineHeight="22px" fontWeight="500" textAlign="center" onClick={() => setIsVideoActive(false)}>
              Assista ao vídeo e entenda a nossa proposta
            </Text>
          </Box>
          <Box mt={{base: '8' , lg: '0'}} w={{base: '100%', md: '50%', lg: '40%'}} maxW="406px" py={{ lg: '4'}} ml={{md: '6', lg: '4'}}>
            <SectionHeading highlighted color="white">
              Só é bom quando é bom para todos
            </SectionHeading>
            <Text mt="8" textStyle="p">
              Mais que uma plataforma de entregas. Queremos ser exemplo de como um negócio da economia de plataforma pode crescer e, ao mesmo tempo, gerar prosperidade para todos - fornecedores, consumidores, entregadores, acionistas - reduzindo desigualdades.
            </Text>
            <CustomLinkButton
              mt="8"
              px="6"
              fontSize="16px"
              size="lg"
              w={{base: '100%', lg: 'auto'}}
              variant="outlineWhite"
              link={kriaLink}
              linkLabel="Saiba mais do investimento coletivo"
              isExternal
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}

export default MainVideo;
