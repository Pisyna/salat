import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


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

export { db };