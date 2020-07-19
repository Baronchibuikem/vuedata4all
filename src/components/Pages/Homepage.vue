<template>
	<v-app>
		<section>
			<!-- This section is used to serve the background image in the jumbotron -->
			<div class="jumbotron backgroundstyle bg-white">
				<div class="container">
					<div class="background_text text-light" style="padding-top: 100px">
						<span class="h5">Questions + Data =</span><br />
						<span class="h1">ANSWERS, </span>
						<span class="h1">INSIGHTS <br />FOR HEALTH.</span><br />
						<span class="h1">ACTION!</span>

						<div class="row">
							<div class="col-md-1 col-sm-12">
								<h4 class="display-1">50+</h4>
								<small>Topics</small>
							</div>
							<div class="col-md-1 col-sm-12 text-center">
								<h4 class="display-1">200+</h4>
								<small>INDICATORS</small>
							</div>
							<div class="col-md-2 col-sm-12 text-center">
								<h4 class="display-1">10+</h4>
								<small>DATA SOURCES</small>
							</div>
							<div class="col-md-1 col-sm-12">
								<h4 class="display-1">300+</h4>
								<small>RESOURCES</small>
							</div>
						</div>
						<div>
							<div class="row">
								<div class="col-md-5 col-sm-12">
									<!-- <v-text-field
										label="What are you looking for?"
										single-line
										outlined
										style="background-color: #1918186C 0% 0% no-repeat padding-box; opacity: 0.6;"
										v-model="designation"
									></v-text-field> -->
									<input
										class="form-control"
										placeholder="What are you looking for"
										type="text"
										style="background-color: #1918186C 0% 0% no-repeat padding-box; opacity: 0.6;"
									/>
								</div>
								<div class="col-md-4 col-sm-12">
									<router-link to="/login"
										><button
											style="background-color:#413A76"
											class="p-2 text-light"
										>
											<small>BROWSE DATA-FOR FREE!</small>
										</button></router-link
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="bg-white pt-12">
			<div class="container pt-12">
				<h2 class="text-center">
					Download Health Data. Get Resources. Send/Request Data
				</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
					nihil cupiditate in dolor labore dolores. Iure odio consectetur
					architecto cum, nostrum facilis dolores facere neque reiciendis, sint
					itaque beatae doloribus. Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Tempore nihil cupiditate in dolor labore dolores.
					Iure odio consectetur architecto cum, nostrum facilis dolores facere
					neque reiciendis, sint itaque beatae doloribus.
				</p>
			</div>
		</div>
		<div class="container mt-5">
			<h2 class="font-weight-bold mt-5 pt-5">We have Something For Everyone</h2>
			<p>We have a range of offers to meet your various needs</p>
			<div class="row">
				<div class="col-md-4 col-sm-12">
					<Card
						:icon="Key"
						:title="'One-Time Data Access'"
						:body="
							'This plan would allow you a one-time, limited access into our database.'
						"
						:name="'Contact Us'"
						route="/contact"
						v-on:contact="PlanRouter"
						class="img"
					/>
				</div>
				<div class="col-md-4 col-sm-12">
					<Card
						:icon="Consultation"
						:title="'On-Demand Consultancy Services'"
						:body="
							'We are available for consultations on data acquisition, dissemination and engagement.'
						"
						:name="'Contact Us'"
						route="/contact"
						v-on:contact="PlanRouter"
						class="img"
					/>
				</div>
				<div class="col-md-4 col-sm-12 card-container">
					<Card
						:icon="Coin"
						:title="'Subscription Plans'"
						:body="
							'We are available for consultations on data acquisition, dissemination and engagement.'
						"
						:name="'View Plans'"
						route="/plan"
						v-on:contact="PlanRouter"
						class="img"
					/>
				</div>
			</div>
		</div>

		<section>
			<!-- This section is used to serve the second background image  -->
			<div class="jumbotron secondbackgroundstyle my-5">
				<div class="container">
					<h6 class="text-white">HealthData4You Database currently contains:</h6>
					<div class="row ">
						<div class="col-md-4 col-sm-12 background_text text-white">
							<div class="row">
								<div class="col-md-4 col-sm-12 font-weight-bold">
									<h1 class="display-3">50+</h1>
									<span><small>TOPICS</small></span>
								</div>
								<div class="col-md-8 col-sm-12 mx-auto font-weight-bold">
									<h1 class="display-3">200+</h1>
									<span><small>INSIGHTS</small></span>
								</div>
							</div>
							<div class="row">
								<div class="col-md-4 col-sm-12 font-weight-bold">
									<h1 class="display-3">10+</h1>
									<span><small> SOURCES</small></span>
								</div>
								<div class="col-md-8 col-sm-12 mx-auto font-weight-bold">
									<h1 class="display-3">300+</h1>
									<span><small>RESOURCES</small></span>
								</div>
							</div>
							<div class="row mt-5">
								<div class="col-md-4 col-sm-12">
									<small
										><router-link
											to="/"
											class="text-light"
											style="text-decoration: underline !important"
											>VIEW CATALOG</router-link
										></small
									>
								</div>
								<div class="col-md-7 col-sm-12">
									<router-link to="/login"
										><button
											style="background-color:#413A76"
											class="p-2 text-light"
										>
											<small>BROWSE DATA-FOR FREE!</small>
										</button></router-link
									>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-12">
							<img
								src="../../assets/images/image1.png"
								class="image-thumbnail"
								width="100%"
							/>
						</div>
						<div class="col-md-4 col-sm-12">
							<img
								src="../../assets/images/image2.png"
								class="image-thumbnail"
								width="100%"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="container mt-5 ">
			<h3>Put Data to Good Use with Us</h3>
			<p>
				<em
					>You can request/send data and get insights on any program area of
					choice</em
				>
			</p>
			<div class="row mt-5">
				<div class="col-md-6 col-sm-12 bg-light">
					<div class="pt-5 mt-5 col-md-8 mx-auto ">
						<h4 class="my-6">Request Data</h4>
						<p>
							If there is a particular dataset you would love to view, send a
							request and we’ll make it happen.
						</p>
						<v-btn large color="#413A76" class="text-light my-6"
							><router-link exact to="/requestdata" class="text-light"
								>REQUEST DATA</router-link
							></v-btn
						>
					</div>
				</div>
				<div class="col-md-6 col-sm-12 requestDataImg"></div>
			</div>

			<div class="row mt-12">
				<div class="col-md-6 col-sm-12 submitDataImg"></div>
				<div class="col-md-6 col-sm-12 bg-light">
					<div class="pt-5 mt-5 col-md-8 mx-auto">
						<h4 class="my-6">Send Data</h4>
						<p>
							If you have a dataset you would like to share with a larger
							audience, you can submit data here
						</p>
						<v-btn large color="#413A76" class="text-light my-6"
							><router-link exact to="/submitdata" class="text-light"
								>SEND DATA</router-link
							></v-btn
						>
					</div>
				</div>
			</div>

			<div class="row mt-12">
				<div class="col-md-6 col-sm-12 bg-light">
					<div class="pt-5 mt-5 col-md-8 mx-auto">
						<h4 class="my-6">Insights</h4>
						<p>
							Fully explore the length and breadth of available data
						</p>
						<v-btn large color="#413A76" class="text-light my-6"
							><router-link exact to="/resources" class="text-light"
								>VIEW INSIGHTS</router-link
							></v-btn
						>
					</div>
				</div>
				<div class="col-md-6 col-sm-12 insightDataImg "></div>
			</div>
		</div>

		<div class=" mt-5 text-light" v-bind:style="styleObject">
			<div class="container">
				<div class="row py-5">
					<div class="col-md-6 col-sm-12">
						<span class="h1">Did You Know<span class="display-3">?</span></span>
					</div>
					<div class="col-md-6 col-sm-12">
						<span
							>Widespread application of Big Data in healthcare could account
							for $300 billion to $450 billion in reduced health-care spending -
							McKinsey & Company</span
						>
					</div>
				</div>
			</div>
		</div>

		<section id="testimonial">
			<div class="mt-5">
				<h2 class="container">Testimonials</h2>
				<v-carousel
					cycle
					height="250"
					hide-delimiter-background
					show-arrows-on-hover
				>
					<v-carousel-item v-for="(slide, i) in tetimonialSlide" :key="i">
						<v-sheet height="100%">
							<v-row
								class="fill-height text-dark"
								align="center"
								justify="center"
							>
								<div class="col-md-9 mx-auto col-sm-12">
									<div class="px-5 text-center">
										<em>{{ slide.comment }}</em>
										<h5 class="font-weight-bold pt-3">
											{{ slide.name }}
										</h5>
										<small>
											{{ slide.title }}
										</small>
									</div>
								</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</div>
		</section>

		<section id="subscribe_to_newletter">
			<div class="container">
				<div class="row">
					<div class="col-md-5 col-sm-12">
						<img
							src="../../assets/images/subscribeImg.png"
							alt="img"
							class="img-responsive"
							height="100%"
							width="100%"
						/>
					</div>
					<div class="col-md-5 col-sm-12">
						<div class="ml-4">
							<h3>Want to know more?</h3>
							<h3>Subscribe to our newsletter</h3>
						</div>
						<div class=" row mx-auto">
							<div class="col-md-10">
								<input
									class="form-control py-5"
									placeholder="Enter your email address"
									type="text"
									style="background-color: #1918186C 0% 0% no-repeat padding-box; opacity: 0.6;"
								/>
							</div>
							<div class="col-md-2 col-sm-12">
								<button
									style="background-color:#413A76"
									class="py-2 px-4 text-white"
								>
									<small>SUBSCRIBE</small>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</v-app>
</template>

<script>
import Card from "../ReusuableComponents/CardComponent.vue";
import Coin from "../../assets/images/coin.svg";
import Consultation from "../../assets/images/consultation-2.svg";
import Key from "@/assets/images/key.svg";

export default {
	name: "Homepage",
	data() {
		return {
			// Key, Consultation and Coin are representation of the images used in the card component
			Key,
			Consultation,
			Coin,

			styleObject: {
				backgroundColor: "#413A76",
				height: "150px"
			},
			tetimonialSlide: [
				{
					name: "Ahmed Elsayed",
					title: "Researcher",
					comment: `Lorem ipsum dolor sit amet,
							consetetur sadipscing elitr, sed diam
					 		nonumy eirmod tempor invidunt ut labore
					  		et dolore magna aliquyam erat, sed diam voluptua. At vero`
				},
				{
					name: "Design Team",
					title: "UI/UX",
					comment: `...uhmmm, Well i know this is the one that you want to know,
					 sha here's the thing, I'm in a wonderful and healthy relationship.
					 But hell ya!!! I love making friends`
				},
				{
					name: "People and Business",
					title: "Money Guys",
					comment: `Lorem ipsum dolor sit amet,
							consetetur sadipscing elitr, sed diam
					 		nonumy eirmod tempor invidunt ut labore
					  		et dolore magna aliquyam erat, sed diam voluptua. At vero`
				}
			]
			// used for the slider in the homepage
		};
	},
	methods: {
		// This is used to
		PlanRouter(link) {
			this.$router.push(link);
		}
	},
	components: {
		Card
	}
};
</script>

<style scoped>
.backgroundstyle {
	position: relative;
	/* height: 800px; */
	min-height: 100vh;
	margin-bottom: -54px;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("../../assets/images/backgound_image.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}

.form-control {
	background-color: #efefef !important;
}
.secondbackgroundstyle {
	position: relative;
	/* height: 600px; */
	min-height: 80vh;
	margin-bottom: -54px;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("../../assets/images/backgound_image2.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.requestDataImg {
	background-image: url("../../assets/images/requestDataImg.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 350px;
}
.submitDataImg {
	background-image: url("../../assets/images/submitDataImg.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 350px;
}
.insightDataImg {
	background-image: url("../../assets/images/insightsDataImg.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 350px;
}
.jumbotron {
	border-radius: 0rem !important;
}

.theme--dark.v-sheet {
	background-color: #f5f5f5 !important;
	border-color: #1e1e1e;
}
a {
	text-decoration: none;
}
.img:hover {
	transform: scale(1.1);
}
</style>
