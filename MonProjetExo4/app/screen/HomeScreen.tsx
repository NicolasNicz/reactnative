import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; 


export default function HomeScreen({navigation, route}: any) {

  return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>Exo 4 Home 🎉
        </Text> 

        <Button title="Vers State Counter" onPress={() => navigation.navigate('StateCounterScreen')} />
        <Button title="Vers Context Counter" onPress={() => navigation.navigate('ContextCounterScreen')} />
        
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