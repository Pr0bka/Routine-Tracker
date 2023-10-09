import { auth, signOut } from '../firebaseSetup';

function HomePage() {
  return (
    <div>
      <button type='button' onClick={() => signOut(auth!)}>
        ну и зачем я сюда пришел
      </button>
    </div>
  );
}
export default HomePage;
