<template>
	<v-app style="background-color: white">
		<div class="container-fluid mt-12">
			<div class="container pt-12 mt-12">
				<h2 class="text-center">CHOOSE A PLAN AND GET STARTED</h2>
				<p class="text-center">
					We have a range of plans to suit your research needs
				</p>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-9 col-sm-12 mx-auto">
					<div class="row">
						<div class="col-md-4 col-sm-12">
							<div
								class="card text-center container"
								style="width: 18rem; background-color: #E8EFF7; height:1500px"
							>
								<h5 class="mt-12">BASIC</h5>
								<h3 class="font-weight-bold display-2">FREE</h3>
								<p>Search public data</p>
								<p class="">
									<router-link to="#" style="text-decoration: underline"
										>View Details</router-link
									>
								</p>
								<v-btn large color="#413A76" class="text-light mx-5 mt-6"
									><router-link to="/login" style="color: white"
										>BROWSE DATA-FOR FREE</router-link
									></v-btn
								>
								<hr />
								<div class="card-body">
									<ul class="text-left list-unstyled">
										<li class="my-4 d-flex">
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
								</div>
							</div>
						</div>

						<div class="col-md-4 col-sm-12">
							<div
								class="card text-center text-light container"
								style="width: 18rem; background-color: #6158C9; height:1500px"
							>
								<h5 class="mt-12">STANDARD</h5>
								<h3 class="font-weight-bold display-2">₦9999</h3>
								<p class="px-7">Make better decisions with custom data</p>
								<p>
									<router-link
										to="#"
										style="color: white !important; text-decoration: underline"
										>View Details</router-link
									>
								</p>

								<v-btn large class="mx-5" style="background-color: #E8EFF7; "
									><router-link to="/login" style="color: black !important"
										>SUBSCRIBE</router-link
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
								</div>
							</div>
						</div>

						<div class="col-md-4 col-sm-12">
							<div
								class="card text-center"
								style="width: 18rem; background-color: #E8EFF7; height:1500px"
							>
								<h5 class="mt-12">BUSINESS</h5>
								<h3 class="font-weight-bold display-2">₦14999</h3>
								<p class="px-7">Make better decisions with custom data</p>
								<p>
									<router-link to="/login" style="text-decoration: underline"
										>View Details</router-link
									>
								</p>
								<v-btn large color="#413A76" class=" mx-5"
									><router-link to="/login" style="color: white"
										>SUBSCRIBE</router-link
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
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row mt-7">
				<div
					class="col-md-4 col-sm-12 text-light"
					style="background-color: #6154CC"
				>
					<div class="mt-12 pt-9 col-md-10 mx-auto">
						<p class="">
							You can also join our special plan
						</p>
						<h4 class="my-8">ONE-TIME DATA ACCESS</h4>
						<p class="">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto
						</p>
						<v-btn
							large
							color="#413A76"
							class="text-light mt-2"
							style="background-color: #E8EFF7"
							><router-link to="/contact">contact us</router-link></v-btn
						>
					</div>
				</div>
				<div class="col-md-7 col-sm-12">
					<img src="../../assets/images/PlanImg.png" width="100%" />
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<section id="testimonial">
				<div class="container mt-12">
					<h1 class="text-center">Testimonials</h1>
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
