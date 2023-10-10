/* eslint-disable import/no-mutable-exports */
import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  Auth,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './env';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: any = null;

export const initializeFirebase = () => {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  setPersistence(auth, browserLocalPersistence);
};

export { app, auth, db, onAuthStateChanged, signOut };
