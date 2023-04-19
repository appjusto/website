import { Box, Flex, Image, Link, Text, keyframes } from "@chakra-ui/react";
import Section from "../../Section";
import Container from "../../Container";
import React from "react";

const walk = keyframes`
    from {transform: translateX(0px);}
    to {transform: translateX(-1680px)}
  `;

const Together: React.FC = () => {
  // animation
  const walkAnimation = `${walk} infinite 26s linear`;
  // UI
  return (
    <Section mt="4" id="together" h="auto">
      <Container pt={{ base: "8", lg: "16" }}>
        <Flex flexDir="column" alignItems="center">
          <Box maxW="960px">
            <Image
              display={{ base: "block", md: "none" }}
              src="/signature-mobile.png"
              alt="todos por um delivery mais justo"
            />
            <Image
              display={{ base: "none", md: "block" }}
              src="/signature-desktop.png"
              alt="todos por um delivery mais justo"
            />
          </Box>
          <Text mt="10" textAlign="center">
            Quer fazer parte do AppJusto? Entre em{" "}
            <Link
              href="mailto:parceiros@appjusto.com.br"
              textDecor="underline"
              isExternal
            >
              contato sobre parcerias
            </Link>{" "}
            ou veja{" "}
            <Link
              href="https://99jobs.com/appjusto/jobs"
              textDecor="underline"
              isExternal
            >
              nossas vagas disponíveis
            </Link>{" "}
            para trabalhar conosco.
          </Text>
        </Flex>
      </Container>
      <Box mt="20" w="100%" h="300px" position="relative" overflow="hidden">
        <Flex
          position="absolute"
          top="0"
          left="0"
          zIndex="999"
          animation={walkAnimation}
        >
          <Box minW="1680px" h="300px">
            <Image src="/photos-social.jpg" w="100%" alt="parceiros appjusto" />
          </Box>
          <Box minW="1680px" h="300px">
            <Image src="/photos-social.jpg" w="100%" alt="parceiros appjusto" />
          </Box>
          <Box minW="1680px" h="300px">
            <Image src="/photos-social.jpg" w="100%" alt="parceiros appjusto" />
          </Box>
        </Flex>
      </Box>
    </Section>
  );
};

export default Together;
