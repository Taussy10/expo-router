import '../global.css';
import { Slot, Stack } from "expo-router";
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


// 
{/* <Header />     Har page pe dikhna chahiye */}
{/* <Slot />       Yahan current screen render hogi */}
{/* <Footer />     {/* Har page p */}

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='index'/>
    </Stack>
  );
}

