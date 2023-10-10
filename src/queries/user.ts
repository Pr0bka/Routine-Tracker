/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable implicit-arrow-linebreak */
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseSetup';

const registerUser = async () => {
  try {
    if (!auth?.currentUser?.uid) return;
    await setDoc(doc(db, 'users', auth?.currentUser?.uid), {
      someRandomShit: Math.random(),
    });
  } catch (err) {
    console.warn(err);
  }
};

// const docRef = async () =>
//   await addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });

export default registerUser;
