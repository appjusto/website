import Container from "@/components/Container";
import CustomLinkButton from "@/components/CustomLinkButton";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Span } from "@/components/Span";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

const DecentWork: React.FC = () => {
  // UI
  return (
    <Section
      id="decent-work"
      position="relative"
      bgColor="gray.400"
      overflow="hidden"
    >
      <Container py={{ bse: "8", md: "24" }}>
        <Flex mt={{ lg: "8" }} justifyContent="space-between">
          <Box
            maxW={{ md: "400px", lg: "512px" }}
            pb={{ base: "12", lg: "12" }}
          >
            <SectionHeading fontSize={{ base: "3xl", lg: "5xl" }} highlighted>
              Estamos na luta por um trabalho decente
            </SectionHeading>
            <Text mt="10" textStyle="p">
              O AppJusto nasceu em resposta às paralisações promovidas por
              entregadores e entregadoras em 2020. Criamos uma página para
              reunir{" "}
              <Span bold>
                as principais ações da plataforma na luta contra a precarização
                do trabalho.
              </Span>{" "}
            </Text>
            <Center
              mt="8"
              display={{ base: "flex", md: "none" }}
              p={{ md: "6", lg: "12" }}
              w={{ md: "320px", lg: "720px" }}
            >
              <Image
                src="/landing-decent-work.png"
                alt="página de trabalho decente"
              />
            </Center>
            <CustomLinkButton
              mt="8"
              display={{ base: "none", lg: "initial" }}
              w="fit-content"
              variant="primary"
              h="60px"
              px="10"
              fontSize="20px"
              link="/trabalho-decente"
              linkLabel="Saiba mais sobre nossa iniciativa"
            />
            <CustomLinkButton
              mt="8"
              display={{ base: "initial", lg: "none" }}
              w={{ base: "100%", md: "328px" }}
              variant="primary"
              h="60px"
              px="6"
              fontSize="20px"
              link="/trabalho-decente"
              linkLabel="Saiba mais"
            />
          </Box>
          <Center
            display={{ base: "none", md: "block" }}
            pb={{ md: "6", lg: "16" }}
            w={{ md: "320px", lg: "680px" }}
          >
            <Image
              src="/landing-decent-work.png"
              alt="ilustração spark amarela"
            />
          </Center>
        </Flex>
      </Container>
    </Section>
  );
};

export default DecentWork;
