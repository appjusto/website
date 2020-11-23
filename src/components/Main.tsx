import { Flex } from "@chakra-ui/react"

const Main: React.FC = ({ children }) => {
  return (
    <Flex 
      as="main"
      w="100%" 
      flexDir="column"
      justify="center" 
      align="flex-start" 
      >
      {children}
    </Flex>
  )
}

export default Main