import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { Button, Flex, Icon, Text } from 'native-base'

import LogoSvg from '../../assets/logo.svg'

export default function Home() {
  return (
    <Flex
      flex="1"
      align="center"
      justify="center"
      bg={{
        linearGradient: {
          colors: ['orange.600', 'gray.950'],
          start: [0, 1],
          end: [0, 0],
        },
      }}
    >
      <Text fontSize="2xl" color="orange.600">
        Working on Iphone
      </Text>
      <Text fontSize="2xl" color="pink.600">
        Working on Iphone
      </Text>
      <LogoSvg w={240} h={24} />
      <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
        Upload
      </Button>
    </Flex>
  )
}
