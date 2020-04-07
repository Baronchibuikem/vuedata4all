<template>
	<v-app>
		<div class="container-fluid AboutImg2">
			<div class="container align-items-end mt-12 pt-12">
				<h4 class="text-light mt-8 pt-8">Frequently Asked Questions</h4>
			</div>
		</div>
		<div class="container my-12">
			<h4 class="text-center mb-3">How Can We Help You?</h4>
			<!-- <v-text-field
				label="Type Keywords to find answer?"
				filled
				class="col-md-9 mx-auto light"
			></v-text-field> -->
			<input
				type="search"
				class="form-control col-md-9 mx-auto"
				placeholder="Type Keywords to find answer?"
				id=""
			/>
			<p class="text-center">
				You can also browse topics below to find what you’re looking for
			</p>

			<div role="tablist">
				<CollapsibleTab
					title="Account and Profile"
					id="1"
					style="background-color: #e5e5e5;"
				>
					<div v-for="item in tab1" :key="item.id">
						<span>{{ item }}</span>
						<v-divider></v-divider>
					</div>
				</CollapsibleTab>

				<div class="text-center mt-12">
					<h4>Can't Find What You Need?</h4>
					<h4>Send Us A Message!</h4>
					<router-link to="/contact" class="nav-link"
						><button
							style="background-color:#413A76"
							class="py-2 px-12 text-white"
						>
							<small>CONTACT US</small>
						</button></router-link
					>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import CollapsibleTab from "../ReusuableComponents/CollapsibleTab.vue";
export default {
	name: "FAQPage",
	components: {
		CollapsibleTab
	},
	data() {
		return {
			tab1: [
				"How can I do this and that?",
				"How can I do this and that?",
				"How can I do this and that?"
			]
		};
	}
};
</script>

<style scoped>
.AboutImg2 {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("../../assets/images/AboutImg2.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 250px;
}
.btn-info {
	color: #fff !important;
	background-color: #413a76 !important;
}
</style>
