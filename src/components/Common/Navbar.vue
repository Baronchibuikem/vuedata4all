<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
		<div class="container" v-if="!isLoggedIn">
			<router-link class="" exact to="/">
				<img src="../../assets/images/logo.jpg" width="20%" />
			</router-link>
			<button
				class="navbar-toggler bg-dark"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon bg-dark"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item mr-10">
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
					<li class="nav-item ml-6 pl-10">
						<router-link class="nav-link" to="/resources">Insights</router-link>
					</li>
					<li class="nav-item ml-12 pl-10">
						<router-link class="nav-link" to="/faq">FAQs</router-link>
					</li>
					<li class="nav-item ml-10 pl-10">
						<router-link exact to="/contact" class="nav-link"
							>Contact</router-link
						>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<router-link to="/login" class="nav-link"
							><button class=" px-12 button1 form-control">
								<small>LOGIN</small>
							</button></router-link
						>
					</li>
					<li class="nav-item">
						<button
							@click="navigateToLogin"
							class="py-1 mt-2 px-12 button2 form-control"
						>
							<small>REGISTER </small>
						</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="container" v-if="isLoggedIn">
			<router-link class="nav-link" exact to="">
				<img src="../../assets/images/logo.jpg" width="20%" />
			</router-link>
			<button
				class="navbar-toggler bg-dark"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon bg-dark"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item mr-12">
						<router-link class="nav-link" to="/browsedata"
							>Browse Data</router-link
						>
					</li>
					<li class="nav-item ml-12">
						<router-link class="nav-link" to="/resources"
							>Resources</router-link
						>
					</li>
					<li class="nav-item ml-12 pl-6">
						<router-link exact to="#" class="nav-link"
							>Request/Submit Data</router-link
						>
					</li>
					<li class="nav-item ml-12">
						<router-link exact to="#" class="nav-link"
							>HealthData4You Blog</router-link
						>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<b-dropdown id="dropdown-divider" :text="user.fullname" class="m-2">
							<b-dropdown-item-button
								><router-link to="/profile" style="color:black !important"
									>Profile</router-link
								></b-dropdown-item-button
							>
							<b-dropdown-item-button>Account Details</b-dropdown-item-button>
							<b-dropdown-item-button>Download History</b-dropdown-item-button>
							<b-dropdown-item-button>Settings</b-dropdown-item-button>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item-button
								><a @click="logout" style="color:black !important"
									>Logout</a
								></b-dropdown-item-button
							>
						</b-dropdown>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Navbar",

	computed: {
		...mapGetters(["isLoggedIn", "user"])
	},
	methods: {
		logout: function() {
			this.$store.dispatch("logout").then(() => {
				this.$router.push("/login");
			});
		},
		navigateToLogin() {
			if (this.$route.path !== "/login") {
				this.$router.push({
					name: "UserAuths",
					params: {
						tab: "Sign Up"
					}
				});
			}
		}
	},
	mounted() {
		this.$store.dispatch("getUsers");
	}
};
</script>
<style scoped>
a {
	text-decoration: none !important;
	color: white !important;
}
.navbar-dark .navbar-nav .nav-link {
	color: black !important;
}
.button1 {
	background-color: white;
	color: black;
	border: 2px solid #413a76; /* Green */
}

.button2 {
	background-color: #413a76;
	color: white;
	border: 2px solid #413a76; /* Green */
}
</style>
