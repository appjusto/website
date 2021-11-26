import { Box, Button, Center, Image, HStack } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import MediaBox from './MediaBox';
import React from 'react';

const Media: React.FC = () => {
  // state
  const [sliderMl, setSliderMl] = React.useState(0);
  const [sliderWidth, setSliderWidth] = React.useState<number>();
  // refs
  const sliderRef = React.createRef<HTMLDivElement>();
  // handlers
  const handleSlider = (direction: 'left' | 'right') => {
    const boxPerPage =  Math.trunc(sliderWidth / 312);
    if(direction === 'left') setSliderMl(prev => {
      if(prev < 0) return prev + 312;
      else return prev;
    });
    else setSliderMl(prev => {
      if(prev > (6 - boxPerPage) * -312) return prev - 312;
      return prev;
    });
  }
  // side effects
  React.useEffect(() => {
    if(!sliderRef.current) return;
    const getSliderWidth = () => {
      setSliderWidth(sliderRef.current.clientWidth)
    }
    getSliderWidth();
    window.addEventListener('resize', () => getSliderWidth)
    return () => window.removeEventListener('resize', getSliderWidth)
  }, [sliderRef.current]);
  // UI
  return (
    <Section mt="4" id="media" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '8'}} overflow="hidden">
        <SectionHeading w="100%" textAlign={{ md: 'center'}}>
          O que andam falando do AppJusto por aí
        </SectionHeading>
        <HStack
          ref={sliderRef}
          mt="10"
          ml={`${sliderMl}px`}
          spacing={4} h="100%"
          overflow={{base: 'scroll', lg: 'hidden'}}
          transition="margin 1s"
        >
          <MediaBox
            text="Aplicativo permite que entregadores decidam quanto vão cobrar por corrida"
            link="https://revistapegn.globo.com/Startups/noticia/2021/05/aplicativo-permite-que-entregadores-decidam-quanto-vao-cobrar-por-corrida.html"
            image="/logo-pegn.png"
            altImg="logo PEGN"
          />
          <MediaBox
            text="Aplicativo promete remuneração justa e autonomia para entregadores"
            link="https://www1.folha.uol.com.br/empreendedorsocial/2021/05/aplicativo-promete-remuneracao-justa-e-autonomia-para-entregadores.shtml"
            image="/logo-folha.png"
            altImg="logo Folha de São Paulo"
          />
          <MediaBox
            text="E se o entregador pudesse definir o valor do seu serviço? Saiba como o AppJusto quer tornar o delivery bom para todo mundo"
            link=""
            image="/logo-draft.png"
            altImg="logo Draft"
          />
          <MediaBox
            text="APP de delivery quer fazer da entrega um serviço mais justo"
            link=""
            image="/logo-fast-company.png"
            altImg="logo FastCompany"
          />
          <MediaBox
            text="Experiências alternativas no trabalho por plataformas no Brasil"
            link="https://digilabour.com.br/2021/06/07/experiencias-alternativas-no-trabalho-por-plataformas-no-brasil/"
            image="/logo-digilabour.png"
            altImg="logo Digilabour"
          />
          <MediaBox
            text="The 37 best cities in the world in 2021 - 31. São Paulo"
            link="https://www.timeout.com/things-to-do/best-cities-in-the-world"
            image="/logo-timeout.png"
            altImg="logo Timeout"
          />
        </HStack>
        <Center mt="8" display={{base: 'none', lg: 'flex'}}>
          <HStack spacing={4}>
            <Button
              bgColor="#C8D7CB"
              w="60px"
              h="60px"
              borderRadius="30px" onClick={() => handleSlider('left')}
              _hover={{ bgColor: '#F2FFE8'}}
            >
              <Image src="/icon-arrow-left.svg" />
            </Button>
            <Button
              bgColor="#C8D7CB"
              w="60px"
              h="60px"
              borderRadius="30px" onClick={() => handleSlider('right')}
               _hover={{ bgColor: '#F2FFE8'}}
              >
              <Image src="/icon-arrow-right.svg" />
            </Button>
          </HStack>
        </Center>
      </Container>
    </Section>
  );
}

export default Media;
