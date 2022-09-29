import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import { colors } from './colors'
import Select from './select'
import Input from './input'
import Button from './button'
import Carousel from "./carousel"
import Checkbox from "./checkbox"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  '2xl': "96em"
})

const customTheme = extendTheme({
  breakpoints,
  fonts: {
    body: 'Barlow, system-ui, sans-serif',
    heading: 'Barlow, system-ui, sans-serif',
    mono: 'Barlow, system-ui, sans-serif'
  },
  colors,
  components: {
    Select,
    Input,
    Button,
    Carousel,
    Checkbox
  },
  textStyles: {
    p: {
      fontFamily: 'Barlow, system-ui, sans-serif',
      fontSize: {base: '18px', lg: '20px'},
      lineHeight: {base: '20px', lg: '26px'},
      fontWeight: '400'
    }
  }
})

export default customTheme;
