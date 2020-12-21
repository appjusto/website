import { Flex } from '@chakra-ui/react'
import Image from '../../Image'

interface PartnerBoxProps{
  image: string
  altImg: string
  width: number
  height: number
}

const PartnerBox: React.FC<PartnerBoxProps> = ({ image, altImg, width, height }) => {
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
      minW="268px"
      h="160px"
      m="0 8px"
      p="0 30px"
    >
      <Image src={image} alt={altImg} />
    </Flex>
  );
}

export default PartnerBox;
