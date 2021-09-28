import { Box, Icon, Link} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

interface WhatsappOrderButtonProps {
  limit: boolean;
  phone: string;
  delay: number;
}

export const WhatsappOrderButton = ({ limit, phone, delay }: WhatsappOrderButtonProps) => {
  // state
  const [show, setShow] = React.useState(false);
  // refs
  const isMounted = React.useRef(true);
  // side effects
  React.useEffect(() => {
    setTimeout(() => {
      if(isMounted.current) setShow(true);
    }, delay);
    return () => isMounted.current = false;
  }, [delay, isMounted])
  // UI
  if(!show) return <Box />
  return (
    <Box
      w={{base: limit ? '100%' : '100vw', lg: '100%'}}
      position={limit ? 'relative' : 'fixed'}
      bottom="0"
      transition="position 0.2s, transform 0.3s"
      left={{base: '0', lg: 'auto'}}
      maxW={{lg: '656px'}}
      bgColor="white"
      py="4"
      px={{base: limit ? '0' : '4', lg: '0'}}
      border="none"
    >
      <Link
        w='100%'
        h="48px"
        bgColor="#6CE787"
        borderRadius="lg"
        href={`https://wa.me/+55${phone}?text=Olá, gostaria de fazer um pedido!`}
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        fontSize="16px"
        lineHeight="22px"
        fontWeight="700"
        isExternal
      >
        <Icon as={FaWhatsapp} w="24px" h="24px" mr="2" />
        Pedir pelo WhatsApp
      </Link>
    </Box>
  )
}
