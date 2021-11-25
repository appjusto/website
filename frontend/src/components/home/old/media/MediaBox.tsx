import { Box, Image, Text } from '@chakra-ui/react'
import CustomLinkButton from '../../../CustomLinkButton';

interface MediaBoxProps{
  image: string
  altImg: string
  link: string
  text: string
}

const MediaBox: React.FC<MediaBoxProps> = ({ image, altImg, link, text }) => {
  return (
    <Box
      position="relative"
      bgColor="#F6F6F6"
      borderRadius="8px"
      w="320px"
      h="350px"
      p="6"
    >
      <Box pos="relative" h="40px">
        <Image src="/icon-quote.svg" alt="áspas verdes" />
      </Box>
      <Box mt="4" h="120px">
        <Text fontFamily="Barlow" fontSize="24px" fontWeight="500" fontStyle="italic" lineHeight="30px">
          {text}
        </Text>
      </Box>
      <Box pos="relative" h="90px">
        <Image src={image} alt={altImg} />
      </Box>
      <CustomLinkButton
        mt="4"
        name={link}
        link={link}
        linkLabel="LER MATÉRIA"
        variant="outlineDark"
      />
    </Box>
  );
}

export default MediaBox;
