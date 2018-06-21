<template>
	<div>
		<img src="static/img/suixi.jpg" />
		<h1 class="center-content">{{ name }}!</h1>
	</div>

</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				required: true
			}
		}
	}
</script>