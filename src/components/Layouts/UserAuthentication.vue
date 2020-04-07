<template>
	<div class="container mt-12 pt-12 min-vh-100 bg-light">
		<v-dialog v-model="dialog" max-width="600">
			<v-card class="container">
				<div class="d-flex justify-content-between align-items-center">
					<h5>Please correct the following error(s) in the signup page</h5>
					<v-btn icon dark @click="dialog = false" class="text-dark">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</div>
			</v-card>
		</v-dialog>

		<div class="row mt-5 pt-5">
			<div class="col-md-6 col-sm-12">
				<img
					src="../../assets/images/loginImg.png"
					width="100%"
					height="100%"
					class="img-responsive"
				/>
			</div>
			<div class="col-md-6 col-sm-12">
				<b-tabs content-class="mt-3" justified v-if="!isLoggedIn">
					<b-tab
						title="Login"
						:active="currentTab === 'Login'"
						@click="currentTab = 'Login'"
					>
						<LoginPage @click="handleTabSwitch" />
					</b-tab>
					<b-tab
						title="Sign Up"
						:active="currentTab === 'Sign Up'"
						@click="currentTab = 'Sign Up'"
					>
						<SignupPage @validate-errors="setErrors" @click="handleTabSwitch" />
					</b-tab>
				</b-tabs>
				<div
					v-else
					class="h-100 d-flex text-center align-items-center justify-content-center"
				>
					<div>
						<h2 class="text-uppercase">
							You are already logged in
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LoginPage from "../Pages/LoginPage.vue";
import SignupPage from "../Pages/SignupPage";
import { mapGetters } from "vuex";
export default {
	name: "UserAuth",
	props: ["register"],
	components: {
		LoginPage,
		SignupPage
	},
	created() {
		this.currentTab = this.$route.params.tab;
	},
	data() {
		return {
			errors: [],
			dialog: false,
			currentTab: ""
		};
	},
	computed: {
		...mapGetters(["isLoggedIn"])
	},
	methods: {
		logout: function() {
			this.$store.dispatch("logout").then(() => {
				this.$router.push("/login");
			});
		},
		setErrors(errors) {
			this.errors = errors;
			this.dialog = true;
		},
		handleTabSwitch(tab) {
			this.currentTab = tab;
		}
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
}
</style>
