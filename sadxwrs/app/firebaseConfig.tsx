import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBcUQV3fZN1P8TDROkfPBnkcwwagxKRD-I",
  authDomain: "sadxwrs.firebaseapp.com",
  projectId: "sadxwrs",
  storageBucket: "sadxwrs.firebasestorage.app",
  messagingSenderId: "282034439131",
  appId: "1:282034439131:web:d5fa758c9ceaccd18b9dfe",
  databaseURL: "https://sadxwrs-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database}