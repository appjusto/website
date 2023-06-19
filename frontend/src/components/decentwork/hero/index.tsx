import Container from "@/components/Container";
import Section from "@/components/Section";
import { Box, Center, Flex, Heading, Image, Wrap } from "@chakra-ui/react";
import React from "react";
import { t } from "src/utils/i18n";
import { SectionButton } from "./SectionButton";

const DWHero: React.FC = () => {
  return (
    <Section id="dw-hero" minH="100vh" bgColor="gray.700" overflow="hidden">
      <Container minH="100vh" px={{ base: "0", lg: "inital" }}>
        <Flex
          position="relative"
          minH="100vh"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          py={{ base: "12", lg: "0" }}
        >
          <Flex
            maxW={{ base: "100%", lg: "640px" }}
            flexDir="column"
            minH={{ base: "84vh", lg: "auto" }}
            justifyContent={{ base: "space-between", lg: "flex-start" }}
            color="white"
            px={{ base: "4", lg: "0" }}
            zIndex="100"
          >
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
                fontWeight="700"
              >
                AppJusto na luta pelo trabalho decente
              </Heading>
              <Heading
                mt={{ base: "4", lg: "8" }}
                as="h2"
                maxW="648px"
                fontSize="xl"
                lineHeight="1.62rem"
                fontWeight="500"
              >
                O AppJusto, como forma de aprimorar seu combate à precarização
                do trabalho pelas plataformas, está trabalhando na luta pelo
                trabalho decente. Elencamos as ações que estamos fazendo e que
                ainda iremos fazer baseada nos seguintes critérios:
              </Heading>
            </Box>
            <Wrap
              mt={{ base: "0", md: "6" }}
              spacing="12px"
              justify={{ base: "center", lg: "start" }}
            >
              <SectionButton to="dw-section1" label={t("Remuneração")} />
              <SectionButton to="dw-section2" label={t("Condições")} />
              <SectionButton to="dw-section3" label={t("Contratos")} />
              <SectionButton to="dw-section4" label={t("Gestão")} />
              <SectionButton
                to="dw-section5"
                label={t("Representações justas")}
              />
            </Wrap>
          </Flex>
          <Center
            position={{ base: "absolute", lg: "initial" }}
            top={{ base: "38%", md: "30%" }}
            w="100%"
            maxW={{ lg: "580px" }}
            overflow="hidden"
            zIndex="1"
          >
            <Box
              ml={{ base: "-12", md: "-6" }}
              maxW="580px"
              minW={{ base: "480px", md: "0" }}
            >
              <Image
                src="/dw/hero.png"
                alt="mão erguida com punho fechado"
                objectFit="cover"
              />
            </Box>
          </Center>
        </Flex>
      </Container>
    </Section>
  );
};

export default DWHero;
