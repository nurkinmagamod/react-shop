import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyBlaWfL7VtelLJgf7LIYrHkRHZm6tmqkOo",
    authDomain: "react-shop-31b0d.firebaseapp.com",
    databaseURL: "https://react-shop-31b0d.firebaseio.com",
    projectId: "react-shop-31b0d",
    storageBucket: "react-shop-31b0d.appspot.com",
    messagingSenderId: "638795862028",
    appId: "1:638795862028:web:bac5d819c70abb28949e29"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;