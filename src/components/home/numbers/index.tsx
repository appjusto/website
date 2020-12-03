import { useState, useEffect, useMemo, useContext } from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'

import Section from "../../Section";
import Container from '../../Container';
import NumberBox from './NumberBox';
import HelpBox from './HelpBox'
import Button from "../../CustomButton" 

import PageContext from '../../../context'

import { db } from '../../../../firebase'

interface SummaryProps {
  cities: number
  consumers: number
  couriers: number
  restaurants: number
}

const Numbers: React.FC = () => {
  const [summary, setSummary] = useState<SummaryProps>({
    cities: 0,
    consumers: 0,
    couriers: 0,
    restaurants: 0
  })
  const dbRef = useMemo(() => db.collection("summary").doc("data"),[])
  const { handleModalRecommendation } = useContext(PageContext)

  useEffect(() => {
    dbRef.onSnapshot(snaptshop => {
      const newSummary = snaptshop.data()
      setSummary(newSummary as SummaryProps)
    })
  }, [])

  return (
    <Section 
      id="numbers"
      bgColor="primary" 
      minHeight="100vh"
    >
      <Container 
        flexDir="column"
        pt="64px"
        pb="64px"
      >
        <Heading 
          as="h1" 
          fontSize="24px"
          display={["block", null, null, "none"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. 
          Faça a sua parte divulgando agora.
          <Box 
            position="relative"
            maxW="200px"
            mt="-22px"
            ml={["0", null, "340px"]}
            color="white"
          >
            <Image 
              src="/line-vector-w.svg" 
              width={544} 
              height={20} 
            />
          </Box>
        </Heading>
        <Heading 
          as="h1" 
          fontSize={["24px", null, null, "32px"]}
          display={["none", null, null, "block"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. <br/> 
          Faça a sua parte divulgando agora.
          <Box 
            position="relative"
            maxW="500px"
            mt="-16px"
            color="white"
          >
            <Image 
              src="/line-vector-w.svg" 
              width={544} 
              height={20} 
            />
          </Box>
        </Heading>
        <Text 
          mt="30px" 
          textStyle="p"
          fontSize={["16px", null, null, "18px"]}>
          Pré-cadastros até o momento:
        </Text>
        <Flex
          w="100%"
          flexDir={["column", null, null, "row"]}
        >
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox key="nb-cities" icon="/icon-shield.svg" number={summary.cities} label="Cidades" />
            <NumberBox key="nb-couriers" icon="/icon-bike.svg" number={summary.couriers} label="Entregadores" />
          </Flex>
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox key="nb-restaurants" icon="/icon-cutlery.svg" number={summary.restaurants} label="Restaurantes" />
            <NumberBox key="nb-consumers" icon="/icon-happy.svg" number={summary.consumers} label="Consumidores" />
          </Flex>
        </Flex>
        <Heading
          mt="32px" 
          as="h1" 
          fontSize={["24px", null, null, "32px"]}
        >
          Formas de ajudar
        </Heading>
        <Text 
          textStyle="p"
          fontSize={["16px", null, null, "18px"]}>
          Entenda como você pode ajudar o AppJusto a chegar mais longe:
        </Text>
        <Flex
          flexDir={["column", null, null, "row"]}
        >
          <HelpBox 
            icon="/icon-promotion.svg"
            title="Indique o AppJusto"
            text="Indique o AppJusto para amigos, entregadores, restaurantes, e todos que desejam um modelo mais justo."
            isLast={false}
          >
            <Button 
              label="Indicar o AppJusto" 
              variant="secondaryLight"
              handleClick={() => handleModalRecommendation()}
            />
          </HelpBox>
          <HelpBox 
            icon="/icon-high-five.svg"
            title="Faça parte do AppJusto"
            text="Estamos em busca de voluntários, empresas parceiras, investidores, e todos que podem colaborar ativamente com esse movimento."
            isLast={false}
          >
            <Button label="Quero ser parceiro" variant="secondaryLight"/>
          </HelpBox>
          <HelpBox 
            icon="/icon-chat-bubble.svg"
            title="Responda a pesquisa"
            text="Estamos ouvindo clientes, entregadores e restaurantes para criar uma plataforma pensada desde o início para todos."
            isLast={true}
          >
            <Button
              link="/pesquisa" 
              label="Responder pesquisa" 
              variant="secondaryLight"/>
          </HelpBox>
        </Flex>
      </Container>
    </Section>
  );
}

export default Numbers;