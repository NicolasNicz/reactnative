import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'; 


export default function RegisterFormikYupScreen() { 
  return ( 
    <View style={styles.container}>
        <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Password is too short').required('Password is required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match')
        })}
        onSubmit={(values) => {
            alert(`Name: ${values.name}, Email: ${values.email}, Password: ${values.password}`);
        }}
        >
        {({ handleChange, handleSubmit, values, errors}) => (
            <View>
                <Text> Name </Text>
                <TextInput style={styles.input} value={values.name} onChangeText={handleChange('name')}/>
                {errors.name ? <Text style={{ color: 'red' }}>{errors.name}</Text> : null}

                <Text> Email </Text>
                <TextInput style={styles.input} value={values.email} onChangeText={handleChange('email')}/>
                {errors.email ? <Text style={{ color: 'red' }}>{errors.email}</Text> : null}

                <Text> Password </Text>
                <TextInput style={styles.input} value={values.password} onChangeText={handleChange('password')}/>
                {errors.password ? <Text style={{ color: 'red' }}>{errors.password}</Text> : null}

                <Text> Confirmer le mot de passe </Text>
                <TextInput style={styles.input} value={values.confirmPassword} onChangeText={handleChange('confirmPassword')}/>
                {errors.confirmPassword ? <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text> : null}

                <Button title="Submit" onPress={() => handleSubmit()} />
            </View>
        )}
        </Formik>
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