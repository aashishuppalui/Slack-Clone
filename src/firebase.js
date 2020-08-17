import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2jbuDfslZNuBjI8lO1vgWd81uLI5R0y0",
  authDomain: "slack-clone-74c96.firebaseapp.com",
  databaseURL: "https://slack-clone-74c96.firebaseio.com",
  projectId: "slack-clone-74c96",
  storageBucket: "slack-clone-74c96.appspot.com",
  messagingSenderId: "11526502461",
  appId: "1:11526502461:web:8bd2725265e31b62e3d254",
  measurementId: "G-8ZBN6CQYE3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
