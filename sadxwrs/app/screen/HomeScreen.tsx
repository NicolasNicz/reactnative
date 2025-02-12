import * as React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native'; 


export default function HomeScreen({navigation, route}: any) {

  return ( 
    <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.container}> 
        <Text style={styles.title}>Sonic Adventure DX World Records
        </Text> 
        <View style={styles.menu_container}>
          <TouchableOpacity activeOpacity={0.8} style={styles.menu_button} onPress={() => navigation.navigate('AuthScreen')}>
              <Text style={styles.menu_button_text}> Authentification </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.menu_button} onPress={() => navigation.navigate('Profils')} >
              <Text style={styles.menu_button_text}> Profils </Text>
          </TouchableOpacity>
        </View>
        
        
    </ImageBackground> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.288))',
    width: '100%'
    }, 
  menu_container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    margin:25,
    borderRadius: '.5rem',
    borderTopWidth: 5,
    borderTopColor:'#18C1FF',
    borderBottomWidth: 5,
    borderBottomColor:'#18C1FF'
  },
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      color: '#fff',
      textAlign: 'center', 
    },

    menu_button:{
      justifyContent:'center',
      alignItems:'center',  
      width:"100%",
      height:"50%",
      backgroundColor: 'rgba(1, 0, 47, 0.92)',
    },
    menu_button_text:{
      fontSize:24,
      fontWeight:"bold",
      color:"white"
    }
  });