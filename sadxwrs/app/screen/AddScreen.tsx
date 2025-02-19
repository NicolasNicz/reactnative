import { replace } from 'expo-router/build/global-state/routing';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, FlatList, TouchableOpacity, ImageBackground} from 'react-native'; 
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig';


export default function AddScreen() {

    // data form example
    // Date:"2025-02-19"
    // NumCharacter:"3"
    // NumLvl:"7"
    // NumPlayer:"11"
    // NumWR:"1319"
    // Time:"588"
    // Proof:"https://youtu.be/9w42A6VULH4"


    return (
    <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.container}> 
        <ScrollView style={styles.wrcontainer}>
            <Formik
            initialValues={{ Date: '', NumCharacter: '', NumLvl: '', NumPlayer: '', NumWR: '', Time: '', Proof: '' }}
            validationSchema={Yup.object({
                Date: Yup.string().required('Date is required'),
                NumCharacter: Yup.string().required('Character is required'),
                NumLvl: Yup.string().required('Level is required'),
                NumPlayer: Yup.string().required('Player is required'),
                NumWR: Yup.string().required('WR is required'),
                Time: Yup.string().required('Time is required'),
                Proof: Yup.string().required('Proof is required'),
            })}
            onSubmit={(values) => {
                const wrRef = ref(database, "8/data"); // Table wr (8/data)
                push(wrRef, values)
                    .then(() => {
                        alert(`Date: ${values.Date}, Character: ${values.NumCharacter}, 
                            Level: ${values.NumLvl}, Player: ${values.NumPlayer}, 
                            WR: ${values.NumWR}, Time: ${values.Time}, 
                            Proof: ${values.Proof}, WR ajouté avec succès !`);
                    })
                    .catch((error) => {
                        console.error("Erreur dans l'ajout du WR a la bdd :", error);
                        alert(`Erreur dans l'ajout du WR a la bdd : ${error}`, );
                    });

                
            }}    
            >
            {({ handleChange, handleSubmit, values, errors}) => (
                <View>
                    <Text style={styles.wrtitle}> Date </Text>
                    <TextInput style={styles.input} value={values.Date} onChangeText={handleChange('Date')}/>
                    {errors.Date ? <Text style={{ color: 'red' }}>{errors.Date}</Text> : null}

                    <Text style={styles.wrtitle}> Character </Text>
                    <TextInput style={styles.input} value={values.NumCharacter} onChangeText={handleChange('NumCharacter')}/>
                    {errors.NumCharacter ? <Text style={{ color: 'red' }}>{errors.NumCharacter}</Text> : null}

                    <Text style={styles.wrtitle}> Level </Text>
                    <TextInput style={styles.input} value={values.NumLvl} onChangeText={handleChange('NumLvl')}/>
                    {errors.NumLvl ? <Text style={{ color: 'red' }}>{errors.NumLvl}</Text> : null}

                    <Text style={styles.wrtitle}> Player </Text>
                    <TextInput style={styles.input} value={values.NumPlayer} onChangeText={handleChange('NumPlayer')}/>
                    {errors.NumPlayer ? <Text style={{ color: 'red' }}>{errors.NumPlayer}</Text> : null}

                    <Text style={styles.wrtitle}> WR </Text>
                    <TextInput style={styles.input} value={values.NumWR} onChangeText={handleChange('NumWR')}/>
                    {errors.NumWR ? <Text style={{ color: 'red' }}>{errors.NumWR}</Text> : null}

                    <Text style={styles.wrtitle}> Time </Text>
                    <TextInput style={styles.input} value={values.Time} onChangeText={handleChange('Time')}/>
                    {errors.Time ? <Text style={{ color: 'red' }}>{errors.Time}</Text> : null}

                    <Text style={styles.wrtitle}> Proof </Text>
                    <TextInput style={styles.input} value={values.Proof} onChangeText={handleChange('Proof')}/>
                    {errors.Proof ? <Text style={{ color: 'red' }}>{errors.Proof}</Text> : null}

                    <Button title="Submit" onPress={() => handleSubmit()}  />
                </View>
            )}
            </Formik>

        </ScrollView> 

        
    </ImageBackground> 
    )
}

const styles = StyleSheet.create({ 
    container: { 
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      color: '#fff',
      backgroundColor: 'linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.288))',
      width: '100%'
      }, 
      wrtitle:{
        color: '#fff',
        fontSize: 16,
      },
      input:{
        color: '#fff',
        backgroundColor: 'rgb(28, 28, 44)',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
      },
      wrcontainer: { 
        flex:1,
        fontSize: 25,
        margin: 10,
        padding: 16, 
        paddingTop: 30,
        backgroundColor: 'rgba(21, 21, 46, 1)',
      },
      statwrcontainer: {
        flex:1,
        flexDirection:'row',
      },
      head: { height: 40, width: '120%', backgroundColor: 'rgba(21, 21, 46, 1)'  },
      wrapper: { flexDirection: 'row' },
      row: {  height: 40, width: '120%', backgroundColor: 'rgba(21, 21, 46, 0.9)'  },
      headtext: { textAlign: 'center', color: '#fff', fontWeight: 'bold' },
      text: { textAlign: 'center', color: '#fff' },
      
  });