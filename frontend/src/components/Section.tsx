import { Flex, FlexProps } from '@chakra-ui/react'

const Section: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      as="section"
      w="100%"
      flexDir="column"
      alignItems="center"
      position="relative"
      {...props}
    >
      {props.children}
    </Flex>
  );
}

export default Section;