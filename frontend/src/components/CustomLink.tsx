// import { Link, LinkProps } from "@chakra-ui/react";
import { Link, LinkProps } from "@chakra-ui/next-js";

interface CustomLinkProps extends LinkProps {
  name: string;
  linkLabel?: string;
  isUnderline?: boolean;
  isExternal?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  name,
  linkLabel,
  isUnderline,
  isExternal,
  children,
  ...props
}) => {
  if (!isExternal) {
    return (
      <Link
        textDecoration={isUnderline ? "underline" : "none"}
        _focus={{ outline: "none" }}
        {...props}
      >
        {linkLabel}
      </Link>
    );
  }
  return (
    <Link
      textDecoration={isUnderline ? "underline" : "none"}
      _focus={{ outline: "none" }}
      {...props}
      target="_blank"
      // isExternal
    >
      {linkLabel ? linkLabel : children}
    </Link>
  );
};

export default CustomLink;
