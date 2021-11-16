// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/compat/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk8RHQgmXv6F6ssxA_j1fO9FRUgBkiALA",
  authDomain: "clothing-chain.firebaseapp.com",
  projectId: "clothing-chain",
  storageBucket: "clothing-chain.appspot.com",
  messagingSenderId: "38275645021",
  appId: "1:38275645021:web:bba7403447b9befcf5d7b4",
  measurementId: "G-5L7R1FGJ1J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserAccount = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);
  if (!snapshot.exists) {
    const createdAt = new Date();
    const { displayName, email } = userAuth;
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};
export const addCollectionAndDocuments = async (
  collectionName,
  objectToAdd
) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  objectToAdd.forEach((docRef) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, docRef);
  });

  return await batch.commit();
};

export const retrieveShopData = (collections) => {
  // const collRef = firestore.collection("collections");
  // const querySnapshot =  collRef.get();
  console.log(collections.docs);
  const transformedObject = collections.docs.map((object) => {
    console.log(object);
    const { title, items } = object.data();
    return {
      id: object.id,
      routeName: title.toLowerCase(),
      title,
      items,
    };
  });
  // console.log(transformedObject);
  return transformedObject.reduce((acc, curr) => {
    acc[curr.title.toLowerCase()] = curr;
    return acc;
  }, {});
  // console.log(shopData);
  // console.log(
  //   snapshot.docs.forEach((element) => {
  //     console.log(element.data());
  //   })
  // );
  // return shopData;
};

export default firebase;
