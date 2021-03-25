import { Heading, HeadingProps } from '@chakra-ui/react';

const SectionHeading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <Heading
      color="black"
      fontSize={{ base: '2xl', md: '32px' }}
      fontWeight="700"
      lineHeight={{ base: '28px', md: '38.4px' }}
      mb="4"
    >
      {children}
    </Heading>
  );
};

export default SectionHeading;
