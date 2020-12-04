import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import Select from './select'
import Input from './input'
import Button from './button'
import Carousel from "./carousel"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  xxl: "100em"
})

const customTheme = extendTheme({
  breakpoints,
  fonts: {
    body: 'Barlow, system-ui, sans-serif',
    heading: 'Barlow, system-ui, sans-serif',
    mono: 'Barlow, system-ui, sans-serif'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    h: '24px',
    p: '16px'
  },
  radii: {
    sm: '5px',
    md: '8px',
  },
  colors: {
    primary: "#78E08F",
    primaryDark: "#22543D",
    primaryLight: "#B8E994",
    secondary: "#FFBE00",
    secondaryLight: "#FFE493"
  },
  components: {
    Select,
    Input,
    Button,
    Carousel
  },
  textStyles: {
    p: {
      fontFamily: 'Barlow, system-ui, sans-serif',
      fontSize: "16px",
      lineHeight: "22px"  
    }
  }
})

export default customTheme;