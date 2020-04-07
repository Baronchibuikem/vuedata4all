<template>
	<div class="container">
		<transition name="fade">
			<div v-if="show">
				<h5>Create Your Personalised Account</h5>
				<b-form>
					<b-form-group
						id="full_name"
						label="Full Name:"
						label-for="full name"
						class="mt-5"
					>
						<b-form-input
							id="full_name"
							type="text"
							v-model="fullname"
							required
						></b-form-input>
						<p class="text-danger list-unstyled">{{ errors.fullNameError }}</p>
						<p class="text-danger list-unstyled">
							{{ errors.checkSpecicalChar }}
						</p>
					</b-form-group>

					<b-form-group
						id="organization"
						label="Organization"
						label-for="organization"
						class="mt-5"
					>
						<b-form-input
							id="organization"
							type="text"
							required
							v-model="organization"
						></b-form-input>
						<p class="text-danger list-unstyled">
							{{ errors.organizationError }}
						</p>
					</b-form-group>
					<b-form-group
						id="designation"
						label="Designation"
						label-for="designation"
						class="mt-5"
					>
						<b-form-input
							id="designation"
							v-model="designation"
							type="text"
							required
						></b-form-input>
						<p class="text-danger list-unstyled">
							{{ errors.designationError }}
						</p>
					</b-form-group>
					<b-form-group
						id="data"
						label="Purpose For Data:"
						label-for="purpose_for_data"
						class="mt-5"
					>
						<b-form-input
							id="purpose_for_data"
							v-model="purpose_of_data"
							type="text"
							required
						></b-form-input>
						<p class="text-danger list-unstyled">
							{{ errors.purpose_of_data_error }}
						</p>
					</b-form-group>
					<b-form-group
						id="email"
						label="Email Address:"
						label-for="email"
						class="mt-5"
					>
						<b-form-input
							id="email"
							type="email"
							v-model="email"
							required
						></b-form-input>
						<p class="text-danger list-unstyled">{{ errors.emailError }}</p>
						<p class="text-danger list-unstyled">{{ emailExistValidation }}</p>
					</b-form-group>

					<b-form-group id="password" label="PASSWORD" label-for="password">
						<b-form-input
							id="password"
							type="password"
							v-model="password"
							required
						></b-form-input>
						<p class="text-danger list-unstyled">{{ errors.passwordError }}</p>
						<p class="text-danger list-unstyled">
							{{ errors.passwordLengthError }}
						</p>
					</b-form-group>
					<h6>
						Already have an account?
						<a @click.prevent="$emit('click', 'Login')">Login</a>
					</h6>

					<v-btn
						large
						color="#413A76"
						class="text-light mt-4"
						@click="errorCheck"
						>CREATE ACCOUNT</v-btn
					>

					<span class="bgline mt-3 px-2">OR</span>
					<v-btn large color="#0076B8" class="text-light form-control mt-4"
						><i class="fa fa-linkedin" aria-hidden="true"></i>SIGN UP WITH
						LINKEDIN</v-btn
					>
				</b-form>
			</div>
			<div v-else>
				<PaymentPage :register="register" :handlePrevious="handlePrevious" />
			</div>
		</transition>
	</div>
</template>

<script>
import PaymentPage from "../Pages/PaymentPage";
import checkSpecificKey from "../Utilities/checkSpecialCharacter";

export default {
	name: "SignupPage",
	components: {
		PaymentPage
	},
	data() {
		return {
			fullname: "",
			organization: "",
			designation: "",
			purpose_of_data: "",
			email: "",
			password: "",
			show: true,
			errors: {
				fullNameError: "",
				checkSpecicalChar: "",
				designationError: "",
				purpose_of_data_error: "",
				emailError: "",
				passwordError: "",
				passwordLengthError: "",
				organizationError: ""
			},
			emailExistValidation: ""
		};
	},
	methods: {
		register: function() {
			var parent_fun = this;
			if (
				this.fullname &&
				this.organization &&
				this.designation &&
				this.purpose_of_data &&
				this.email &&
				this.password
			) {
				let data = {
					fullname: this.fullname,
					organization: this.organization,
					designation: this.designation,
					purpose_of_data: this.purpose_of_data,
					email: this.email,
					password: this.password
				};
				this.$store
					.dispatch("register", data)
					.then(() => this.$router.push("/dashboard"))
					.catch(function(err) {
						//the errors that are displayed here are generally used to
						// check for validation that needs to be passed in the backend
						if (err.response.data["email"] != undefined) {
							parent_fun.emailExistValidation = err.response.data["email"][0];
						}
						console.log("THIS ERROR", parent_fun.errors);
						parent_fun.$emit("validate-errors", parent_fun.errors);
					});
			} else {
				//the errors that are displayed here are generally used to
				// check for validation that needs to be passed in the frontend
				// if (!this.fullname) {
				// 	this.errors.fullNameError = "Fullname is required";
				// }
				// if (!checkSpecificKey(this.fullname)) {
				// 	this.errors.checkSpecicalChar =
				// 		"Fullname must not contain speacial characters";
				// }
				// if (!this.designation) {
				// 	this.errors.designationError = "Designation is required";
				// }
				// if (!this.organization) {
				// 	this.errors.organizationError = "Organization name is required";
				// }
				// if (!this.purpose_of_data) {
				// 	this.errors.purpose_of_data_error = "Purpose of data is required";
				// }
				// if (!this.email) {
				// 	this.errors.emailError = "Email is required";
				// }
				// if (!this.password) {
				// 	this.errors.password = "Password is required";
				// }
				// if (this.password.length < 8) {
				// 	this.errors.passwordLengthError =
				// 		"This password is too short, it must contain atleast 8 characters";
				// }
				this.$emit("validate-errors", this.errors);
			}
		},
		handlePrevious() {
			this.show = true;
		},
		errorCheck() {
			var all_passed = [];
			if (!this.fullname) {
				this.errors.fullNameError = "Fullname is required";
				all_passed.push(false);
			}

			if (!checkSpecificKey(this.fullname)) {
				this.errors.checkSpecicalChar =
					"Fullname must not contain special character(s) or number(s)";
				all_passed.push(false);
			}
			if (!this.designation) {
				this.errors.designationError = "Designation is required";
				all_passed.push(false);
			}
			if (!this.organization) {
				this.errors.organizationError = "Organization name is required";
				all_passed.push(false);
			}
			if (!this.purpose_of_data) {
				this.errors.purpose_of_data_error = "Purpose of data is required";
				all_passed.push(false);
			}
			if (!this.email) {
				this.errors.emailError = "Email is required";
				all_passed.push(false);
			}
			if (!this.password) {
				this.errors.password = "Password is required";
				all_passed.push(false);
			}
			if (this.password.length < 8) {
				this.errors.passwordLengthError =
					"This password is too short, it must contain atleast 8 characters";
				all_passed.push(false);
			}

			if (all_passed.length === 0) {
				this.show = false;
			} else {
				this.show = true;
			}
		}
	}
};
</script>

<style scoped>
.bgline {
	display: flex;
	flex-direction: row;
}

.bgline:before,
.bgline:after {
	content: "";
	flex: 1 1;
	border-bottom: 1px solid #000;
	margin: auto;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
