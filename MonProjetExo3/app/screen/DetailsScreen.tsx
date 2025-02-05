import { View, Text, StyleSheet } from 'react-native'; 
export default function DetailsScreen() { 
  return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>Exo 3 DetailsScreen 🎉
        </Text> 
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