import { View, Text, StyleSheet, Button } from 'react-native'; 

export default function ProfileScreen({navigation, route}: any,) {
   
  const { itemId } = route.params; 

  return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>itemId: {itemId}
        </Text> 

        <Button title="Retour Home" onPress={() => navigation.navigate('HomeScreen')} />
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
      fontSize: 55, 
      fontWeight: 'bold', 
      color: '#007bff', 
      textAlign: 'center', 
    },
  });