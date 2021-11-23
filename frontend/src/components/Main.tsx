import { Flex } from "@chakra-ui/react"

const Main: React.FC = ({ children }) => {
  return (
    <Flex
      as="main"
      w="100%"
      minH="100vh"
      flexDir="column"
      align="flex-start"
      >
      {children}
    </Flex>
  )
}

export default Main
