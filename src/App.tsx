import './App.css';
import './fonts/GreatVibes.ttf';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { initializeFirebase, auth, onAuthStateChanged } from './firebaseSetup';
import { getUser } from './queries/user';

initializeFirebase();

function App() {
  const [dbUser, setDbUser] = useState<any>();
  useEffect(() => {
    getUser().then((result) => {
      setDbUser(result);
    });
  }, [dbUser]);
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

  if (!user) {
    return <LoginPage />;
  }
  if (!dbUser) {
    return <SignUp />;
  }
  return <HomePage />;
}

export default App;
