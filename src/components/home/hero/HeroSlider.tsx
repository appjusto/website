import {
  useState,
  useEffect,
  Children,
  cloneElement,
  memo,
  ReactElement
} from 'react'
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import Image from '../../Image'
interface SliderImageProps {
  isActive?: boolean
  src: string
  srcMob: string
  altImg: string
}

const SliderImage: React.FC<SliderImageProps> = memo(({
  isActive, src, srcMob, altImg, ...props
}) => {
  const styles = useMultiStyleConfig("Carousel", {})
  return (
    <Box
      sx={styles.imgBox}
      opacity={isActive ? 1 : 0}
    >
      <Image
        src={src}
        srcMob={srcMob}
        alt={altImg}
        width="100%"
        height="100%"
        {...props}
      />
    </Box>
  )
})

const SliderContainer = ({children}) => {
  const [active, setActive] = useState(1)
  const styles = useMultiStyleConfig("Carousel", {})
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
  return (
    <Box
      sx={styles.container}
    >
      {
        Children.map(children, (child: ReactElement<SliderImageProps>, index: number) => {
          return typeof child.type === 'string'
            ? child
            : cloneElement(child,
              {isActive: active === index +1 ? true: false}
            )
        })
      }
    </Box>
  )
}

const HeroSlider: React.FC = () => {
  return (
    <>
      <SliderContainer>
        <SliderImage
          src="/bg-hero1.jpg"
          srcMob="/bg-mobile-hero1.jpg"
          altImg="Entregador numa bicicleta"
        />
        <SliderImage
          src="/bg-hero2.jpg"
          srcMob="/bg-mobile-hero2.jpg"
          altImg="Vários pratos de comida"
        />
        <SliderImage
          src="/bg-hero3.jpg"
          srcMob="/bg-mobile-hero3.jpg"
          altImg="Pessoa recebendo uma caixa"
        />
      </SliderContainer>
    </>
  );
}

export default HeroSlider;

