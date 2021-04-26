export default {
  baseStyle: {
    fontFamily: "Barlow",
    fontSize: "16px",
    border: "2px solid black",
    borderRadius: "8px",
    w: "100%",
  },
  variants: {
    basic:{
      fontSize: "15px",
      h: "48px",
      _hover: {bg: "#F2F6EA"}
    },
    primary: {
      bg: "primary",
      h: "48px",
      fontSize: "15px",
      lineHeight: "21px",
      border: "none",
      _hover: {bg: "primaryLight"}
    },
    secondary: {
      bg: "secondary",
      h: "60px",
      fontSize: "18px",
      _hover: {bg: "#FF7F22"}
    },
    secondaryLight: {
      bg: "secondaryLight",
      h: "48px",
      fontSize: "15px",
      padding: "0 8px",
      _hover: {bg: "#FFC093"}
    },
    secondaryRegistration: {
      bg: "secondaryLight",
      h: "56px",
      fontSize: "16px",
      lineHeight: "22px",
      _hover: {bg: "#FFC093"}
    },
    disabled: {
      bg: "#F6F6F6",
      color: '#697667',
      h: "48px",
      fontSize: "15px",
      lineHeight: "21px",
      border: "none",
    },
  },
  defaultProps: {
    variants: "basic"
  },
}
