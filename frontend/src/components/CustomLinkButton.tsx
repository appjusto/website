import NextLink from 'next/link'
import { Button, ButtonProps, Link, Image } from '@chakra-ui/react'

interface CustomLinkButtonProps extends ButtonProps {
  link: string
  linkLabel: string
  variant?: string
  icon?: string;
  iconAlt?: string;
  isExternal?: boolean;
  isDownload?: boolean;
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({
  link, linkLabel, variant = 'basic', icon, iconAlt, isExternal, isDownload, w = 'auto', ...props
}) => {
  // UI
  if(isExternal) {
    return (
      <Link
        w={w}
        _focus={{ outline: 'none'}}
        _hover={{ textDecor: 'none'}}
        href={link}
        aria-label={linkLabel}
        isExternal
        download={isDownload}
      >
        <Button variant={variant} w="100%" {...props}>
          {icon && <Image src={icon} alt={iconAlt ?? 'ícone'} w="20px" h="22px" ml="-4" mr="2" ignoreFallback />}
          {linkLabel}
        </Button>
      </Link>
    )
  }
  return (
    <NextLink  href={link} passHref>
      <Button variant={variant} {...props}>
        {icon && <Image src={icon} w="20px" h="22px" ml="-4" mr="2" ignoreFallback />}
        {linkLabel}
      </Button>
    </NextLink>
  );
}

export default CustomLinkButton;
