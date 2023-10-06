import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Center, Image } from "@chakra-ui/react";
import React from "react";

const Bndes: React.FC = () => {
  // UI
  return (
    <Section mt="4" id="un" h="auto">
      <Container
        pt={{ base: "8", lg: "16" }}
        pb={{ base: "10", lg: "8" }}
        overflow="hidden"
      >
        <SectionHeading mt="8" w="100%" textAlign="center">
          Estágio Tração do BNDES Garagem - Negócios de Impacto
        </SectionHeading>
        <Center mt="10">
          <Image
            src="/bndes-garagem.png"
            w="360px"
            h="auto"
            alt="BNDES Garagem"
          />
        </Center>
      </Container>
    </Section>
  );
};

export default Bndes;
