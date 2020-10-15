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
  const collectionRef= firestore.collection('users');

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  console.log({collectionSnapshot});

  
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

};

export const addCollectionAndDocuments =async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj =>{
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef,obj)
  });

  return await batch.commit()

};

export const convertCollectionsSnapshotToMaps = (collections)=> {
  const transformedCollection = collections.docs.map(doc =>{
    const {title,items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection)=> {
    accumulator[collection.title.toLowerCase()]= collection;
    return accumulator
  },{});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;