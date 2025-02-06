import { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'; 


export default function StateCounterScreen() { 

    const [count, setCount] = useState(0);

  return ( 
    <View style={styles.container}> 
        <Text style={styles.subtitle}>Exo 4 State Counter 🎉</Text> 

        <Text style={styles.buttontitle}> Count : {count}</Text>

        <View style={styles.button_container}>
            <Button title="Ajouter +1" onPress={() => setCount(count + 1)} />
            <Button title="Retirer -1" onPress={() => setCount(count - 1)} />
            <Button title="Reset" onPress={() => setCount(0)} />
        </View>
        
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