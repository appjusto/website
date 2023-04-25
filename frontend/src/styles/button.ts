export default {
  baseStyle: {
    fontSize: "md",
    fontWeight: "700",
    borderRadius: "8px",
    w: { base: "100%", md: "auto" },
    _focus: { boxShadow: "none" },
  },
  sizes: {
    lg: {
      fontSize: "md",
    },
  },
  variants: {
    basic: {
      border: "1px solid black",
      _hover: { bg: "#F2F6EA" },
    },
    primary: {
      color: "black",
      bg: "primary",
      _hover: { bg: "primaryLight" },
    },
    secondary: {
      bg: "secondary",
      color: "black",
      _hover: { bg: "secondaryLight" },
    },
    tertiary: {
      bg: "tertiary",
      color: "black",
      _hover: { bg: "tertiaryLight" },
    },
    outlineWhite: {
      border: "1px solid white",
      color: "white",
      _hover: { bg: "#697667" },
    },
    outlineDark: {
      bg: "#C8D7CB",
      fontSize: "xs",
      _hover: { bg: "#697667" },
    },
    disabled: {
      bg: "#F6F6F6",
      color: "#697667",
    },
  },
  defaultProps: {
    variants: "basic",
  },
};
