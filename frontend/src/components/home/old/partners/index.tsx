import { Box, HStack, Image, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Container from "../../../Container";
import Section from "../../../Section";
import PartnerBox from './PartnerBox';
import Content from "../../../Content";
import SectionHeading from "../../../SectionHeading";
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
            mt="2"
            ml="-8px"
            mb="24px"
            p="8px 0"
            spacing={0}
            overflowX="auto"
            display={{base: 'flex', md: 'none'}}
          >
            <PartnerBox
              image="/logoANR.png"
              altImg="Logo ANR"
              link="https://anrbrasil.org.br/beneficios/"
              linkLabel="ASSOCIE-SE"
            />
            <PartnerBox
              image="/logoAbrasel.png"
              altImg="Logo Abrasel"
              link="https://abrasel.com.br/"
              linkLabel="VER MAIS"
            />
            <PartnerBox
              image="/logoIugu.png"
              altImg="Logo Iugu"
              link="https://alia.iugu.com/"
              linkLabel="VER MAIS"
            />
            <PartnerBox
              image="/logoColetivoPinheiros.png"
              altImg="Logo Coletivo Pinheiros"
              width={20}
              height={20}
              link="https://www.coletivopinheiros.com/"
              linkLabel="VER MAIS"
            />
          </HStack>
          <Wrap w="100%" mt="6" px="0" spacing="2px" display={{base: 'none', md: 'flex'}}>
            <WrapItem>
              <PartnerBox
                image="/logoANR.png"
                altImg="Logo ANR"
                width="133px"
                height="58px"
                link="https://anrbrasil.org.br/beneficios/"
                linkLabel="ASSOCIE-SE"
              />
            </WrapItem>
            <WrapItem>
              <PartnerBox
                image="/logoAbrasel.png"
                altImg="Logo Abrasel"
                width="114px"
                height="50px"
                link="https://abrasel.com.br/"
                linkLabel="VER MAIS"
              />
            </WrapItem>
            <WrapItem>
              <PartnerBox
                image="/logoIugu.png"
                altImg="Logo Iugu"
                width="102px"
                height="42px"
                link="https://alia.iugu.com/"
                linkLabel="VER MAIS"
              />
            </WrapItem>
            <WrapItem>
              <PartnerBox
                image="/logoColetivoPinheiros.png"
                altImg="Logo Coletivo Pinheiros"
                width="64px"
                height="64px"
                link="https://www.coletivopinheiros.com/"
                linkLabel="VER MAIS"
              />
            </WrapItem>
          </Wrap>
          <Text
            mt="8"
            fontSize="18px"
            lineHeight="26px"
            textStyle="p"
          >
            Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas,
            dentre sócios, colaboradores e voluntários.
          </Text>
          <HStack mt="8">
            <Box>
              <Image src='/arrow-right.svg' alt="seta para a direita" />
            </Box>
            <NextLink href="/conheca-a-rede" passHref>
              <Link ml="4" fontSize="lg" fontWeight="700" lineHeight="26px" textDecor="underline" _focus={{ outline: 'none '}}>
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
