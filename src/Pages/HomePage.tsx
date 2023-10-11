import { auth, signOut } from '../firebaseSetup';
import { registerUser } from '../queries/user';

function HomePage() {
  return (
    <div>
      <button type='button' onClick={() => signOut(auth!)}>
        ну и нахуй я сюда пришел
      </button>
      <button type='button' onClick={() => registerUser}>
        КАЛЛекция
      </button>
      {/* <button
        type='button'
        onClick={async () => {
          console.warn(user);
        }}
      >
        user: 
      </button> */}
    </div>
  );
}
export default HomePage;
