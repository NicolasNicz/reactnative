import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; 


export default function HomeScreen({navigation, route}: any) {

  return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>Exo 7 Home 🎉 (superappdeouf ne pas oublier)
        </Text> 

        <Button title="Vers Authentification" onPress={() => navigation.navigate('AuthScreen')} />
        <Button title="Vers Preferences" onPress={() => navigation.navigate('PreferencesScreen')} />
        
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