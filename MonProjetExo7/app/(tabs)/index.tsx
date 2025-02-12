import React from "react";
import 'react-native-gesture-handler'; 
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationIndependentTree } from "@react-navigation/native";
import HomeScreen from '../screen/HomeScreen';
import AuthScreen from '../screen/AuthScreen';
import PreferencesScreen from '../screen/PreferencesScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: 'blue' }, 
headerTintColor: 'white' }} />
          <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ title: 'Home', headerStyle: { backgroundColor: 'blue' }, 
headerTintColor: 'white' }} />
          <Stack.Screen name="PreferencesScreen" component ={PreferencesScreen} options={{ title: 'Details', headerStyle: { backgroundColor: 'cyan' }, 
headerTintColor: 'blue' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
    );
}