import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import Routes from './routes/app.routes'
import { theme } from './styles/theme'
import { config } from './styles/config'

export default function AppSrc() {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
