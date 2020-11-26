import Image from 'next/image'
import { Flex, Heading, Text, Link } from '@chakra-ui/react'

import CustomButton from '../../CustomButton'

interface HelpBoxProps {
  icon: string
  title: string
  text: string
  singleLink: boolean
  link1Label: string
  link1href: string
  link2Label?: string
  link2href?: string
  isLast: boolean
}

const HelpBox: React.FC<HelpBoxProps> = ({
  icon,
  title,
  text,
  singleLink,
  link1Label,
  link1href,
  link2Label,
  link2href,
  isLast
}) => {
  return (
    <Flex 
      w="100%"
      minH="260px"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      mt="80px"
      p="20px 24px"
      bg="white"
      border="2px solid black"
      borderRadius="8px"
      mr={["0", null, null, `${isLast ? "0" : "16px"}`]}
    >
      <Flex
        w="90px"
        h="90px"
        border="2px solid black"
        borderRadius="45px"
        bg="white"
        alignItems="center"
        justifyContent="center"
        mt="-60px"
      >
        <Image src={icon} width={48} height={48} />
      </Flex>
      <Heading 
        as="h2"
        fontSize="24px"
        mt="16px"
      >
        {title}
      </Heading>
      <Text 
        textStyle="p" 
        textAlign="center"
        m="16px 0"
      >
        {text}
      </Text>
      <Flex
        flexDir="row"
        w="100%"
      >
        <Link 
          href={link1href}
          isExternal
          w="100%"
        >
          <CustomButton label={link1Label} variant="secondaryLight"/>
        </Link>
        {
          !singleLink && (
            <Link 
              href={link2href}
              isExternal
              w="100%"
              ml="8px"
            >
              <CustomButton label={link2Label} variant="secondaryLight"/>
            </Link>
          )
        }
      </Flex>
    </Flex>
  );
}

export default HelpBox;