import { Flex, Heading, Stack, Box, BoxProps } from '@chakra-ui/react'
import CustomButton from '../../CustomButton'

const InfoButtons: React.FC<BoxProps> = (props) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      minH="90px"
      alignItems={["flex-start", "flex-start", "flex-start", "flex-end"]}
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
          fontSize="18px"
          lineHeight="26px"  
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
          />
          </Box>
          <Box
            w="100%"
            h="48px"
            maxW="224px"
          >
            <CustomButton 
            variant="secondaryLight" 
            label="Baixar apresentação"
          />
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default InfoButtons;