import * as React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native'; 


export default function HomeScreen({navigation, route}: any) {

  return ( 
    <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.container}> 
        <Text style={styles.title}>Sonic Adventure DX World Records
        </Text> 
        <View style={styles.menu_container}>
          <TouchableOpacity style={{backgroundColor:"red"}} onPress={() => navigation.navigate('AuthScreen')}>
              <Text> Authentification </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profils')} >
              <Text> Profils </Text>
          </TouchableOpacity>
        </View>
        
        
    </ImageBackground> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    backgroundColor: 'linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.288))',
    width: '100%'
    }, 
  menu_container:{
    backgroundColor: 'rgba(1, 0, 47, 0.92)',
    borderRadius: '.5rem',
    borderTopWidth: 5,
    borderTopColor:'#18C1FF'
  },
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      color: '#007bff', 
      textAlign: 'center', 
    },
  });