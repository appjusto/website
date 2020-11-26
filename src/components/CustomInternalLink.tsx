import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

interface CustomLinkProps extends LinkProps {
  link: string
  linkLabel: string
}

const CustomInternalLink: React.FC<CustomLinkProps> = ({
  link, linkLabel, ...props
}) => {
  return (
    <NextLink href={link} passHref>
      <Link 
        textDecoration="underline"
        _hover={{color: "#055AFF"}}
        {...props}
      >
        {linkLabel}
      </Link>
    </NextLink>
  );
}

export default CustomInternalLink;