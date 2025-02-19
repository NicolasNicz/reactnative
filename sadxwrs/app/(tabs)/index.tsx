import React from "react";
import 'react-native-gesture-handler'; 
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationIndependentTree } from "@react-navigation/native";
import HomeScreen from '../screen/HomeScreen';
import AuthScreen from '../screen/AuthScreen';
import ProfileScreen from '../screen/ProfileScreen';
import DetailScreen from "../screen/DetailScreen";
import AddScreen from "../screen/AddScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: 'rgba(1, 0, 47, 0.92)' }, 
headerTintColor: 'white' }} />
          <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ title: 'Auth', headerStyle: { backgroundColor: 'rgba(1, 0, 47, 0.92)' }, 
headerTintColor: 'white' }} />
          <Stack.Screen name="ProfileScreen" component ={ProfileScreen} options={{ title: 'Profile', headerStyle: { backgroundColor: 'rgba(1, 0, 47, 0.92)' }, 
headerTintColor: 'blue' }} />
          <Stack.Screen name="DetailScreen" component ={DetailScreen} options={{ title: 'Details', headerStyle: { backgroundColor: 'rgba(1, 0, 47, 0.92)' }, 
headerTintColor: 'blue' }} />
          <Stack.Screen name="AddScreen" component ={AddScreen} options={{ title: 'Ajouter', headerStyle: { backgroundColor: 'rgba(1, 0, 47, 0.92)' }, 
headerTintColor: 'blue' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
    );
}