import * as firebase from "firebase";
 const db_firebase = {
    apiKey: "AIzaSyB_fgRmBa1MAXklH6xz-Vs0-tEVRg4SYGQ",
    authDomain: "proyectofinalweb-9354d.firebaseapp.com",
    databaseURL: "https://proyectofinalweb-9354d.firebaseio.com",
    projectId: "proyectofinalweb-9354d",
    storageBucket: "proyectofinalweb-9354d.appspot.com",
    messagingSenderId: "1078535634714",
    appId: "1:1078535634714:web:68651558a06b5f71f276a3",
    measurementId: "G-WP2QBHESDZ"

  };
  const firebaseWord =!firebase.apps.length ? firebase.initializeApp(db_firebase) : firebase.app();
  export default firebaseWord;