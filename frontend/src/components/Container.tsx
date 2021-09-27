import { Container, ContainerProps } from '@chakra-ui/react'
import React from 'react';

const CustomContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => {
  return (
    <Container ref={ref} maxW={{ base: '100%', md: '740px', lg: '900px', xl: '1120px' }} pt="10" {...props}>
      {children}
    </Container>
  );
});

export default CustomContainer;
