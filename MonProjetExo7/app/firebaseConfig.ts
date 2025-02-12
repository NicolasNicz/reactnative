import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDWOpT10UsQixG8dWXlTNGNmy5d1fmH75M",
    authDomain: "monprojetexo7.firebaseapp.com",
    projectId: "monprojetexo7",
    storageBucket: "monprojetexo7.firebasestorage.app",
    messagingSenderId: "675421009737",
    appId: "1:675421009737:web:589b903e0f5920c4a14c98"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);