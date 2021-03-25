import { Flex, Box, Text } from '@chakra-ui/react';
import Container from '../../Container';
import Section from '../../Section';
import Image from '../../Image';
import Content from '../../Content';

const Alternative: React.FC = () => {
  return (
    <Section id="alternative">
      <Container pt="24">
        <Content>
          <Flex>
            <Box minW="336px">
              <Image src="/alternative.jpg" width="336px" />
            </Box>
            <Box ml={{base: '0', md: '12'}}>
              <Text textStyle="p">
                Hoje, os apps são fonte de renda para 3.8 milhões de autônomos no Brasil. Este modelo é dificil de ser combatido e contribui para aumento das desigualdades sociais.
              </Text>
              <Text mt="8" textStyle="p">
                O AppJusto é uma alternativa para todos ganharem mais, com autonomia e respeito.
              </Text>
            </Box>
          </Flex>
        </Content>
      </Container>
    </Section>
  );
}

export default Alternative;
