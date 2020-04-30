import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0DOnYhzzRc_C8XyosrtD-x8bPf2sj2Bc",
    authDomain: "crwn-db-ba2de.firebaseapp.com",
    databaseURL: "https://crwn-db-ba2de.firebaseio.com",
    projectId: "crwn-db-ba2de",
    storageBucket: "crwn-db-ba2de.appspot.com",
    messagingSenderId: "951469815271",
    appId: "1:951469815271:web:ca5267cefc0b2d505db942",
    measurementId: "G-033N0XJSV2"
  };


export const createUserProfileDocument = async (userAuth,additionalData) => {
  if (!userAuth) return;
  // set the user ref to 
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;