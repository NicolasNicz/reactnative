import { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PreferencesScreen() { 

    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');

    const saveData = async () => {
        await AsyncStorage.setItem('name', name);
    }

    const loadData = async () => {
        const storedName = await AsyncStorage.getItem('name');
        setSavedName(storedName || 'Anonymous');
    }

  return ( 
    <View style={styles.container}> 
        <Text style={styles.subtitle}>Exo 7 Stockage local et authentification 🎉</Text> 

        <TextInput placeholder="Votre nom" value={name} onChangeText={setName} style={styles.buttontitle} />
        <Button title="Sauvegarder" onPress={saveData} />
        <Button title="Charger" onPress={loadData} />
        <Text> Nom stoqué : {savedName}</Text>
        
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