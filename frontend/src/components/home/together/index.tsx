import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';

const Together: React.FC = () => {
  return (
    <Section mt="4" id="together" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '2'}} >
        <Flex flexDir="column" alignItems="center">
          <Box maxW="960px">
            <Image display={{base: 'block', md: 'none'}} src="/signature-mobile.png" />
            <Image display={{base: 'none', md: 'block'}} src="/signature-desktop.png" />
          </Box>
          <Text mt="10" fontSize="20px" lineHeight="26px" fontWeight="500">
            Quer fazer parte do AppJusto? Entre em{' '}
            <Link href="mailto:parceiros@appjusto.com.br" textDecor="underline" isExternal>
              contato sobre parcerias
            </Link>
            {' '}ou veja{' '}
            <Link href="https://99jobs.com/appjusto/jobs" textDecor="underline" isExternal>
              nossas vagas disponíveis
            </Link>
            {' '}para trabalhar conosco.
          </Text>
        </Flex>
      </Container>
    </Section>
  );
}

export default Together;
