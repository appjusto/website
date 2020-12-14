import { Link, LinkProps } from '@chakra-ui/react'
import { useStyleConfig } from "@chakra-ui/react"

interface CustomLinkButtonProps extends LinkProps {
  link: string
  linkLabel: string
  variant: string
  isExternal?: boolean
  isDownload?: boolean
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({
  link, linkLabel, variant, isExternal = true, isDownload = false, ...props
}) => {
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
      isExternal={isExternal}
      download={isDownload}
    >
      {linkLabel}
    </Link>
  );
}

export default CustomLinkButton;