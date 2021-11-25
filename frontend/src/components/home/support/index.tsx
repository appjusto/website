import { Center, CenterProps, Image, Link, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import React from 'react';
import NextLink from 'next/link';

const CustomCenter: React.FC<CenterProps> = (props) => {
  return <Center w={{base: '100%', md: '160px'}} h={{ base: 'auto', md: '120px'}} {...props}/>
}

const Support: React.FC = () => {
  // UI
  return (
    <Section mt="4" id="support" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '8'}} overflow="hidden">
        <SectionHeading w="100%" textAlign="center" maxW={{base: '321px', md: 'unset'}}>
          Veja quem já apoia essa causa
        </SectionHeading>
        <Text display={{base: 'none', md: 'block'}} mt="6" fontSize="18px" lineHeight="26px" fontWeight="500" textAlign={{ lg: 'center'}}>
          Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas,
          entre sócios, colaboradores e voluntários.{' '}
          <NextLink href="/conheca-a-rede" passHref>
            <Link textDecor="underline">Conheça toda a nossa rede</Link>
          </NextLink>
        </Text>
        <NextLink href="/conheca-a-rede" passHref>
          <Link
            mt="8"
            display={{base: 'block', md: 'none'}}
            textDecor="underline"
            fontSize="18px"
            lineHeight="26px"
            fontWeight="500"
            textAlign="center"
          >
            Conheça toda a nossa rede
          </Link>
        </NextLink>
        <Center>
          <Wrap mt="10" maxW="960px" spacing={{base: '30px', lg: '40px'}} justify="center">
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-abrasel.png" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-anr.png" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-coletivo-pinheiros.png" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-iugu.png" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-iza.png" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-99jobs.png" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-dinamo.png" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-kria.png" />
              </CustomCenter>
            </WrapItem>
          </Wrap>
        </Center>
      </Container>
    </Section>
  );
}

export default Support;
