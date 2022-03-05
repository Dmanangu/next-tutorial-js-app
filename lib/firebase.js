import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFKcsc3QdJo0dZV2ZNt004SMz1-FDr80E",
  authDomain: "next-tutorial-bdb91.firebaseapp.com",
  projectId: "next-tutorial-bdb91",
  storageBucket: "next-tutorial-bdb91.appspot.com",
  messagingSenderId: "770928635205",
  appId: "1:770928635205:web:912ad2660419eed441e22c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
  };
}
