import Image from 'next/image'
import { Flex } from '@chakra-ui/react'

interface PartnerBoxProps{
  image: string
  width: number
  height: number
}

const PartnerBox: React.FC<PartnerBoxProps> = ({ image, width, height }) => {
  return (
    <Flex
      position="relative"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      border="1px solid #F2F6EA"
      borderRadius="8px"
      minW="268px"
      h="160px"
    >
      <Image src={image} width={width} height={height} />
    </Flex>
  );
}

export default PartnerBox;