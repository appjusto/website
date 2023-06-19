import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const MainVideo: React.FC = () => {
  // state
  const [isVideoActive, setIsVideoActive] = React.useState(false);
  // UI
  return (
    <Section
      mt={{ base: "8", lg: "4" }}
      id="main-video"
      h="auto"
      bgColor="#2F422C"
    >
      <Container
        pt={{ base: "8", lg: "16" }}
        px={{ base: "4", md: "6", lg: "100px" }}
        pb={{ base: "10", lg: "4" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          h="100%"
          justifyContent="space-between"
          color="white"
        >
          <Box w={{ base: "100%", md: "50%", lg: "60%" }}>
            {isVideoActive ? (
              <Box
                position="relative"
                boxShadow={{ lg: "black -24px 24px" }}
                bgColor="black"
                h={{ base: "225px", md: "255px", lg: "444px" }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/rm6ZAsuefqA?autoplay=1&controls=0&modestbranding=1"
                  title="Explicando AppJusto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            ) : (
              <Box position="relative">
                <Image
                  src="/team.jpeg"
                  boxShadow={{ lg: "black -24px 24px" }}
                  zIndex="100"
                  alt="equipe Appjusto"
                />
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
            )}
            <Text
              mt={{ base: "2", lg: "8" }}
              fontSize="md"
              lineHeight="1.38rem"
              fontWeight="500"
              textAlign="center"
              color="white"
              // onClick={() => setIsVideoActive(false)}
            >
              Assista ao vídeo e entenda a nossa proposta
            </Text>
          </Box>
          <Flex
            mt={{ base: "8", lg: "0" }}
            w={{ base: "100%", md: "50%", lg: "40%" }}
            maxW="406px"
            py={{ lg: "4" }}
            ml={{ md: "6", lg: "4" }}
            flexDir="column"
            justifyContent="center"
          >
            <Box>
              <SectionHeading mt="0" highlighted color="white">
                Só é bom quando é bom para todos
              </SectionHeading>
              <Text mt="8" color="white">
                Mais que uma plataforma de entregas. Queremos ser exemplo de
                como um negócio da economia de plataforma pode crescer e, ao
                mesmo tempo, gerar prosperidade para todos - fornecedores,
                consumidores, entregadores, acionistas - reduzindo
                desigualdades.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default MainVideo;
