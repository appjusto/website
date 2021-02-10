import { useState, useEffect, useRef } from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import { useCountUp } from 'react-countup';
import useVisibilitySensor from '@rooks/use-visibility-sensor';

import Image from '../../Image'

interface NumberBoxProps {
  icon: string
  altImg: string
  number: number
  label: string
}

const NumberBox: React.FC<NumberBoxProps> = ({ icon, altImg, number, label }) => {
  const [countUpActive, setCountUpActive] = useState(false)
  const boxRef = useRef(null)
  const { countUp, start, update } = useCountUp({
    start: 0,
    end: number,
    delay: 1000,
    duration: 5,
    onStart: () => setCountUpActive(true),
  });
  const { isVisible } = useVisibilitySensor(boxRef, {
    partialVisibility: true,
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true,
  });
  useEffect(() => {
    if(isVisible && !countUpActive) {
      start()
    }
  }, [isVisible])
  useEffect(() => {
    if(countUpActive) {
      update(number)
    }
  }, [number])

  return (
    <Flex
      ref={boxRef}
      w="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mt="22px"
    >
      <Box
        w="24px"
        h="24px"
      >
        <Image src={icon} alt={altImg} />
      </Box>
      <Text
        fontFamily="Barlow"
        fontSize="64px"
        lineHeight="76,8px"
        fontWeight="700"
        h="auto"
      >
        +{countUp}
      </Text>
      <Text textStyle="p" opacity="0.6">
        {label}
      </Text>
    </Flex>
  );
}

export default NumberBox;
