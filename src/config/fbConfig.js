import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details


  var config = {
    apiKey: "AIzaSyA1_qVx1JtYfCOCaIFTYZ4225ZtteZs5_8",
    authDomain: "softawie-16c54.firebaseapp.com",
    databaseURL: "https://softawie-16c54.firebaseio.com",
    projectId: "softawie-16c54",
    storageBucket: "softawie-16c54.appspot.com",
    messagingSenderId: "708385334046"
  };
 

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 