import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; 


export default function HomeScreen({navigation, route}: any) {

  return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>Exo 3 Home 🎉
        </Text> 

        <Button title="Vers Profile" onPress={() => navigation.navigate('ProfileScreen', { itemId: 69 })} />
        <Button title="Vers Details" onPress={() => navigation.navigate('DetailsScreen')} />
        
    </View> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f0f0f0', 
    }, 
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      color: '#007bff', 
      textAlign: 'center', 
    },
  });