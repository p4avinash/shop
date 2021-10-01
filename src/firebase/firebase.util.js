import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDCbnV-LQHH167SN-HAlGMqAiT8TUzfMFk",
    authDomain: "shop-db-389a5.firebaseapp.com",
    projectId: "shop-db-389a5",
    storageBucket: "shop-db-389a5.appspot.com",
    messagingSenderId: "367068991826",
    appId: "1:367068991826:web:2385abc0906a68019c6a8b",
    measurementId: "G-NSDM3E43GS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  });

  export default firebase;