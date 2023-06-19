import Container from "@/components/Container";
import CustomLinkButton from "@/components/CustomLinkButton";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const DecentWork: React.FC = () => {
  // UI
  return (
    <Section mt="4" id="decent-work" position="relative" bgColor="gray.400">
      <Container pt={{ base: "8", lg: "32" }} pb={{ base: "8", lg: "36" }}>
        <Flex>
          <Box maxW="512px">
            <SectionHeading fontSize="48" lineHeight="56px">
              Estamos na luta por um trabalho decente
            </SectionHeading>
            <Text mt="10" textStyle="p">
              O AppJusto, como forma de aprimorar seu combate à precarização do
              trabalho pelas plataformas, está trabalhando na luta pelo trabalho
              decente.{" "}
              <strong>
                Elencamos as ações que estamos fazendo e que ainda iremos fazer.
              </strong>
            </Text>
            <CustomLinkButton
              mt="8"
              w={{ base: "100%", md: "328px" }}
              variant="primary"
              h="60px"
              px="6"
              fontSize="20px"
              link="/trabalho-decente"
              linkLabel="Saiba mais sobre nossa iniciativa"
            />
          </Box>
        </Flex>
      </Container>
      <Box position="absolute" top="8" right="0">
        <Image
          src="/landing-decent-work.png"
          w="640px"
          // h="48px"
          alt="ilustração spark amarela"
        />
      </Box>
    </Section>
  );
};

export default DecentWork;
