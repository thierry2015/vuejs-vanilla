<template>
	<div>
		<h1>This is my first Vue.js application</h1>
	</div>
</template>

<script>
	export default {
		mounted() {
			console.log('The application has been mounted!');
		}
	}
</script>

<style lang="scss" scoped>
	$title-font-size: 2em;

	h1 {
		font-size: $title-font-size;
	}
</style>
