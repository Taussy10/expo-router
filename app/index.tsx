import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href={"/pc/pic"}>
          Move 
        </Link>
        
    </View>
  )
}

export default Index