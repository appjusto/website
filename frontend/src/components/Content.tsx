import { Flex, FlexProps } from '@chakra-ui/react';

const Content: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      alignItems="flex-start"
      position="relative"
      maxW={{ md: '312px', lg: '480px', xl: '656px' }}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default Content;
