import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'; 


export default function RegisterScreen() { 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateAll = () => {
        if (!email.includes('@')) {
            setError('Email is invalid');
        } else if (password.length < 6) {
            setError('Password is too short');
        } else if (name.length === 0) {
            setError('Name is required');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
        }
        else{
            setError('');
        }
    }

  return ( 
    <View style={styles.container}> 
        <Text style={styles.subtitle}>Exo 5 Register Screen 🎉</Text> 

        <Text style={styles.buttontitle}> Entrez votre Nom, Email, Mot de passe</Text>

        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={setName}
          onBlur={validateAll}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          onBlur={validateAll}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          onBlur={validateAll}
        />

        <TextInput
          style={styles.input}
          placeholder='Confirmer le mot de passe'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onBlur={validateAll}
        />

        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

        {!error ? <Button title="Register" onPress={() => {alert(`Name: ${name}, Email: ${email}, Password: ${password}`)}} /> : null}

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