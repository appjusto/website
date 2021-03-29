import { Heading, HeadingProps } from '@chakra-ui/react';

const SectionHeading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <Heading
      color="black"
      fontSize={{ base: '24px', lg: '32px' }}
      fontWeight="700"
      lineHeight={{ base: '30px', lg: '38.4px' }}
      mb="4"
    >
      {children}
    </Heading>
  );
};

export default SectionHeading;
