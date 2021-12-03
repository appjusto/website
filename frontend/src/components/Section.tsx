import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react';

const Section = React.forwardRef<HTMLDivElement, FlexProps>(({children, ...props}, ref) => {
  return (
    <Flex
      ref={ref}
      as="section"
      w="100%"
      flexDir="column"
      alignItems="center"
      position="relative"
      {...props}
    >
      {children}
    </Flex>
  );
});

export default Section;
