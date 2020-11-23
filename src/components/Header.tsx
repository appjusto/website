import Image from 'next/image'
import { Box, Flex } from "@chakra-ui/react";
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
        <Box
          width="140px"
          height="60px"
        >
          <Image src="/logo-home.svg" width={272} height={116} />
        </Box> 
      </Container>
    </Flex>
  );
}

export default Header;