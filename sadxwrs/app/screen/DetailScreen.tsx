import { useRoute } from '@react-navigation/native';
import { replace } from 'expo-router/build/global-state/routing';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from 'react-native'; 


export default function DetailScreen() {

    const route = useRoute();
    const { item }:any = route.params; // Récupération des données
    const { lvl }:any = route.params;
    const { character }:any = route.params;
    const { player }:any = route.params;

    const youtubeVideoCode = item.Proof.replace('https://youtu.be/', 'https://www.youtube.com/embed/');


    return (
    <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.container}> 
        <View style={styles.wrcontainer}>
            <View style={styles.statwrcontainer}>
                <Text style={styles.wrtitle}>WR #{item.NumWR} | </Text>
                <Text style={styles.wrtitle}>Date : {item.Date} | </Text>
                <Text style={styles.wrtitle}>Perso : {character} | </Text>
                <Text style={styles.wrtitle}>Niveau: {lvl} | </Text>
                <Text style={styles.wrtitle}>Joueur: {player} | </Text>
            </View>


            <iframe src={youtubeVideoCode} title="YouTube video player" width={"100%"} height={"400"}></iframe>
        </View> 

        
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
      wrcontainer: { 
        flex:1,
        fontSize: 25,
        margin: 10,
        padding: 16, 
        paddingTop: 30,
        backgroundColor: 'rgba(21, 21, 46, 1)',
        height:40
      },
      statwrcontainer: {
        flex:1,
        flexDirection:'row',
      },
      wrtitle:{
        color: '#fff',
        fontSize: 16,
      },
      head: { height: 40, width: '120%', backgroundColor: 'rgba(21, 21, 46, 1)'  },
      wrapper: { flexDirection: 'row' },
      row: {  height: 40, width: '120%', backgroundColor: 'rgba(21, 21, 46, 0.9)'  },
      headtext: { textAlign: 'center', color: '#fff', fontWeight: 'bold' },
      text: { textAlign: 'center', color: '#fff' },
      
  });