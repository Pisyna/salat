<script>
  import { onMount } from 'svelte';
  
  import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQWBP1WNqa7pLqa5jxsn1qgYoDgndmaGc",
  authDomain: "salat-6697a.firebaseapp.com",
  databaseURL: "https://salat-6697a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "salat-6697a",
  storageBucket: "salat-6697a.appspot.com",
  messagingSenderId: "830216340439",
  appId: "1:830216340439:web:f92c0402392977d1290192",
  measurementId: "G-JKMSJ5VY28"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

  let password = '';

  const savePassword = () => {
    db.collection('passwords').add({
      password: password
    });
  };

  onMount(() => {
    // При загрузке страницы, подпишитесь на изменения в коллекции "passwords"
    const unsubscribe = db.collection('passwords').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          console.log('New password:', change.doc.data());
        }
      });
    });

    // Не забудьте отменить подписку при размонтировании компонента
    return () => unsubscribe();
  });
</script>

<input type="password" bind:value={password} placeholder="Enter your password" />
<button on:click={savePassword}>Сохранить пароль</button>

<style>
	input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
</style>