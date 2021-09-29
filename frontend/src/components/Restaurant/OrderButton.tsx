import { Box, Icon, Link} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

export type Mode = 'whatsapp' | 'in-store';

interface OrderButtonProps {
  mode: Mode;
  limit: boolean;
  phone: string;
}

export const OrderButton = ({ mode, limit, phone }: OrderButtonProps) => {
  // state
  const [show, setShow] = React.useState(false);
  const [mount, setMount] = React.useState(false);
  // helpers
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  const storeLink = `https://${env ?? 'live'}.login.appjusto.com.br/consumer/store`;
  const btnLink = mode === 'whatsapp' ? `https://wa.me/+55${phone}?text=Olá, gostaria de fazer um pedido!` :
    storeLink;
  const btnLabel = mode === 'whatsapp' ? 'Pedir pelo WhatsApp' : 'Pedir pelo AppJusto';
  // side effects
  React.useEffect(() => {
    if(mount && mode !== 'in-store') setShow(true);
  }, [mode, mount]);
  React.useEffect(() => {
    setTimeout(() => setMount(true), 2000);
  }, [])
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
        _hover={{ bgColor: '#B8E994' }}
        borderRadius="lg"
        href={btnLink}
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        fontSize="16px"
        lineHeight="22px"
        fontWeight="700"
        isExternal
      >
        {mode === 'whatsapp' && <Icon as={FaWhatsapp} w="24px" h="24px" mr="2" />}
        {btnLabel}
      </Link>
    </Box>
  )
}
