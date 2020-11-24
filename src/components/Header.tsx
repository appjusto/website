import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text } from "@chakra-ui/react";
import Container from './Container';


const Header: React.FC = () => {
  return (
    <Flex
    as="header"
    w="100%"
    justifyContent="center"
    position="absolute"
    top="0"
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
          <Box
          width="140px"
          height="60px"
          >
            <Link href="/">
              <a>
                <Image 
                  src="/logo-home.svg" 
                  width={272} 
                  height={116} 
                  loading="eager" />
              </a>
            </Link>
          </Box>
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            display={["none", "none", "none", "flex"]}
          >
            <Text
              color="white"
              fontFamily="Barlow"
              fontWeight="700"
              fontSize="15px"
              mr="16px"
            >
              Em breve para Android e iOS
            </Text>
              <Box 
                mr="16px"
                h="40px"
              >
                <Image src="/googleplay.png" width={135} height={40} />
              </Box>
              <Box h="40px">
                <Image src="/appstore.png" width={120} height={40} />
              </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Header;