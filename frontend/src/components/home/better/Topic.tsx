import { Box, BoxProps, Circle, Heading, HStack, Image } from '@chakra-ui/react';

interface TopicProps extends BoxProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const Topic: React.FC<TopicProps> = ({ label, size = 'lg', ...props }) => {
  return (
    <HStack mt="6" spacing={4} align="flex-start" {...props}>
      <Circle mt="3" size="4px" bg="black" />
      <Box color="black">
        <Heading
          as="h3"
          fontSize={size}
          fontWeight="500"
          lineHeight={size}
        >
          {label}
        </Heading>
      </Box>
    </HStack>
  );
};

export default Topic;
