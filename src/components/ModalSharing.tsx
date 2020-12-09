import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import {
  Flex,
  Box, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseButton,
  ModalBody,
  Heading,
  Text,
  Icon
} from '@chakra-ui/react'
import { 
  FaWhatsappSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare 
} from 'react-icons/fa'

import PageContext from '../context/'
import ShareLink from './ShareLink'

const ModalSharing: React.FC = () => {
  const [mainUrl, setMainUrl] = useState("")
  const [sharingMsg, setSharingMsg] = useState("")
  const { showModalSharing, handleModalSharing } = useContext(PageContext)
  useEffect(() => {
    let url = "https://appjusto-ladingpage.vercel.app/"
    if(process.env.NODE_ENV === "production") {
      const newUrl = window.location.href
      const main = newUrl.split("//")[1].split("/")[0]
      url = `https://${main}`
    }
    const message = encodeURIComponent("Appjusto - Mais do que um App, somos um movimento!")
    setMainUrl(url)
    setSharingMsg(message)
  }, [])
  return (
    <Modal 
      id="ModalSharing"
      size="full"
      blockScrollOnMount={true} 
      isOpen={showModalSharing} 
      onClose={() => handleModalSharing()}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW="752px"
          maxH="538px"
        >
          <ModalCloseButton 
            border="2px solid black"
            borderRadius="8px"
            zIndex="100"
          />
          <ModalBody pt="0" pb="60px">
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                position="relative"
                maxW="260px"
                mr="-120px"
              >
                <Image 
                  src="/illustration-big-user.svg"
                  alt="Ilustração de uma mão entregando uma caixa para outra mão" 
                  width={275} 
                  height={200}
                />
              </Box>
              <Box
                position="relative"
              >
                <Image 
                  src="/obrigado.svg"
                  alt="Obrigado!" 
                  width={213} 
                  height={53}
                />
              </Box>
              <Heading 
                as="h2"
                fontSize="24px"
                lineHeight="30px"
                textAlign="center"
                m="8px 0 16px"  
              >
                Compartilhe
              </Heading>
              <Text 
                textStyle="p" 
                textAlign="center" 
                maxW="560px"
                mb="40px"
              >
                Texto de apoio.
              </Text>
              <Flex
                w="100%"
                maxW="300px"
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <ShareLink 
                  link={`https://api.whatsapp.com/send?text=${sharingMsg}%20${mainUrl}`}>
                  <Icon as={FaWhatsappSquare}  
                    w="60px"
                    h="60px"
                  />
                </ShareLink>
                <ShareLink link={`https://www.facebook.com/sharer/sharer.php?u=${mainUrl}%3Fsource%3Dsocial.fb&display=page&facebook%2Fclose`}>
                  <Icon as={FaFacebookSquare}  
                    w="60px"
                    h="60px"
                  />
                </ShareLink>
                <ShareLink link={`https://www.linkedin.com/shareArticle?mini=true&url=${mainUrl}&source=AppJusto`}>
                  <Icon as={FaLinkedin}  
                    w="60px"
                    h="60px"
                  />
                </ShareLink>
                <ShareLink link={`https://twitter.com/intent/tweet?url=${mainUrl}&text=${sharingMsg}`}>
                  <Icon as={FaTwitterSquare}  
                    w="60px"
                    h="60px"
                  />
                </ShareLink>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalSharing;

//https://www.facebook.com/v5.0/dialog/share?app_id=542599432471018&href=${mainUrl}%3Fsource%3Dsocial.fb&display=page&facebook%2Fclose`