import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Box, useMultiStyleConfig } from '@chakra-ui/react'

const HeroSlider: React.FC = () => {
  const [active, setActive] = useState(1)
  const styles = useMultiStyleConfig("Carousel", {})
  useEffect(() => {
    let sliderInterval = setInterval(() => {
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
        <Box 
          sx={styles.imgBox}
          opacity={active === 1 ? 1 : 0}
        >
          <Image 
          src="/bg-mobile-hero1.png"
          alt="Entregador numa bicicleta" 
          width={360} 
          height={482} 
          layout="responsive" 
          loading="eager"
        />
        </Box>
        <Box 
          sx={styles.imgBox}
          opacity={active === 2 ? 1 : 0}
        >
          <Image 
          src="/bg-mobile-hero2.png"
          alt="Vários pratos de comida" 
          width={360} 
          height={482} 
          layout="responsive" 
          loading="eager"
        />
        </Box>
        <Box 
          sx={styles.imgBox}
          opacity={active === 3 ? 1 : 0}
        >
          <Image 
          src="/bg-mobile-hero3.png"
          alt="Pessoa recebendo uma caixa" 
          width={360} 
          height={482} 
          layout="responsive" 
          loading="eager"
        />
        </Box>
      </Box>
      <Box
        sx={styles.container}
        display={["none", null, null, "block"]}
      >
        <Box 
          sx={styles.imgBox}
          opacity={active === 1 ? 1 : 0}
        >
          <Image 
          src="/bg-hero1.png"
          alt="Entregador numa bicicleta"  
          width={1440} 
          height={600} 
          layout="responsive" 
          loading="eager"
        />
        </Box>
        <Box 
          sx={styles.imgBox}
          opacity={active === 2 ? 1 : 0}
        >
          <Image 
          src="/bg-hero2.png" 
          alt="Vários pratos de comida" 
          width={1440} 
          height={600} 
          layout="responsive" 
          loading="eager"
        />
        </Box>
        <Box 
          sx={styles.imgBox}
          opacity={active === 3 ? 1 : 0}
        >
          <Image 
          src="/bg-hero3.png"
          alt="Pessoa recebendo uma caixa"  
          width={1440} 
          height={600} 
          layout="responsive" 
          loading="eager"
        />
        </Box>
      </Box>
    </>
  );
}

export default HeroSlider;