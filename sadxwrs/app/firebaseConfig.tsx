import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBcUQV3fZN1P8TDROkfPBnkcwwagxKRD-I",
  authDomain: "sadxwrs.firebaseapp.com",
  projectId: "sadxwrs",
  storageBucket: "sadxwrs.firebasestorage.app",
  messagingSenderId: "282034439131",
  appId: "1:282034439131:web:d5fa758c9ceaccd18b9dfe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);