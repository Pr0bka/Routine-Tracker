import './App.css';
import './fonts/GreatVibes.ttf';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { initializeFirebase, auth, onAuthStateChanged } from './firebaseSetup';

initializeFirebase();

function App() {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    onAuthStateChanged(auth!, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <div>{user ? <HomePage /> : <LoginPage />}</div>;
}

export default App;
