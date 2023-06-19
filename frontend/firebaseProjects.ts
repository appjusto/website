//import * as admin from 'firebase-admin';
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

const clientCredentials = {
  apiKey: process.env.EXTERNAL_FIREBASE_API_KEY,
  authDomain: process.env.EXTERNAL_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.EXTERNAL_FIREBASE_DATABASE_URL,
  projectId: process.env.EXTERNAL_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXTERNAL_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXTERNAL_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXTERNAL_FIREBASE_APP_ID,
  measurementId: process.env.EXTERNAL_FIREBASE_MEASUREMENT_ID,
};

interface FirebaseClientResult {
  firebase: FirebaseApp;
  db: Firestore;
  storage: FirebaseStorage;
}

export const getFirebaseProjectsClient = (): FirebaseClientResult => {
  const firebase = initializeApp(clientCredentials, "projects");
  const db = getFirestore(firebase);
  const storage = getStorage(firebase);
  return { firebase, db, storage };
};
