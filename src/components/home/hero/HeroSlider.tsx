import {
  useState,
  useEffect,
  Children,
  cloneElement,
  memo,
  SetStateAction,
  ReactElement
} from 'react'

import { Box, useMultiStyleConfig } from '@chakra-ui/react'

import { getCorrectDimension } from '../../../utils'

import Hero1 from '../../../../public/bg-hero1.webp'
import Hero2 from '../../../../public/bg-hero2.webp'
import Hero3 from '../../../../public/bg-hero3.webp'
import HeroMob1 from '../../../../public/bg-mobile-hero1.webp'
import HeroMob2 from '../../../../public/bg-mobile-hero2.webp'
import HeroMob3 from '../../../../public/bg-mobile-hero3.webp'

interface SliderImageProps {
  isActive?: boolean
  clientWidth?: number
  image: string
  altImg: string
  isMobile?: boolean
}

const SliderImage: React.FC<SliderImageProps> = memo(({
  isActive, clientWidth, image, altImg, isMobile
}) => {
  const styles = useMultiStyleConfig("Carousel", {})
  if(isMobile && clientWidth > 1000) {
    return <Box as="div"/>
  }
  if(!isMobile && clientWidth < 1000) {
    return <Box as="div"/>
  }
  if(clientWidth === 0) {
    return <Box as="div"/>
  }
  return (
    <Box
      sx={styles.imgBox}
      opacity={isActive ? 1 : 0}
    >
      <img
      src={image}
      alt={altImg}
      //width={isMobile ? 360 : 1440}
      //height={isMobile ? 482 : 600}
      width="100%"
      height="100%"
    />
    </Box>
  )
})

const SliderContainer = ({isMobile, children}) => {
  const [active, setActive] = useState(1)
  const [clientWidth, setClientWidth] = useState(0)
  const styles = useMultiStyleConfig("Carousel", {})
  async function getWidth() {
    const width = await getCorrectDimension("width")
    setClientWidth(width as SetStateAction<number>)
  }
  useEffect(() => {
    getWidth()
  }, [])
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActive(prevState => {
        if(prevState < 3) {
          return prevState + 1
        } else {
          return 1
        }
      })
    }, 3000)
    return () => clearInterval(sliderInterval)
  }, [])
  useEffect(() => {
    window.addEventListener('resize', getWidth)
    return () => window.removeEventListener('resize', getWidth)
  }, [])
  return (
    <Box
      sx={styles.container}
      display={
        isMobile ? ["block", null, null, "none"]: ["none", null, null, "block"]
      }
    >
      {
        Children.map(children, (child: ReactElement<SliderImageProps>, index: number) => {
          return typeof child.type === 'string'
            ? child
            : cloneElement(child,
              {isActive: active === index +1 ? true: false, clientWidth}
            )
        })
      }
    </Box>
  )
}

const HeroSlider: React.FC = () => {
  return (
    <>
      <SliderContainer isMobile={true}>
        <SliderImage
          isMobile
          image={HeroMob1}
          altImg="Entregador numa bicicleta"
        />
        <SliderImage
          isMobile
          image={HeroMob2}
          altImg="Vários pratos de comida"
        />
        <SliderImage
          isMobile
          image={HeroMob3}
          altImg="Pessoa recebendo uma caixa"
        />
      </SliderContainer>
      <SliderContainer isMobile={false}>
        <SliderImage
          image={Hero1}
          altImg="Entregador numa bicicleta"
        />
        <SliderImage
          image={Hero2}
          altImg="Vários pratos de comida"
        />
        <SliderImage
          image={Hero3}
          altImg="Pessoa recebendo uma caixa"
        />
      </SliderContainer>
    </>
  );
}

export default HeroSlider;

