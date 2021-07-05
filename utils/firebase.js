import firebase from 'firebase/app'
import 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "AIzaSyB2RtUnfw5G2qD0axasURzBi59P1rWymR0",
    authDomain: "restaurants-fbc3d.firebaseapp.com",
    projectId: "restaurants-fbc3d",
    storageBucket: "restaurants-fbc3d.appspot.com",
    messagingSenderId: "1011971073882",
    appId: "1:1011971073882:web:edba209676cc00fa6a3563"
  }
  // Initialize Firebase
  export const firebaseapp = firebase.initializeApp(firebaseConfig)