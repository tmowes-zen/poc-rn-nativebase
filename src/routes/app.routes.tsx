import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      {/* <Screen name="Messages" component={Messages} /> */}
      {/* <Screen name="Profile" component={Profile} /> */}
    </Navigator>
  )
}
