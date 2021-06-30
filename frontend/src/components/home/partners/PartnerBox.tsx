import { Box, Flex, Image } from '@chakra-ui/react'
import CustomLinkButton from '../../CustomLinkButton';

interface PartnerBoxProps{
  image: string
  altImg: string
  width?: number | string
  height?: number | string
  link: string
  linkLabel: string
}

const PartnerBox: React.FC<PartnerBoxProps> = ({ image, altImg, width, height, link, linkLabel }) => {
  return (
    <Flex
      position="relative"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      border="1px solid #F2F6EA"
      borderRadius="8px"
      boxSizing="border-box"
      boxShadow="0 8px 16px -4px rgba(105, 118, 103, 0.1)"
      w="200px"
      minW="200px"
      h="144px"
      m="4px"
      p="8px 30px"
    >
      <Flex pos="relative" w="100%" h="64px" p="0" justifyContent="center" alignItems="center">
        <Image src={image} alt={altImg} width={width ? width : "100%"} height={height ? height : 'auto'}/>
      </Flex>
      <CustomLinkButton
        mt="4"
        name={link}
        link={link}
        linkLabel={linkLabel}
        variant="outlineDark"
      />
    </Flex>
  );
}

export default PartnerBox;
