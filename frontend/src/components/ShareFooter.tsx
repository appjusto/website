import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import Container from "./Container";
import ShareButton from "./ShareButton";

const ShareFooter = () => {
  // state
  const [isTop, setisTop] = useState(false);
  // handlers
  const handleScroll = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width > 1000) {
      if (document.documentElement.scrollTop > 600) {
        setisTop(false);
      } else {
        setisTop(true);
      }
    }
  };
  // side effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // UI
  return (
    <Flex
      as="div"
      w="100%"
      h="64px"
      bg="black"
      justifyContent="center"
      alignItems="center"
      zIndex="999"
    >
      <Container
        h="64px"
        py="8px"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        color="primary"
      >
        <HStack w="100%" spacing={4} align="center">
          <ShareButton variant="primary" h="48px" />
          <Text
            fontSize="15px"
            fontWeight="500"
            display={["none", null, null, "inherit"]}
          >
            Espalhe essa notícia e faça mais gente conhecer esse movimento por
            uma economia mais justa!
          </Text>
        </HStack>
        {!isTop && (
          <Box w="154px" mr="100px">
            <ScrollLink
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              name="scroll to top"
              href="/"
            >
              <HStack
                display={{ base: "none", md: "flex" }}
                direction="row"
                w="100%"
                justifyContent="flex-end"
                alignItems="center"
                cursor="pointer"
                spacing={0}
              >
                <Text
                  minW="130px"
                  fontSize="15px"
                  fontWeight="500"
                  color="primary"
                  _focus={{ outline: "none" }}
                >
                  Voltar para o topo
                </Text>
                <Icon
                  as={BiUpArrowAlt}
                  fontWeight="700"
                  width={{ base: "32px", md: "16px" }}
                  height={{ base: "32px", md: "16px" }}
                />
              </HStack>
            </ScrollLink>
          </Box>
        )}
      </Container>
    </Flex>
  );
};

export default ShareFooter;
