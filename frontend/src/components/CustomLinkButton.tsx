import NextLink from 'next/link'
import { Link, LinkProps, Image } from '@chakra-ui/react'
import { useStyleConfig } from "@chakra-ui/react"

interface CustomLinkButtonProps extends LinkProps {
  name: string
  link: string
  linkLabel: string
  variant: string
  icon?: string;
  iconAlt?: string;
  isExternal?: boolean
  isDownload?: boolean
  isDisabled?: boolean
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({
  name, link, linkLabel, variant, icon, iconAlt, isExternal = true, isDownload = false, isDisabled, ...props
}) => {
  const styles = useStyleConfig("Button", {variant})
  if(isDisabled) {
    return (
      <Link
        sx={styles}
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        mt="16px"
        cursor="unset"
        {...props}
      >
        {icon && <Image src={icon} alt={iconAlt ?? 'ícone'} w="20px" h="22px" ml="-4" mr="2" />}
        {linkLabel}
      </Link>
    )
  }
  if(!isExternal) {
    return (
      <NextLink href={link} passHref>
        <Link
          sx={styles}
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          mt="16px"
          {...props}
        >
          {icon && <Image src={icon} alt={iconAlt ?? 'ícone'} w="20px" h="22px" ml="-4" mr="2" />}
          {linkLabel}
        </Link>
      </NextLink>
    )
  }
  return (
    <Link
      href={link}
      sx={styles}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      mt="16px"
      {...props}
      isExternal={isExternal}
      download={isDownload}
    >
      {icon && <Image src={icon} w="20px" h="22px" ml="-4" mr="2" />}
      {linkLabel}
    </Link>
  );
}

export default CustomLinkButton;
