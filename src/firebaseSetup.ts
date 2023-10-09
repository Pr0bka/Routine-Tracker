import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  Auth,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { firebaseConfig } from './env';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

export const initializeFirebase = () => {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  setPersistence(auth, browserLocalPersistence);
};

export { app, auth, onAuthStateChanged, signOut };
