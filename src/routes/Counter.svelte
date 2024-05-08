<script>
  import { onMount } from 'svelte';
  import { db } from './firebase';

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
<button on:click={savePassword}>Save Password</button>
