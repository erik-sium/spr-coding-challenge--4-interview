<script>
	import NodeNavigationHistory from "./components/NodeNavigationHistoryPane.svelte";

	export let name;

	let showNodeNavigationHistoryPane = false
	const openNodeNavigationHistory = () => {
		showNodeNavigationHistoryPane = !showNodeNavigationHistoryPane
	}
</script>

<main>
	<h1>SAPORO Coding Challenge by {name}</h1>
	<p>Task: Recreate node detail history</p>
	<p>Implemented with Svelte.js</p>

	<div id="button_container">
		<button on:click={() => openNodeNavigationHistory()}>
			Click me to start!<slot></slot>
		</button>
	</div>

	{#if showNodeNavigationHistoryPane}
		<NodeNavigationHistory />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	#button_container {		
		margin-top: 100px;
		position: absolute;
		left: 200px;
	}

	button {
		cursor: pointer;
	}
</style>