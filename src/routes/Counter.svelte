<script>
	import { addDoc, collection } from 'firebase/firestore';
	import { db } from './firebase.js';
  
	let password = '';
  
	async function savePassword() {
	  const docRef = await addDoc(collection(db, "passwords"), {
		password: password, 
	  });
	  console.log("записано");
	}
  </script>
  
  <input type="password" bind:value={password} placeholder="Введите ваш пароль">
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
  