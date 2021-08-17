import firebase from 'firebase/app'
import 'firebase/firestore'

 const firebaseConfig = {
  apiKey: "AIzaSyAF8q5OD0nDOXJtxEim1Y8IcmnDreXXKwU",
  authDomain: "restaurants-39396.firebaseapp.com",
  projectId: "restaurants-39396",
  storageBucket: "restaurants-39396.appspot.com",
  messagingSenderId: "344919358795",
  appId: "1:344919358795:web:2eb3eeb411613db4103cce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)