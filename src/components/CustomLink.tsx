import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

interface CustomLinkProps extends LinkProps {
  link: string
  linkLabel: string
  internal: boolean
}

const CustomLink: React.FC<CustomLinkProps> = ({
  link, linkLabel, internal, ...props
}) => {
  if(internal) {
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
    )
  }
  return (
    <Link 
      href={link}
      textDecoration="underline"
      _hover={{color: "#055AFF"}}
      {...props}
      isExternal
    >
      {linkLabel}
    </Link>
  );
}

export default CustomLink;