<script>
	// Supports weights 100-900
	import '@fontsource-variable/dm-sans';
	import '../app.css';
	import logo from '$lib/assets/logo.svg';
</script>

<svelte:head>
	<title>{'Translated'}</title>
</svelte:head>

<main class="container max-w-4xl mx-auto px-4 flex justify-center text-center flex-col text-white">
	<header class="pt-[4rem]">
		<img src={logo} alt="App logo" class="mx-auto" />
	</header>
	<slot />
</main>
