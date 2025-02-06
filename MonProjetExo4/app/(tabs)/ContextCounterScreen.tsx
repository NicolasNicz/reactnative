import { View, Text, StyleSheet, Button } from 'react-native';
import { createContext, useContext, useState } from 'react'; 
import { CountProvider, IncrementButton, DecrementButton, ResetButton, DisplayCounter } from '../context/ContextCounterClass';

export default function ContextCounterScreen() {
  
    return ( 
      <View style={styles.container}> 
          <Text style={styles.title}>Exo 4 Counter Context 🎉
          </Text> 
  
          <CountProvider>
                <DisplayCounter>
                <Text>Increment</Text>
              </DisplayCounter>
              <IncrementButton>
                <Text>Increment</Text>
                </IncrementButton>
                <DecrementButton>
                <Text>Increment</Text>
              </DecrementButton>
              
          </CountProvider>

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
      buttontitle:{
        margin: 10,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5
      }
    });