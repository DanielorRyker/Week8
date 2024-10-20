import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FirstScreen from './screens/firstscreen';
import SecondScreen from './screens/secondscreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="First Screen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="First Screen" component={FirstScreen} />
        <Stack.Screen name="Second Screen" 
          component={(props) => <SecondScreen {...props} data={data}/>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}