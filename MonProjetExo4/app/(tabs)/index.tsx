import React from "react";
import 'react-native-gesture-handler'; 
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationIndependentTree } from "@react-navigation/native";
import HomeScreen from '../screen/HomeScreen';
import StateCounterScreen from './StateCounterScreen';
import ContextCounterScreen from './ContextCounterScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: 'blue' }, 
headerTintColor: 'white' }} />
          <Stack.Screen name="StateCounterScreen" component ={StateCounterScreen} options={{ title: 'Details', headerStyle: { backgroundColor: 'cyan' }, 
headerTintColor: 'blue' }} />
          <Stack.Screen name="ContextCounterScreen" component={ContextCounterScreen} options={{ title: 'Profile', headerStyle: { backgroundColor: 'pink' }, 
headerTintColor: 'black' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
    );
}