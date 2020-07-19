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
	// created: function() {
	// 	this.$http.interceptors.response.use(undefined, function(err) {
	// 		return new Promise(function(resolve, reject) {
	// 			if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
	// 				this.$store.dispatch("logout");
	// 			}
	// 			throw err;
	// 		});
	// 	});
	// }
};
</script>
<style>
#app {
	background-color: #f5f5f5;
}
</style>
