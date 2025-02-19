import { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from 'react-native'; 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { TextInput } from 'react-native-gesture-handler';
import { database } from '../firebaseConfig';
console.log("Firebase connecté :", database ? "Oui" : "Non");
import { ref, get } from "firebase/database";
import { getTime } from "../function/functions";

export default function ProfileScreen({navigation, route}: any) { 

  interface WR { //Interface pour typescript (pour éviter l'erreur de type)
    Date: string;
    NumCharacter: string;
    NumLvl: string;
    NumPlayer: string;
    NumWR: string;
    Proof: string;
    Time: string;
  }
  
  interface Player {
    NumPlayer: string;
    NomPlayer: string;
  }
  
  interface Lvl {
    NumLvl: string;
    NomLvl: string;
  }

  interface character {
    NumCharacter: string;
    NomCharacter: string;
  }

  const [records, setRecords] = useState<WR[]>([]);
  const [players, setPlayers] = useState<Record<string, string>>({}); // clé = NumPlayer, Valeur = NomPlayer
  const [lvl, setLvl] = useState<Record<string, string>>({});
  const [character, setCharacter] = useState<Record<string, string>>({});

  useEffect(() => { //Récupérer les données de la table wr, (chaque ligne est un WR)
    get(ref(database, "8/data")).then(snapshot => {
      const data: WR[] = Object.values(snapshot.val() || {});
      const sortedRecords = data.sort((a, b) => (b.Date > a.Date ? 1 : -1)).slice(0, 50); //Trié par date, et les 50 premiers seulement (Pour éviter le chargement trop long)
      setRecords(sortedRecords);
    });

  // Récupérer les joueurs, pour ensuite afficher le nom des joueurs (chaque ligne est un joueur/player)
  get(ref(database, "7/data")).then(snapshot => {
    const data: Player[] = Object.values(snapshot.val() || {});
    const playerMap: Record<string, string> = {};
    data.forEach(player => {
      playerMap[player.NumPlayer] = player.NomPlayer; // clé = NumPlayer, valeur = NomPlayer
    });
    setPlayers(playerMap);
  });

  get(ref(database, "6/data")).then(snapshot => {
    const data: Lvl[] = Object.values(snapshot.val() || {});
    const LvlMap: Record<string, string> = {};
    data.forEach(lvl => {
      LvlMap[lvl.NumLvl] = lvl.NomLvl; // clé = NumLvl, valeur = NomLvl
    });
    setLvl(LvlMap);
  });

  get(ref(database, "4/data")).then(snapshot => {
    const data: character[] = Object.values(snapshot.val() || {});
    const characterMap: Record<string, string> = {};
    data.forEach(character => {
      characterMap[character.NumCharacter] = character.NomCharacter; // clé = NumCharacter, valeur = NomCharacter
    });
    setCharacter(characterMap);
  })
}, []);

const WRTable = {
  tableHead: ['WR #', 'Date', 'Niveau', 'Perso', 'Temps', 'Joueur'],
};

  

  return ( 
    <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.container}> 
      <ScrollView style={styles.tablecontainer}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={WRTable.tableHead} style={styles.head} textStyle={styles.headtext} />

        {records.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            activeOpacity={0.8} 
            onPress={() => navigation.navigate('DetailScreen', { item, lvl: lvl[item.NumLvl], character: character[item.NumCharacter], player: players[item.NumPlayer] })} // Envoie les données
          >
            <Row
              data={[
                item.NumWR, 
                item.Date, 
                lvl[item.NumLvl], 
                character[item.NumCharacter], 
                getTime(item.Time), 
                players[item.NumPlayer] || "Inconnu", 
              ]} 
              style={styles.row} 
              textStyle={styles.text} 
            />
          </TouchableOpacity>
        ))}
      </Table>
      </ScrollView>
    </ImageBackground> 
  ); 
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
    tablecontainer: { flex: 1, padding: 16, paddingTop: 30 },
    head: { height: 40, width: '100%', backgroundColor: 'rgba(21, 21, 46, 1)'  },
    wrapper: { flexDirection: 'row' },
    row: {  height: 40, width: '100%', backgroundColor: 'rgba(21, 21, 46, 0.9)'  },
    headtext: { textAlign: 'center', color: '#fff', fontWeight: 'bold' },
    text: { textAlign: 'center', color: '#fff', fontSize: 11 },
    
});