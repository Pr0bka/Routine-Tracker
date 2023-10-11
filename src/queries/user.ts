/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable implicit-arrow-linebreak */
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseSetup';
// import User from '../models/user';

const registerUser = async (userName: string, userEmail: string) => {
  try {
    if (!auth?.currentUser?.uid) return;
    const docRef = doc(db, 'users', auth?.currentUser?.uid!);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('User already exists');
    } else {
      await setDoc(doc(db, 'users', auth?.currentUser?.uid), {
        name: userName,
        email: userEmail,
      });
      console.log('юзер креатед');
    }
  } catch (err) {
    console.warn(err);
  }
};

const getUser = async (): Promise<any> => {
  try {
    if (!auth?.currentUser?.uid) {
      return null;
    }
    const docRef = doc(db, 'users', auth?.currentUser?.uid!);
    const user = await getDoc(docRef);
    if (user.exists()) {
      return user.data();
    }
    console.log('Document does not exist');
    return null;
  } catch (err) {
    console.warn(err);
    return null;
  }
};

export { registerUser, getUser };
