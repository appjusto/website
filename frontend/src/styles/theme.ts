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
  colors: {
    primary: "#78E08F",
    primaryDark: "#22543D",
    primaryLight: "#B8E994",
    secondary: "#FFBE00",
    secondaryLight: "#FFE493",
    tertiary: "#F17105",
    tertiaryLight: "#FFA356"
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
      fontSize: {base: '18px', lg: '20px'},
      lineHeight: {base: '20px', lg: '26px'},
      fontWeight: '400'
    },
    pBold: {
      fontFamily: 'Barlow, system-ui, sans-serif',
      fontSize: {base: '18px', lg: '20px'},
      lineHeight: {base: '20px', lg: '26px'},
      fontWeight: '700'
    }
  }
})

export default customTheme;
