<template>
	<v-app style="background-color: white">
		<div class="container-fluid mt-12">
			<div class="container pt-12 mt-12">
				<h2 class="text-center">CHOOSE A PLAN AND GET STARTED</h2>
				<p class="text-center">
					We have a range of plans to suit your research needs
				</p>
				<div class="d-flex col-md-4 mx-auto">
				<button disabled="disabled" style="background-color: #413A76" class="form-control text-light w-50">Annual</button>
				<button disabled="disabled" class="form-control text-dark w-50">Monthly</button>
				</div>
			</div>
		</div>
		<div class="container">
			<!-- <div class="row">
				<div class="col-md-9 col-sm-12 mx-auto"> -->
					<div class="row">
						<div class="col-md-4 col-sm-12">
							<div
								class="text-center"
								style="height:1350px"
							>
								<h5 class="mt-12">BUSINESS</h5>
								<p class="px-7">Make better decisions with custom data and so much more</p>
								<h6><span class="font-weight-bold display-1">₦8,580</span>/month</h6>
								<p class="px-7">Billed at ₦42,900 every year</p>

								<v-btn large color="#413A76" class=" mx-5"
									><router-link to="/login" style="color: white"
										>CHOOSE PLAN</router-link
									></v-btn
								>
								<hr />
								<div class="card-body">
									<ul class="text-left list-unstyled">
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Browse all our publicly available data sources for free!
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Customer Support: Phone calls and Emails
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Receive the latest health data updates from the
											HealthThink Blog
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Receive the latest digital health updates and industry
											briefs from our Monthly Newsletter
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Mobile access
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Freely access over 1000 of our specialized commercial
											databases
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i>
											Make better decisions with our customized data view and
											personal dashboards.
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Deepen data insights with our web- based data analytics,
											visualization and Interpretation tools
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Share your discoveries by exporting your data and
											visualizations.
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Manage your preferred datasets with push notifications
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Collaborate: Support Multiple users, enable teams, and
											manage user permissions
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Enjoy discounted access to eHealth4everyone’s range of
											products and services
										</li>
									</ul><hr/>
									<v-btn large color="#413A76" class=" mx-5"
									><router-link to="/login" style="color: white"
										>CHOOSE PLAN</router-link
									></v-btn
								>
								</div>
							</div>
						</div>

						<div class="col-md-4 col-sm-12">
							<div
								class="card text-center text-light container"
								style=" background-color: #454546; height:1350px"
							>
								<h5 class="mt-12">STANDARD</h5>
								<p class="px-7 mb-6">Make better decisions with custom data</p>
								<h6><span class="font-weight-bold display-1">₦2,980</span>/month</h6>
								<p class="px-7">Billed at ₦14,900 every year</p>

								<v-btn large color="#fff" style="width: 50%" class="mx-auto"
									><router-link to="/login" style="color: black"
										>CHOOSE PLAN</router-link
									></v-btn
								>
								<hr />
								<div class="card-body">
									<ul class="text-left">
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Browse all our publicly available data sources for free!
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Customer Support: Phone calls and Emails
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Receive the latest health data updates from the
											HealthThink Blog
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Receive the latest digital health updates and industry
											briefs from our Monthly Newsletter
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Mobile access
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Freely access over 1000 of our specialized commercial
											databases
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Make better decisions with our customized data view and
											personal dashboards.
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Deepen data insights with our web- based data analytics,
											visualization and Interpretation tools
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Share your discoveries by exporting your data and
											visualizations.
										</li>
										<li class="my-5 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Manage your preferred datasets with push notifications
										</li>
									</ul>
									<div style="padding-top: 150px"><hr class="bg-light"/>
									<v-btn large color="#fff" class=" mx-5"
									><router-link to="/login" style="color:black"
										>CHOOSE PLAN</router-link
									></v-btn
								></div>
								</div>
							</div>
						</div>

						<div class="col-md-4 col-sm-12">
							<div
								class="text-center"
								style="height:1350px"
							>
								<h5 class="mt-12">BASIC</h5>
								<p class="mt-6">Search public data at zero cost</p>
								<h3 class="font-weight-bold display-1 mb-7">FREE</h3>
							
								<v-btn large color="#413A76" class="text-light mx-5 mt-6"
									><router-link to="/login" style="color: white"
										>BROWSE DATA-FOR FREE</router-link
									></v-btn
								>
								<hr />
								<div class="card-body">
									<ul class="text-left list-unstyled">
										<li class=" d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i>
											Browse all our publicly available data sources for free!
										</li>
										<li class="my-4 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Customer Support: Email only
										</li>
										<li class="my-4 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i>
											Receive the latest health data updates from the
											HealthThink Blog
										</li>
										<li class="my-4 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Receive the latest digital health updates and industry
											briefs from our Monthly Newsletter
										</li>
										<li class="my-4 d-flex">
											<i
												class="fa fa-check mr-3"
												style="font-size:20px;color:green"
											></i
											>Mobile access
										</li>
									</ul>
									<div style="padding-top: 630px"><hr/>
									<v-btn large color="#413A76" class="mx-5"
									><router-link to="/login" style="color: white"
										>BROWSE DATA - FOR FREE!</router-link
									></v-btn
								></div>
								</div>
							</div>
						</div>

					</div>
				<!-- </div>
			</div> -->

			
		</div>
		<div style="background-color: #6D6DCC; height: 100px">
			<div class="container d-flex justify-content-between mt-6" >
				<p class="text-light">
					Need more? Our One-Time Data Access plan would allow you a one-time, limited access into our database
				</p>
				<button class="bg-light text-dark form-control" style="width:20%">
					Contact us
				</button>
				
			</div>
		</div>
		<div class="container mt-12">
			<h4 class="text-center">FREQUENTLY ASKED QUESTIONS</h4>
			<div class="row">
				<div class="col-md-6">
					<h5 class="font-weight-bold">Can i change my name at any time?</h5>
					<p>Yes. Simply click on the "Plan" tab in your profile and you will see your options</p>
				</div>
				<div class="col-md-6">
					<h5 class="font-weight-bold">What type of payment do you accept?</h5>
					<p>Currently, we accept Visa, Mastercard and Verve</p>
				</div>
				<div class="col-md-6">
					<div class="mb-8">
					<h5 class="font-weight-bold">Can i stop auto-renewal of plans if i want to?</h5>
					<p>Absolutely, You can do that from the "Plan" tab in your profile</p>
					</div>
					<div>
						<h5 class="font-weight-bold">what happens if i want to delete my account?</h5>
						<p>No worries. There are no long-term commitment or complicated contracts.
						If you decide HealthThink Database isn't right for you, you can easily delete your account from your profile
					</p>
					</div>
				</div>
				<div class="col-md-6">
					<h5 class="font-weight-bold">Are there per-user fees</h5>
					<p>
						No. The prices you see above are all inclusive. For example, the business plan is ₦8,580/month total no
						matter how many users you have as it's 5 or less. If you don't see a plan large enough for your team here, we have other
						plans available <a href="#">please contact us</a>
					</p>
				</div>
			</div>
			<div class="mt-12 col-md-8 col-sm-12 mx-auto" >
			<p class="text-center">
				View our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. If you have questions
				about HealthThink Database or the signup process, you can <a href="#">contact us</a> and we'll get right back to you
			</p>
			</div>
		</div>
		<div class="container-fluid">
			<section id="testimonial">
				<div class="container mt-12">
					<h3 class="text-center text-uppercase">Testimonials</h3>
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
										<div>
											<p class="px-5 text-center">{{ slide.comment }}</p>
											<p class="px-5 text-center font-weight-bold">
												{{ slide.name }}
											</p>
											<h6 class="px-5 text-center text-uppercase">
												{{ slide.title }}
											</h6>
										</div>
									</div>
								</v-row>
							</v-sheet>
						</v-carousel-item>
					</v-carousel>
				</div>
			</section>
		</div>
	</v-app>
</template>

<script>
export default {
	name: "PlanPage",
	data() {
		return {
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
	}
};
</script>

<style scoped>
.theme--dark.v-sheet {
	background-color: white !important;
	border-color: #1e1e1e;
}
a {
	text-decoration: none;
}
</style>
