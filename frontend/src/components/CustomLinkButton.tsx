import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'
import { useStyleConfig } from "@chakra-ui/react"

interface CustomLinkButtonProps extends LinkProps {
  name: string
  link: string
  linkLabel: string
  variant: string
  isExternal?: boolean
  isDownload?: boolean
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({
  name, link, linkLabel, variant, isExternal = true, isDownload = false, ...props
}) => {
  const styles = useStyleConfig("Button", {variant})
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
      {linkLabel}
    </Link>
  );
}

export default CustomLinkButton;
