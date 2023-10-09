import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { initializeFirebase, auth, onAuthStateChanged } from './firebaseSetup';
import './App.css';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

initializeFirebase();

function App() {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
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
