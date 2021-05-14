import { Text, TextProps } from '@chakra-ui/react'

interface NetworkNamesProps extends TextProps {
  text: string
}

const NetworkNames: React.FC<NetworkNamesProps> = ({text, ...props}) => {
  return (
    <Text
      as="h3"
      textStyle="p"
      fontSize="16px"
      lineHeight="22px"
      {...props}
    >
      {text}
    </Text>
  );
}

export default NetworkNames
