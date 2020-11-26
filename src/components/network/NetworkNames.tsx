import { Text } from '@chakra-ui/react'

interface TextProps {
  text: string
}

const NetworkNames: React.FC<TextProps> = ({text}) => {
  return (
    <Text 
      as="h3"
      textStyle="p"
      fontSize="16px"
      lineHeight="22px"
    >
      {text}
    </Text> 
  );
}

export default NetworkNames