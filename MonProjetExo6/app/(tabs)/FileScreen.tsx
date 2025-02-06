import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'; 
import * as FileSystem from 'expo-file-system';

export default function FileScreen() { 

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const validate = () => {
        if (name.length === 0) {
            setError('Name is required');
        } 
        else{
            setError('');
        }
    }

    const saveFile = async () => {
        try {
            const path = FileSystem.documentDirectory + name + '.txt';
            await FileSystem.writeAsStringAsync(path, name, { encoding: FileSystem.EncodingType.UTF8 });
            alert('Fichier enregistré!');
        } catch (error) {
            console.error('Error saving file:', error);
        }
        
      };

    const readFile = async () => {
        const path = FileSystem.documentDirectory + name + '.txt';
        const content = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
        alert(content);
      };

  return ( 
    <View style={styles.container}> 
        <Text style={styles.subtitle}>Exo 6 File 🎉</Text> 

        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={setName}
          onBlur={validate}
        />

        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

        {!error ? <Button title="Register" onPress={() => {saveFile()}} /> : null}


        <Button title="Lire le fichier" onPress={() => {readFile()}} />
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
      input:{
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
      },
      button_container: {
        flex: 1, 
        flexDirection:'row'
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