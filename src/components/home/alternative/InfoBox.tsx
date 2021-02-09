import { Flex, Box, Heading, Text, Icon } from '@chakra-ui/react';
import { BiDownArrowAlt  } from 'react-icons/bi';

import Image from '../../Image'

interface InfoBoxProps{
  image: string
  altImg: string
  title: string
  textArray: string[]
}

const InfoBox: React.FC<InfoBoxProps> = ({ image, altImg, title, textArray }) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      p="0 24px 64px"
      m="0 8px"
      border="1px solid #C8D7CB"
      borderRadius="8px"
      boxShadow="0 8px 16px -4px rgba(105, 118, 103, 0.1)"
      w="100%"
      minW="288px"
      minH="462px"
    >
      <Box
        position="relative"
        w="96px"
        h="96px"
        mt="-46px"
      >
        <Image src={image} alt={altImg} />
      </Box>
      <Heading
        as="h2"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        fontSize="24px"
        lineHeight="30px"
        p="16px 0"
      >
        {title}
        <Icon as={BiDownArrowAlt} m="18px 0 21px"/>
      </Heading>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        {
          textArray?.map( (text, index) => (
              <Box w="100%" key={index}>
                <Text
                  textStyle="p"
                  textAlign="center"
                  fontSize="18px"
                  lineHeight="26px"
                  fontWeight="500"
                  color="#697667"
                >
                  {text}
                </Text>
                {
                  textArray.length !== index + 1 && (
                    <Text
                      textStyle="p"
                      textAlign="center"
                      fontSize="24px"
                      lineHeight="26px"
                      fontWeight="500"
                      color="primary"
                    >
                      -
                    </Text>
                  )
                }
              </Box>
            )
          )
        }
      </Flex>
    </Flex>
  );
}

export default InfoBox;
