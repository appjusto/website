import { Box, BoxProps, Heading, HStack, Image } from '@chakra-ui/react';

interface TopicProps extends BoxProps {
  label: string;
}

const Topic: React.FC<TopicProps> = ({ label, ...props }) => {
  return (
    <HStack mt="3" spacing={4} alignItems="center" {...props}>
      <Image src="/green-check.svg" width="24px" height="48px" />
      <Box color="black">
        <Heading as="h2" fontSize="lg" fontWeight="500" lineHeight="26px">
          {label}
        </Heading>
      </Box>
    </HStack>
  );
};

export default Topic;
