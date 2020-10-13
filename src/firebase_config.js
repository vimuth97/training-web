import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnL_wf9Il0SLcRQXtp8RwP5fRMd5lgO7M",
  authDomain: "dialy-diary-vimuth.firebaseapp.com",
  databaseURL: "https://dialy-diary-vimuth.firebaseio.com",
  projectId: "dialy-diary-vimuth",
  storageBucket: "dialy-diary-vimuth.appspot.com",
  messagingSenderId: "790622576261",
  appId: "1:790622576261:web:a74f345dfaecf785d853ec",
};


firebase.initializeApp(firebaseConfig);
export const databaseRef = firebase.database().ref();
//export const todosRef = databaseRef.child("todos");;
