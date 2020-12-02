import {Heading, HeadingProps} from '@chakra-ui/react'

interface TextProps extends HeadingProps {
  text: string
}

export const SectionTitle: React.FC<TextProps> = ({text, ...props}) => {
  return (
    <Heading 
      as="h2"
      fontSize="24px"
      lineHeight="26px"
      mb="26px"
      {...props}
    >
      {text}
    </Heading>
  )
} 

export const Title: React.FC<TextProps> = ({text, ...props}) => {
  return (
    <Heading 
      as="h3"
      fontSize="16px"
      lineHeight="22px"
      {...props}
    >
      {text}
    </Heading>
  )
} 