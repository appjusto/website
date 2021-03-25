import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import PartnerBox from './PartnerBox';
import Content from "../../Content";
import SectionHeading from "../../SectionHeading";
import NextLink from 'next/link';

const Partners: React.FC = () => {
  return (
    <Section id="partners">
      <Container pt="24">
        <Content>
          <SectionHeading>
            Veja quem já está com a gente nessa missão
          </SectionHeading>
          <HStack
            w="100%"
            mt="6"
            ml="-8px"
            mb="24px"
            p="8px 0"
            spacing={0}
            overflowX="auto"
          >
            <PartnerBox
              image="/logoAbrasel.png"
              altImg="Logo Abrasel"
              width={147}
              height={64}
            />
            <PartnerBox
              image="/logoIugu.png"
              altImg="Logo Iugu"
              width={132}
              height={54}
            />
            <PartnerBox
              image="/logoColetivoPinheiros.png"
              altImg="Logo Coletivo Pinheiros"
              width={107}
              height={105}
            />
          </HStack>
          <Text
            mt="4"
            fontSize="18px"
            lineHeight="26px"
            textStyle="p"
          >
            Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas,
            entre sócios, colaboradores e voluntários.
          </Text>
          <HStack mt="8">
            <Box>
              <Image src='/arrow-right.svg' />
            </Box>
            <NextLink href="/conheca-a-rede" passHref>
              <Link ml="4" fontSize="lg" fontWeight="700" lineHeight="26px">
                Conheça a nossa rede completa
              </Link>
            </NextLink>
          </HStack>
        </Content>
      </Container>
    </Section>
  );
}

export default Partners;
