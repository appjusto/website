import { Link, LinkProps } from '@chakra-ui/react'
import { useStyleConfig } from "@chakra-ui/react"

import { usePageContext } from '../context'

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
  const { safeAnalytics } = usePageContext()
  const styles = useStyleConfig("Button", {variant})
  return (
    <Link
      href={link}
      sx={styles}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      mt="16px"
      {...props}
      onClick={() => safeAnalytics(`button_${name}`)}
      isExternal={isExternal}
      download={isDownload}
    >
      {linkLabel}
    </Link>
  );
}

export default CustomLinkButton;
