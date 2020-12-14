import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Box, useMultiStyleConfig } from '@chakra-ui/react'

interface SliderImageProps {
  index: number 
  active: number 
  image: string 
  altImg: string 
  isMobile?: boolean 
}

const SliderImage: React.FC<SliderImageProps> = ({
  index, active, image, altImg, isMobile
}) => {
  const styles = useMultiStyleConfig("Carousel", {})
  return (
    <Box 
      sx={styles.imgBox}
      opacity={active === index ? 1 : 0}
    >
      <Image 
      src={image}
      alt={altImg} 
      width={isMobile ? 360 : 1440} 
      height={isMobile ? 482 : 600} 
      layout="responsive" 
      loading="eager"
    />
    </Box>
  )
}

const HeroSlider: React.FC = () => {
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
    <>
      <Box
        sx={styles.container}
        display={["block", null, null, "none"]}
      >
        <SliderImage 
          isMobile
          index={1}
          active={active}
          image="/bg-mobile-hero1.png"
          altImg="Entregador numa bicicleta"
        />
        <SliderImage
          isMobile
          index={2}
          active={active}
          image="/bg-mobile-hero2.png"
          altImg="Vários pratos de comida"
        />
        <SliderImage
          isMobile
          index={3}
          active={active}
          image="/bg-mobile-hero3.png"
          altImg="Pessoa recebendo uma caixa"
        />
      </Box>
      <Box
        sx={styles.container}
        display={["none", null, null, "block"]}
      >
        <SliderImage
          index={1}
          active={active}
          image="/bg-hero1.png"
          altImg="Entregador numa bicicleta"
        />
        <SliderImage
          index={2}
          active={active}
          image="/bg-hero2.png"
          altImg="Vários pratos de comida"
        />
        <SliderImage
          index={3}
          active={active}
          image="/bg-hero3.png"
          altImg="Pessoa recebendo uma caixa"
        />
      </Box>
    </>
  );
}

export default HeroSlider;