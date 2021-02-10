import { Box, BoxProps } from '@chakra-ui/react'
import Image from './Image'

interface Props extends BoxProps {
  color?: string
}

const Line: React.FC<Props> = ({color, ...props}) => {
  let src = "/line-vector-w.svg"
  let altImg = "Linha branca"
  if(color === "yellow") {
    src = "/line-vector-y.svg"
    altImg="Linha amarela"
  }
  if(color === "green") {
    src = "/line-vector-g.svg"
    altImg="Linha verde"
  }
  return (
    <Box
      position="relative"
      {...props}
    >
      <Image src={src} alt={altImg} />
    </Box>
  );
}

export default Line;
