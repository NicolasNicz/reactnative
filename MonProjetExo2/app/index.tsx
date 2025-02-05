import { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button} from 'react-native'; 

const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
];

export default function HomeScreen() { 

    const [count, setCount] = useState(0);

  return ( 
    <View style={styles.container}> 
        <Image source={require('../assets/images/favicon.png')} style=
            {styles.image} />

        <Text style={styles.subtitle}>Exo 2</Text> 

        <Text style={styles.buttontitle}> Count : {count}</Text>

        <View style={styles.button_container}>
            <Button title="Ajouter +1" onPress={() => setCount(count + 1)} />
            <Button title="Retirer -1" onPress={() => setCount(count - 1)} />
            <Button title="Reset" onPress={() => setCount(0)} />
        </View>
        


        <FlatList
            data={DATA}
            renderItem={({ item }) => <Text style={styles.listtitle}>{item.title}</Text>}
            keyExtractor={item => item.id}
        />
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

      image: { 
        width: 100, 
        height: 100, 
        marginBottom: 20, 
        marginTop:20
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