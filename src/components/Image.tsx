import { useState } from 'react';
import { Box, Image as ChakraImg, ImageProps } from '@chakra-ui/react'
import VisibilitySensor  from 'react-visibility-sensor';

import useClientWidth from '../hooks/useClientWidth';

interface ImgProps extends ImageProps{
  src: string
  srcMob?: string
}

const Image: React.FC<ImgProps> = ({
  src,
  srcMob,
  ...props
}) => {
  const [load, setLoad] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const width = useClientWidth()
  const handleVisibility = (value: boolean) => {
    if(value) {
      setIsActive(false)
      setLoad(true)
    }
  }
  return (
    <VisibilitySensor
      partialVisibility={true}
      active={isActive}
      onChange={handleVisibility}
    >
      <Box
        minW="1px"
        minH="1px"
      >
        {
          load && (
            <ChakraImg
              src={srcMob ? width < 1000 ? srcMob : src : src}
              ignoreFallback
              {...props}
            />
          )
        }
      </Box>
    </VisibilitySensor>
  );
}

export default Image;
