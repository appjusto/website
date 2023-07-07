import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Section from "../Section";

export const Footer = () => {
  return (
    <Section>
      <Center
        w="100%"
        position="relative"
        minH={{ base: "540px", md: "340px", lg: "618px" }}
        bgColor="gray.700"
        overflow="hidden"
        zIndex="2"
      >
        <Box
          display={{ base: "none", lg: "none" }}
          position="absolute"
          left="0"
          right="0"
          zIndex="10"
        >
          <Image src="/dw/footer-bg.png" alt="arte do footer" />
        </Box>
        <Flex
          position="relative"
          mt={{ base: "12", md: "12", lg: "8" }}
          px={{ base: "4", md: "0" }}
          maxW={{ base: "100%", md: "600px", lg: "1090px" }}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          zIndex="20"
        >
          <Text
            fontSize={{ base: "2xl", lg: "3xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Nós do AppJusto participamos ativamente das discussões que envolvem
            a regulamentação do trabalho em plataformas e aplicativos.
          </Text>
          <Text
            mt={{ base: "4", md: "4", lg: "6" }}
            fontSize="lg"
            fontWeight="normal"
            color="white"
            textAlign="center"
          >
            Vamos juntos por um delivery mais justo. ✊
          </Text>
          {/* <Button mt="8" w="fit-content" variant="primary" px="10" fontSize="sm">
          Ajude nossa causa
        </Button> */}
          <Box
            w="90px"
            h="90px"
            display={{ base: "initial", md: "none" }}
            position="absolute"
            bottom="-20"
            right="4"
            zIndex="10"
          >
            <Image src="/dw/footer-bg-mob.png" alt="arte do footer" />
          </Box>
        </Flex>
      </Center>
    </Section>
  );
};
