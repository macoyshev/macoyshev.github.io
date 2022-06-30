<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
	import '../app.css';
</script>

<header>
	<Navbar/>
</header>

<main>
	<slot />
</main>

