import { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';


export default function PreferencesScreen() { 

  return ( 
    <View style={styles.container}> 
        <Text style={styles.subtitle}>Page Profile 🎉</Text> 
        
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

      button_container: {
        flex: 1, 
        // flexDirection:'row'
      },
      subtitle: { 
        fontSize: 18, 
        color: '#555', 
        marginTop: 10, 
      },
      listtitle:{
        fontWeight: 'bold',
      },
      buttontitle:{
        margin: 10,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5
      }
});