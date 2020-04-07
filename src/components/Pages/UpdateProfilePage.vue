<template>
	<div class="container my-4">
		<h4>Basic Profile</h4>
		<div class="row">
			<div class="col-md-6 mr-2 col-sm-12 shadow bg-white">
				<div class="col-md-10 mx-auto">
					<div class="d-flex justify-content-between">
						<h5>User Details</h5>
					
					</div>
					<div class="row my-5">
						<div class="col-md-4">Full Name</div>
						<div class="col-md-6">{{ user.fullname }}</div>
						<div
							class="col-md-2"
							style="color:#413A76; text-decoration: underline !important; cursor: pointer"
						>
							<form @submit.prevent="update">
								<v-dialog v-model="dialog" persistent max-width="350">
									<template v-slot:activator="{ on }">
										<v-text
											style="color:#413A76; text-decoration: underline !important; cursor: pointer"
											dark
											v-on="on"
											>Edit</v-text
										>
									</template>
									<v-card>
										<div class="d-flex justify-content-end">
											<v-btn
												icon
												dark
												@click="dialog = false"
												class="text-dark"
											>
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</div>
										<v-card-text class="pt-5">
											<label class="font-weight-bold h3">Profile name</label>
											<v-text-field
												label="name"
												v-model="user.fullname"
											></v-text-field>
											<div class="ml-12">
												<v-btn rounded class="ml-4 red px-12" @click="update"
													>Update</v-btn
												>
											</div>
										</v-card-text>

										<v-card-actions>
											<v-spacer></v-spacer>
										</v-card-actions>
									</v-card>
								</v-dialog>
							</form>
						</div>
					</div>
					<div class="row my-5">
						<div class="col-md-4">Organization</div>
						<div class="col-md-8">{{ user.organization }}</div>
					</div>
					<div class="row my-5">
						<div class="col-md-4">Designation</div>
						<div class="col-md-8">{{ user.designation }}</div>
					</div>
					<div class="row my-5">
						<div class="col-md-4">Email Address</div>
						<div class="col-md-6">{{ user.email }}</div>
						<div
							class="col-md-2"
							style="color:#413A76; text-decoration: underline !important; cursor: pointer"
						>
							<form @submit.prevent="update">
								<v-dialog v-model="dialog2" persistent max-width="350">
									<template v-slot:activator="{ on }">
										<v-text
											style="color:#413A76; text-decoration: underline !important; cursor: pointer"
											dark
											v-on="on"
											>Edit</v-text
										>
									</template>
									<v-card>
										<div class="d-flex justify-content-end">
											<v-btn
												icon
												dark
												@click="dialog2 = false"
												class="text-dark"
											>
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</div>
										<v-card-text class="pt-5">
											<label class="font-weight-bold h3">Email Address</label>
											<v-text-field
												label="email"
												v-model="user.email"
											></v-text-field>
											<div class="ml-12">
												<v-btn rounded class="ml-4 red px-12" @click="update"
													>Update</v-btn
												>
											</div>
										</v-card-text>

										<v-card-actions>
											<v-spacer></v-spacer>
										</v-card-actions>
									</v-card>
								</v-dialog>
							</form>
						</div>
					</div>
					<div class="row my-5">
						<div class="col-md-4">Password</div>
						<div class="col-md-6">******************</div>
						<div
							class="col-md-2"
							style="color:#413A76; text-decoration: underline !important; cursor: pointer"
						>
							<form @submit.prevent="update">
								<v-dialog v-model="dialog3" persistent max-width="350">
									<template v-slot:activator="{ on }">
										<v-text
											style="color:#413A76; text-decoration: underline !important; cursor: pointer"
											dark
											v-on="on"
											>Edit</v-text
										>
									</template>
									<v-card>
										<v-card-text class="pt-5">
											<label class="font-weight-bold h3">Change Password</label
											><br />

											<!-- <small class="font-weight-bold">Current Password</small> -->
											<v-text-field
												label="Current password"
												v-model="current_password"
											></v-text-field>

											<!-- <small class="font-weight-bold">New Password</small> -->
											<v-text-field
												label="Passowrd"
												v-model="password"
											></v-text-field>
											<!-- <small class="font-weight-bold"
												>Confirm New Password</small
											> -->
											<v-text-field
												label="Confirm New passowrd"
												v-model="confirm_password"
											></v-text-field>
											Passwords must be at least 8 characters long
											<div class="d-flex justify-content-apart mt-3">
												<v-btn small class="red " @click="updatePassword"
													>Save Changes</v-btn
												><v-btn
													small
													class="ml-4 px-12"
													@click="dialog3 = false"
													>Cancel</v-btn
												>
											</div>
											<p v-if="errors.length">
												<b>Please correct the following error(s)</b>
												<ul>
													<li v-for="error in errors" :key="error.index" class="text-danger list-unstyle ">
														{{ error }}
													</li><br>
												</ul>
											</p>
										</v-card-text>
									</v-card>
								</v-dialog>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-12 shadow mx-auto bg-white">
				<div class="col-md-10 mx-auto text-center">
					<h5 class="">Profile Picture</h5>
					<img
						:src="user.image"
						class="rounded-circle mx-auto"
						alt="Profile image"
						width="50%"
					/><br />
					<v-dialog v-model="dialog4" persistent max-width="600">
						<template v-slot:activator="{ on }">
							<v-btn large color="#413A76" class="text-light mt-5" v-on="on"
								>UPLOAD PHOTO</v-btn>
						</template>
						<v-card>
							<div class=" col-md-10 mx-auto pt-6 d-flex justify-content-between">

								<h6> Upload Photo </h6>
								<v-btn
									icon
									dark
									@click="dialog4 = false"
									class="text-dark"
								>
									<v-icon>mdi-close</v-icon>
								</v-btn>
							</div>
							<div class="col-md-8 mx-auto text-center">
								<img
								:src="user.image"
								class="rounded mx-auto mb-4"
								alt="My profile image"
								width="50%"
							/>
								<div class="mx-auto text-center">
									<input type="file" accept="image/*" @change="imageSelected">
									<v-btn large color="#413A76" class="text-light my-3" width="50%" @click="updateImage">UPLOAD PHOTO</v-btn><br/>
									<v-btn large class="text-dark" @click="dialog4 = false" width="50%">CANCEL</v-btn>
								</div>
							</div>
						</v-card>
					</v-dialog>
					<!-- Will be used to delete the user entirely from the system -->
					<!-- <v-btn large class=" mt-5" @click="deleteImage(index, id)">REMOVE PHOTO</v-btn> -->

					<v-btn large class=" mt-5" @click="deleteImage">REMOVE PHOTO</v-btn>
				</div>
			</div>
		</div>

		<h4 class="my-5">Preferences</h4>
		<div class="mt-5 shadow bg-white">
			<div class="my-5 pl-12">
				<h5 class="pt-5">Email Preference</h5>
				<h5 class="mt-12">
					What types of communication would you like to receive from HealthThink
					Database?
				</h5>
				<div class="row mt-12">
					<div class="col-md-7 col-sm-12">
						<h5>Latest digital health updates from our newsletter</h5>
					</div>
					<div class="col-md-3 col-sm-12">
						<v-switch v-model="drawer" class="text-center"></v-switch>
					</div>
				</div>
				<div class="row">
					<div class="col-md-7 col-sm-12">
						<h5>Special offers and amazing deals</h5>
					</div>
					<div class="col-md-3  col-sm-12">
						<v-switch v-model="drawer" class="ma-2 h5 ml-auto"></v-switch>
					</div>
				</div>
				<div class="row">
					<div class="col-md-7 col-sm-12">
						<h5>Latest health data updates from HealthThink Blog</h5>
					</div>
					<div class="col-md-3  col-sm-12">
						<v-switch v-model="drawer" class="ma-2 h5 ml-auto"></v-switch>
					</div>
				</div>
			</div>
		</div>

		<div class="my-5 ">
			<h4 class="my-5">Delete Account</h4>
			<div class="my-5 col-sm-12 shadow bg-white">
				<div class="row pl-12">
					<div class="col-md-6 col-sm-12">
						<h5 class="pt-6">
							This will remove all of your personal data forever
						</h5>
					</div>
					<div class="col-md-6 col-sm-12 text-center">
						<v-btn large color="#413A76" class="text-light mt-5">DELETE</v-btn>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { debug } from "../Utilities/debugger";
// import ModalPopUp from "../ReusuableComponents/ModalPopUpComponent.vue"
import { mapGetters } from "vuex";
export default {
		components: {
		// ModalPopUp
	},
	computed: {
		...mapGetters(["user"])
	},
	data() {
		return {
			dialog: false,
			dialog2: false,
			dialog3: false,
			dialog4: false,
			image: null,
			fullname: "",
			organization: "",
			designation: "",
			email: "",
			password: "",
			current_password: "",
			confirm_password: "",
			errors: []
		};
	},
	methods: {
		updatePassword: function() {
			const {password} = this.user;

			if (this.password === this.confirm_password) {
				
				this.$store
				.dispatch("update", {
					password,
					id: this.user.id
				})
				.then(() => this.$router.push("/dashboard"))
				.catch(err => console.error(err));
			}else{
				if(!this.password){
					this.errors.push("New Password is required")
				}
				if(this.password.length < 8 || this.confirm_password.length < 8){
					this.errors.push("Your password must be greater than 8 characters")
				}
				if(!this.confirm_password){
					this.errors.push("Please confirm your passsword")
				}
				if(this.password !== this.confirm_password){
					this.errors.push("Sorry the value of new password does not match the confirm password")
				}

			}
			
		},
		update: function() {
			let fullname = this.user.fullname;
			let email = this.user.email;

			this.$store
				.dispatch("update", {
					fullname,
					email,
					id: this.user.id
				})
				.then(() => this.$router.push("/dashboard"))
				.catch(err => console.error(err));
		},
		imageSelected(event){
			this.image = event.target.files[0]
			
		},

		// This function is used to upload an image to the logged in user profile
		// Here we get our updated image data which would have been upload by imageSelected function
		// once an image is selected, next we append the image to our form data and and dispatch it
		// to be processed using vuex, if it's successful, we redirect the user to his/her dashboard
		updateImage() {
			let form = new FormData()
			let image = this.image
			form.append("image", image)			
			this.$store
				.dispatch("updateImage", {
					image: form,
					id: this.user.id
				})
				.then(() => this.$router.push("/dashboard"))
				.catch(err => console.error(err));
		},

		// This function is used to delete the user profile image
		// Here we are simply setting the image data to an empty string which will
		// replace the image in the database with a null value, this process is being
		// managed using vuex
		deleteImage() {
			let form = new FormData()
			this.image = ""
			let image = this.image
			form.append("image", image)
			
			this.$store
				.dispatch("updateImage", {
					image: form,
					id: this.user.id
				})
				.then(() => this.$router.push("/dashboard"))
				.catch(err => console.error(err));
		},
		// Will be used to delete the user entirely from the system
		// deleteImage(index, user){
		// 	let image = this.user.image
		// 	this.$store
		// 		.dispatch("deleteImage", {
		// 			image,
		// 			id: this.user.id
		// 		})
		// 		.then(() => this.image.splice(user.id, 1))
		// 		.catch(err => console.error(err))
		// }

	}
};
</script>

<style></style>
