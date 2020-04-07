<template>
	<div class="container">
		<div>
			<h5>Login to your Account</h5>
			<b-form @submit.prevent="login">
				<b-form-group id="input-group-1" label="EMAIL ADDRESS:" class="mt-5">
					<b-form-input v-model="email" type="email" required></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-2" label="PASSWORD" label-for="input-2">
					<b-form-input
						v-model="password"
						type="password"
						required
					></b-form-input>
				</b-form-group>
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
							>Stay Logged In</b-form-checkbox
						>
					</div>
					<div class="col-md-6 col-sm-6 text-right">
						<router-link to="/auth">Forgot password?</router-link>
					</div>
				</div>
				<div>
					<span class="bgline mt-3"
						>Don't have an account?
						<a @click.prevent="$emit('click', 'Sign Up')">Sign Up</a> </span
					><br />
					<!-- <v-btn large color="#413A76" class="text-light mt-4" type="submit"> -->
					<!-- <div v-if="authStatus" class="container-loading">
							<b-spinner variant="success" label="Spinning"></b-spinner>
						</div> -->
					<!-- <div>
							LOGIN
						</div></v-btn
					> -->

					<button
						style="background-color:#413A76"
						class="py-2 px-12 text-white mt-4"
						type="submit"
					>
						<small>LOGIN</small>
					</button>

					<button
						style="background-color:#0076B8"
						class=" px-12 form-control text-white mt-4"
						type="submit"
					>
						<small
							><i
								class="fab fa-linkedin mr-2"
								style="font-size:20px;color:white"
							></i
							>LOGIN WITH LINKEDIN</small
						>
					</button>
				</div>
			</b-form>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "LoginPage",
	data() {
		return {
			email: "",
			password: ""
		};
	},
	methods: {
		login() {
			let email = this.email;
			let password = this.password;
			this.$store
				.dispatch("login", { email, password })
				.then(() => this.$router.push("/dashboard"))
				.catch(err => console.error(err));
		}
		// logout: function() {
		// 	this.$store.dispatch("logout").then(() => {
		// 		this.$router.push("/login");
		// 	});
		// }
	},
	computed: {
		...mapGetters(["isLoggedIn", "authStatus"])
	}
};
</script>

<style></style>
