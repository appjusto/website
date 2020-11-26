import { Flex } from '@chakra-ui/react'

const NamesBox: React.FC = ({children}) => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      mb="16px"
    >
      {children}
    </Flex> 
  );
}

export default NamesBox