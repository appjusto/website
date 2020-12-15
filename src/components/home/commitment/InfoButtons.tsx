import { Flex, Heading, Stack, Box, BoxProps } from '@chakra-ui/react'
import CustomButton from '../../CustomButton'
import CustomLinkButton from '../../CustomLinkButton'

const InfoButtons: React.FC<BoxProps> = (props) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      minH="90px"
      alignItems="flex-start"
      mb="64px"
      {...props}
    >
      <Flex 
        w="100%"
        flexDir="column"
        justifyContent="flex-start"
        maxW="464px"
      >
        <Heading 
          as="h3"
          fontSize="20px"
          lineHeight="26px"
          fontWeight="500"  
        >
          Saiba mais como vamos funcionar:
        </Heading>
        <Stack
          direction="row"
          spacing={4}
        >
          <Box
            w="100%"
            h="48px"
            maxW="224px"
          >
            <CustomButton 
              variant="secondaryLight" 
              label="Sobre o AppJusto"
              link="/sobre-o-appjusto"
            />
          </Box>
          <Box
            w="100%"
            h="48px"
            maxW="224px"
          >
            <CustomLinkButton
              variant="secondaryLight" 
              linkLabel="Baixar apresentação"
              link="https://drive.google.com/file/d/1pMniZvENzeChLN3ERibhKdEHrlq75PZ2/view?usp=sharing"
              isDownload={true}
              textAlign="center"
            />
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default InfoButtons;