import firebase from 'firebase/app'
import 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "AIzaSyD9_o0Ksu4Z2fyOEifwBeeRxqij_Z4lSf4",
    authDomain: "restaurants-a16dd.firebaseapp.com",
    projectId: "restaurants-a16dd",
    storageBucket: "restaurants-a16dd.appspot.com",
    messagingSenderId: "113021648819",
    appId: "1:113021648819:web:9d86e4750c0cae916195c6"
  }
  // Initialize Firebase
  export const firebaseapp = firebase.initializeApp(firebaseConfig);