import NextLink from 'next/link'
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import Container from './Container';
import Image from '../components/Image';

interface HeaderProps {
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({
  isHome = true,
}) => {
  return (
    <Flex
    as="header"
    w="100%"
    justifyContent="center"
    position="absolute"
    top={{ base: isHome ? "0" : "48px", lg: "0" }}
    mt={isHome ? {base: "2", md: "8"} : "4"}
    left="0"
    zIndex="100"
    >
      <Container pt="16px">
        <Flex
          flexDir="row"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box w={{ base: '120px', lg: isHome ? "168px" : "120px" }}>
            <Link href="/">
              <Image
                src={isHome ? '/logo-home.svg' : '/logo-pages.svg'}
                alt="Logo AppJusto"
                width="100%"
                loading="eager" />
            </Link>
          </Box>
          {/*<Flex
            justifyContent="flex-end"
            alignItems="center"
            display={["none", null, null, "flex"]}
          >
            <Text
              color={ isHome ? "white" : "black"}
              fontFamily="Barlow"
              fontWeight="700"
              fontSize="15px"
              mr="16px"
            >
              Em breve para Android e iOS
            </Text>
          </Flex>*/}
        </Flex>
      </Container>
    </Flex>
  );
}

export default Header;

/*
<Box
  mr="16px"
  h="40px"
>
  <img
    src="/googleplay.png"
    alt="Google Play Store"
    width={135}
    height={40}
  />
</Box>
<Box h="40px">
  <img
    src="/appstore.png"
    alt="Apple App Store"
    width={120}
    height={40}
  />
</Box>
*/
