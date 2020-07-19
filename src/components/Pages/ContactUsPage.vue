<template>
	<v-app class="mt-12 pt-12 bg-light">
		<div class="container min-vh-100 mt-12 pt-12">
			<h3 class="text-center mb-5">CONTACT US</h3>
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<form @submit.prevent="formSubmit">
						<input
							v-model="email"
							type="email"
							placeholder="Email"
							required
							class="form-control form-control-lg"
						/>
						<input
							v-model="subject"
							type="text"
							placeholder="Subject"
							required
							class="form-control form-control-lg outline border mt-5"
						/>
						<textarea
							v-model="content"
							rows="7"
							cols="100"
							class="form-control form-control-lg mt-5"
							placeholder="Write Your Message Here..."
						>
						</textarea>
						<v-btn
							large
							color="#413A76"
							class="text-light form-control mt-5"
							type="submit"
							>SEND</v-btn
						>
					</form>
				</div>
				<div class="col-md-6 col-sm-12">
					<p class="font-weight-bold col-md-7">
						Our Team is happy to answer your questions. Fill out the form and
						we'll be in touch with you as soon as possible.
					</p>
					<h5 class="font-weight-bold col-md-7">HealthData4You.net</h5>
					<h5 class="font-weight-bold col-md-7">+2349030000000</h5>
					<div>
						<i
							class="fab fa-facebook mr-5"
							style="font-size:30px;color:#6158C9"
						></i>
						<i
							class="fab fa-linkedin mr-5"
							style="font-size:30px;color:#6158C9"
						></i>
						<i
							class="fab fa-twitter-square"
							style="font-size:30px;color:#6158C9"
						></i>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import ApiCalls from "../../apiRoots/api_calls";

const { postSubscription } = ApiCalls.PostMethods;

export default {
	name: "ContactUsPage",
	data() {
		return {
			email: "",
			subject: "",
			content: ""
		};
	},
	methods: {
		formSubmit() {
			const subscribe = {
				email: this.email,
				subject: this.subject,
				content: this.content
			};
			const vm = this;
			postSubscription(subscribe)
				.then(res => {
					if (res.status === 201) {
						vm.$router.push("/success");
					}
				})
				.catch(err => console.error(err));
		}
	}
};
</script>

<style></style>
