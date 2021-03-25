import { Flex, Text } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import CustomLinkButton from "../../CustomLinkButton";
import Content from "../../Content";
import SectionHeading from "../../SectionHeading";

const Support: React.FC = () => {
  return (
    <Section id="support">
      <Container py="24">
        <Content>
          <SectionHeading>
            Estamos em busca de mais apoio para construir esse modelo
          </SectionHeading>
          <Text mt="6" textStyle="p">
            O AppJusto está em fase de captação de investimentos e montando uma
            rede de apoiadores por todo país. Quer nos ajudar nessa missão?
          </Text>
          <Flex
            mt="4"
            flexDir={["column", null, null, "row"]}
            w="100%"
          >
            <CustomLinkButton
              name="partner2"
              link="mailto:parceiros@appjusto.com.br"
              linkLabel="Quero ser um parceiro"
              variant="primary"
              maxW={["100%", null, "220px"]}
              mr={["0", "0", "0", "16px"]}
            />
            <CustomLinkButton
              name="jobs"
              link="https://99jobs.com/appjusto/jobs"
              linkLabel="Quero trabalhar com vocês"
              variant="primary"
              maxW={["100%", null, "220px"]}
            />
          </Flex>
        </Content>
      </Container>
    </Section>
  );
}

export default Support;
