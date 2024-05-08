<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/ct.jpg';
	import welcome_fallback from '$lib/images/ct.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/png" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>
<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 0;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 0;
		height: 0;
		top: 0;
		display: block;
	}
</style>
