import { Flex } from '@chakra-ui/react'

const Section: React.FC = (props) => {
  return (
    <Flex
      as="section"
      w="100%"
      h="100vh"
      p="0 16px"
      {...props}
    >
      {props.children}
    </Flex>
  );
}

export default Section;