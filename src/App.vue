<template>
	<v-app>
		<Navbar />
		<router-view />
		<Footer />
	</v-app>
</template>

<script>
import Navbar from "./components/Common/Navbar.vue";
import Footer from "./components/Common/Footer.vue";

export default {
	name: "App",
	components: {
		Navbar,
		Footer
	}
};
</script>
<style>
#app {
	background-color: #f5f5f5;
}
</style>
