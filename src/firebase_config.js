import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBrRiqucc5eQ15yumdGqR4DeC8PyR3biHQ",
    authDomain: "dear-diary-vimuth.firebaseapp.com",
    databaseURL: "https://dear-diary-vimuth.firebaseio.com",
    projectId: "dear-diary-vimuth",
    storageBucket: "dear-diary-vimuth.appspot.com",
    messagingSenderId: "629134658647",
    appId: "1:629134658647:web:73977a72c3197301586712",
    measurementId: "G-KSDJ2XEHLW"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true});

  export default firebase;