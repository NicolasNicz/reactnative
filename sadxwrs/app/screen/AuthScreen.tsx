import { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button} from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';
import { app, database } from '../firebaseConfig';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from 'expo-router';


export default function AuthScreen() { 
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const signUp = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential : any) => {
            const email = userCredential.user.email ?? "Email inconnu";
            setUser(email);
        })
        .catch((error : any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorCode + errorMessage);
        })
    };

    const signIn = async () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential : any) => {
            const email = userCredential.user.email ?? "Email inconnu";
            setUser(email);
        })
        .catch((error : any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorCode + errorMessage);
        })
    };

  
    const loggOut = async () => {
        signOut(auth).then(() => {
          alert("logged out");
        }) 
        .catch((error : any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Error: " + errorCode + errorMessage);
      })
    
    }
    


  return ( 

        <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.container}>

          <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.buttontitle} />
          <TextInput placeholder="Mot de passe" secureTextEntry value={password} onChangeText={setPassword} style={styles.buttontitle} />
          <Button title="Inscription" onPress={signUp} />
          <Button title="Connexion" onPress={signIn} />
          <Button title="Déconnexion" onPress={loggOut} />
          { user ? <Text style={styles.subtitle}> Bienvenue, {user} </Text> : null }

        </ImageBackground>

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
        color: '#fff', 
        marginTop: 10, 
        backgroundColor: 'rgba(21, 21, 46, 1)',
        borderRadius: 5
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