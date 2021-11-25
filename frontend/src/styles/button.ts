export default {
  baseStyle: {
    fontFamily: "Barlow",
    fontSize: "16px",
    borderRadius: "8px",
    w: "100%",
  },
  variants: {
    basic:{
      border: "2px solid black",
      fontSize: "15px",
      h: "48px",
      _hover: {bg: "#F2F6EA"}
    },
    primary: {
      bg: "primary",
      h: "48px",
      fontSize: "15px",
      lineHeight: "21px",
      _hover: {bg: "primaryLight"}
    },
    secondary: {
      bg: "secondary",
      h: "48px",
      fontSize: "18px",
      _hover: {bg: "secondaryLight"}
    },
    tertiary: {
      bg: "tertiary",
      h: "48px",
      fontSize: "18px",
      _hover: {bg: "tertiaryLight"}
    },
    outlineWhite: {
      px: '3',
      py: '2',
      border: '1px solid white',
      color: 'white',
      fontSize: '16px',
      lineHeight: "22px",
      fontWeight: '700',
      _hover: {bg: "#697667"}
    },
    outlineDark: {
      bg: "#C8D7CB",
      w: "auto",
      h: "22px",
      px: '3',
      py: '2',
      fontSize: "xs",
      _hover: {bg: "#697667"}
    },
    disabled: {
      bg: "#F6F6F6",
      color: '#697667',
      h: "48px",
      fontSize: "15px",
      lineHeight: "21px",
    },
  },
  defaultProps: {
    variants: "basic"
  },
}
