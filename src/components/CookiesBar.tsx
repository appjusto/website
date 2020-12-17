import { Flex, Stack, Text, Button, useStyleConfig } from '@chakra-ui/react'

import { usePageContext } from '../context'

const CookiesBar: React.FC = () => {
  const { contextDispatch } = usePageContext()
  const styles = useStyleConfig("Button", {variant: "basic"})
  return (
    <Flex
      w="100%"
      position="fixed"
      bottom="0"
      justifyContent="center"
      alignItems="center"
      bgColor="secondaryLight"
      zIndex="2001"
    >
      <Stack
        w={["100%", "90%"]}
        maxW="1136px"
        direction={["column", null, "row"]}
        spacing={2}
        p="16px"
      >
        <Text
          textStyle="p"
          fontSize="15px"
          lineHeight="21px"
        >
        <Text as="span" fontWeight="700">Política de cookies:</Text> nós usamos
        cookies e outras tecnologias semelhantes para melhorar a sua experiência.
        Ao utilizar nossos serviços, você concorda com tal monitoramento.
        </Text>
        <Button
          sx={styles}
          bgColor="white"
          maxW="132px"
          onClick={() => contextDispatch({ type: 'handle_cookiesBar'})}
        >
          Aceitar
        </Button>
      </Stack>
    </Flex>
  );
}

export default CookiesBar;
