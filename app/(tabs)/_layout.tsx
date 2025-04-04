import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    // <Tabs
    //  screenOptions={{
    //     headerShown: false
    //   }}
    // >
    //     {/* In tabs layout don't create index file cause 
    //     it will have / URL that will equal to /(root layout index)
    //     then expo give errors
    //     */}
    //     <Tabs.Screen name='home' />
    //     <Tabs.Screen name='profile' />
    // </Tabs>
    <Slot />
  )
}

export default TabsLayout