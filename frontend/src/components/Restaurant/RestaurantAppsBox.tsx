import { Box, Flex, Image, Link, HStack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import Container from "../Container";
import CustomLinkButton from "../CustomLinkButton";
import Section from "../Section";
import React from 'react';
import { getOS } from "../../pages/r/utils";

export const RestaurantAppsBox = () => {
  // state
  const [appLink, setAppLink] = React.useState('https://apps.apple.com/br/app/appjusto/id1569067601');
  // side effects
  React.useEffect(() => {
    const opSystem = getOS();
    console.log('opSystem', opSystem);
    if(opSystem === 'Android') setAppLink('https://play.google.com/store/apps/details?id=br.com.appjusto.consumer.live')
  }, []);
  // UI
  return (
    <Section
      display="flex"
      position={{ base: 'relative', lg: 'fixed' }}
      top={{base: '6', lg: '10'}}
      zIndex="800"
    >
      <Container pt="0" display="flex" justifyContent="flex-end">
        <Box
          w="100%"
          maxW={{lg: '366px'}}
          bg="white"
          border={{base: 'none', lg: '1px solid #C8D7CB'}}
          p={{base: '0', lg: '8'}}
          color="black"
        >
          <Flex justifyContent="space-between" >
            <NextLink href="/" passHref>
              <Link _focus={{ outline: 'none'}} w="120px">
                <Image
                  src="/logo-pages.svg"
                  alt="Logo AppJusto"
                  w="100%"
                />
              </Link>
            </NextLink>
            <CustomLinkButton
                mt="0"
                maxW="114px"
                name="app-consumer"
                linkLabel="Baixe o app"
                variant="primary"
                fontSize="16px"
                link={appLink}
                isExternal
              />
          </Flex>
          <Text display={{base: 'none', lg: 'block'}} mt="6" fontSize="15px" lineHeight="21px" fontWeight="500">
            Ao usar o AppJusto, você paga menos, e colabora com uma economia mais
            justa para entregadores e restaurantes. Faça parte desse movimento!
          </Text>
        </Box>
    </Container>
  </Section>
  );
};
