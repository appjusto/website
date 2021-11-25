import { Box, BoxProps, Heading, Image } from '@chakra-ui/react';

interface StackholderBoxProps extends BoxProps {
  image: string;
  title: string;
}

const StackholderBox: React.FC<StackholderBoxProps> = ({ image, title, children, ...props }) => {
  return (
    <Box p="6" bgColor="#F6F6F6" borderRadius="16px" {...props}>
      <Box w="112px" h="96px">
        <Image src={image} />
      </Box>
      <Heading
        mt="6"
        as="h2"
        fontSize="24px"
        lineHeight="30px"
        fontWeight="700"
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default StackholderBox;
