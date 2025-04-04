import '../global.css';
import { Slot, Stack, Tabs } from "expo-router";
import { View, Text } from 'react-native';


export const Header = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}

const Footer = () => {
  return (
    <View>
      <Text>Footer</Text>
    </View>
  )
}

export default function Layout() {
  return (
    // <Stack
    // screenOptions={{
    //   headerShown: false
    // }}
    // >
    //   always have intial file 
    //   <Stack.Screen name='index'/>
    //   <Stack.Screen name='about'/>
    //   <Stack.Screen name='(tabs)'/>
    //   <Stack.Screen name='(auth)'/>
    // </Stack>
    // <Tabs
    // screenOptions={{
    //   headerShown: false
    // }}
    // >
    //   {/* always have intial file  */}
    //   {/* <Tabs.Screen name='index'/> */}
    //   <Tabs.Screen name='about'/>
    //   <Tabs.Screen name='(tabs)'/>
    // </Tabs>
    <Slot />
  );
}

