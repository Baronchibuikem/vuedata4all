<template>
	<v-app>
		<div class="container mt-12">
			<div class="row mt-5 pt-5 mx-auto">
				<div class="col-md-6 col-sm-12">
					<div class="row mt-12">
						<div
							class="col-md-6 col-sm-12 text-light"
							style="background-color:#6154CC; height:250px"
						>
							<div class="col-md-12 text-justify mt-7">
								<h5 class="mb-8">DID YOU KNOW</h5>
								<small>
									In 2001 it cost $300,000,000 to decode the human genome.
									Today, thanks to Big Data, the cost is $1,000. Soon it could
									be as low as $100
								</small>
							</div>
						</div>
						<div class="col-md-6 col-sm-12 DashImg1"></div>
					</div>
				</div>
				<div class="col-md-3 col-sm-12">
					<div class="mt-12 bg-light" style="height:250px; width: 100%">
						<div class="mx-12 pt-12">
							<h5 class="text-center">INDICATORS</h5>
							<h2 class="mt-12">2.6K</h2>
							<small>
								Indicators Available to Your Account
							</small>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-12">
					<div class="mt-12 bg-light" style="height:250px; width:100%">
						<div class="mx-12 pt-12">
							<h5 class="text-center">DATA SOURCES</h5>
							<h2 class="mt-12">1.5K</h2>
							<small>
								Data Sources Available to Your Account
							</small>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6 col-sm-12">
					<div class="mt-12 bg-light" style="height:400px">
						<div class="mx-12 pt-12">
							<div class="row">
								<div class="col-md-6 col-sm-6">
									<div class="">
										<h5 class="">BROWSE DATA</h5>

										<v-row justify="center">
											<v-dialog v-model="dialog" max-width="700" scrollable>
												<template v-slot:activator="{ on }">
													<small
														class="text-primary"
														v-on="on"
														style="cursor:pointer"
														>Ugrade to access more indicators and data
														sources</small
													>
												</template>
												<v-card style="background-color: #e5e5e5;">
													<div class="col-md-9 mx-auto">
														<v-card-text>
															<div class="d-flex justify-content-between">
																<img
																	src="../../assets/images/healththink_logo.svg"
																	width="20%"
																	class="my-4"
																/>
																<h5 class="mt-5">Select a Plan to Upgrade</h5>
																<v-btn
																	icon
																	dark
																	@click="dialog = false"
																	color="black"
																	class="my-4"
																>
																	<v-icon>mdi-close</v-icon>
																</v-btn>
															</div>
															<hr />
															<div class="row bg-light">
																<div class="col-md-6">
																	<h6>Basic(Current Plan)</h6>
																	<small>Search public data</small>
																</div>
																<div class="col-md-6">
																	<h6>FREE</h6>
																</div>
															</div>
															<div class="row bg-light mt-3">
																<div class="col-md-6">
																	<h6>Standard</h6>
																	<small
																		>Make better decisions with custom
																		data</small
																	>
																</div>
																<div class="col-md-6">
																	<h6>₦9999 / duration</h6>
																</div>
															</div>
															<div class="row bg-light mt-3">
																<div class="col-md-6">
																	<h5>Business</h5>
																	<small
																		>Make better decisions with custom
																		data</small
																	>
																</div>
																<div class="col-md-6">
																	<h6>₦1499 / duration</h6>
																</div>
															</div>
															<div class="text-center mt-4">
																Compare HealthThink Database plans at our
																<router-link to="/plan">
																	Pricing Page</router-link
																>
															</div>
														</v-card-text>
														<!-- <v-card-actions> -->
														<v-spacer></v-spacer>
														<div class="d-flex justify-content-between">
															<v-btn text @click="dialog = false">CANCEL</v-btn>

															<v-btn
																small
																color="#413A76"
																class="text-light my-1"
																@click="dialog = false"
																>SELECT PLAN</v-btn
															>
														</div>
														<!-- </v-card-actions> -->
													</div>
												</v-card>
											</v-dialog>
										</v-row>

										<h2 class="mt-5">110</h2>
										<small>
											Total Indicators Available
										</small>
										<h2 class="">10</h2>
										<small>
											Total Data Sources Available
										</small>
									</div>
								</div>
								<div class="col-md-6 col-sm-12">
									<img
										src="../../assets/images/dashImg2.png"
										height="70%"
										width="100%"
									/>
								</div>
							</div>
							<div class="d-flex justify-content-between">
								<small class="mt-5">
									Last Udated : 25-Oct-2019
								</small>
								<router-link to="/browsedata"
									><v-btn small color="#413A76" class="text-light my-1"
										>EXPLORE</v-btn
									></router-link
								>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6 col-sm-12">
					<div class="mt-12 bg-light" style="height:400px">
						<div class="mx-12 pt-12">
							<div class="row">
								<div class="col-md-6 col-sm-6">
									<div class="">
										<h5 class="">RESOURCES</h5>

										<v-row justify="center">
											<v-dialog v-model="dialog" max-width="700" scrollable>
												<template v-slot:activator="{ on }">
													<small
														class="text-primary"
														v-on="on"
														style="cursor:pointer"
														>Ugrade to access more indicators and data
														sources</small
													>
												</template>
												<v-card style="background-color: #e5e5e5;">
													<div class="col-md-9 mx-auto">
														<v-card-text>
															<div class="d-flex justify-content-between">
																<img
																	src="../../assets/images/healththink_logo.svg"
																	width="20%"
																	class="my-4"
																/>
																<h5 class="mt-5">Select a Plan to Upgrade</h5>
																<v-btn
																	icon
																	dark
																	@click="dialog = false"
																	color="black"
																	class="my-4"
																>
																	<v-icon>mdi-close</v-icon>
																</v-btn>
															</div>
															<hr />
															<div class="row bg-light">
																<div class="col-md-6">
																	<h6>Basic(Current Plan)</h6>
																	<small>Search public data</small>
																</div>
																<div class="col-md-6">
																	<h6>FREE</h6>
																</div>
															</div>
															<div class="row bg-light mt-3">
																<div class="col-md-6">
																	<h6>Standard</h6>
																	<small
																		>Make better decisions with custom
																		data</small
																	>
																</div>
																<div class="col-md-6">
																	<h6>₦9999 / duration</h6>
																</div>
															</div>
															<div class="row bg-light mt-3">
																<div class="col-md-6">
																	<h5>Business</h5>
																	<small
																		>Make better decisions with custom
																		data</small
																	>
																</div>
																<div class="col-md-6">
																	<h6>₦1499 / duration</h6>
																</div>
															</div>
															<div class="text-center mt-4">
																Compare HealthThink Database plans at our
																<router-link to="/plan">
																	Pricing Page</router-link
																>
															</div>
														</v-card-text>
														<!-- <v-card-actions> -->
														<v-spacer></v-spacer>
														<div class="d-flex justify-content-between">
															<v-btn text @click="dialog = false">CANCEL</v-btn>

															<v-btn
																small
																color="#413A76"
																class="text-light my-1"
																@click="dialog = false"
																>SELECT PLAN</v-btn
															>
														</div>
														<!-- </v-card-actions> -->
													</div>
												</v-card>
											</v-dialog>
										</v-row>

										<h2 class="mt-5">63</h2>
										<small>
											Resources Available
										</small>
									</div>
								</div>
								<div class="col-md-6 col-sm-12">
									<img
										src="../../assets/images/dashImg3.png"
										height="100%"
										width="100%"
									/>
								</div>
							</div>
							<div class="d-flex justify-content-between mt-12 pt-3">
								<small class="mt-5">
									Last Udated : 25-Oct-2019
								</small>
								<router-link to="/resources">
									<v-btn small color="#413A76" class="text-light my-1"
										>EXPLORE</v-btn
									></router-link
								>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row my-12">
				<div class="col-md-4 col-sm-12 bg-light">
					<div class="d-flex justify-content-start">
						<h5 class="mr-3">DATA ANALYTICS</h5>
						<small>- Unavailable</small>
					</div>
					<v-row>
						<v-dialog v-model="dialog" max-width="700" scrollable>
							<template v-slot:activator="{ on }">
								<small
									class="text-primary ml-right ml-3"
									v-on="on"
									style="cursor:pointer"
									>Ugrade to view</small
								>
							</template>
							<v-card style="background-color: #e5e5e5;">
								<div class="col-md-9 mx-auto">
									<v-card-text>
										<div class="d-flex justify-content-between">
											<img
												src="../../assets/images/healththink_logo.svg"
												width="20%"
												class="my-4"
											/>
											<h5 class="mt-5">Select a Plan to Upgrade</h5>
											<v-btn
												icon
												dark
												@click="dialog = false"
												color="black"
												class="my-4"
											>
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</div>
										<hr />
										<div class="row bg-light">
											<div class="col-md-6">
												<h6>Basic(Current Plan)</h6>
												<small>Search public data</small>
											</div>
											<div class="col-md-6">
												<h6>FREE</h6>
											</div>
										</div>
										<div class="row bg-light mt-3">
											<div class="col-md-6">
												<h6>Standard</h6>
												<small>Make better decisions with custom data</small>
											</div>
											<div class="col-md-6">
												<h6>₦9999 / duration</h6>
											</div>
										</div>
										<div class="row bg-light mt-3">
											<div class="col-md-6">
												<h5>Business</h5>
												<small>Make better decisions with custom data</small>
											</div>
											<div class="col-md-6">
												<h6>₦1499 / duration</h6>
											</div>
										</div>
										<div class="text-center mt-4">
											Compare HealthThink Database plans at our
											<router-link to="/plan"> Pricing Page</router-link>
										</div>
									</v-card-text>
									<!-- <v-card-actions> -->
									<v-spacer></v-spacer>
									<div class="d-flex justify-content-between">
										<v-btn text @click="dialog = false">CANCEL</v-btn>

										<v-btn
											small
											color="#413A76"
											class="text-light my-1"
											@click="dialog = false"
											>SELECT PLAN</v-btn
										>
									</div>
									<!-- </v-card-actions> -->
								</div>
							</v-card>
						</v-dialog>
					</v-row>
					<img :src="DataPic" class="" height="50%" width="100%" />
					<div class="d-flex justify-content-center py-1">
						<v-btn small color="#413A76" class="text-light my-1">UPGRADE</v-btn>
					</div>
				</div>
				<div class="col-md-4 mx-auto col-sm-12 bg-light">
					<div class="col-md-9 mx-auto">
						<h5>SUBMIT/REQUEST DATA</h5>
						<small>
							Please click a button below to submit a dataset or request for
							one.
						</small>

						<div class="mt-3">
							<small>To submit data:</small><br />
							<router-link exact to="/submitdata"
								><v-btn small color="#413A76" class="text-light my-1"
									>SUBMIT DATA</v-btn
								></router-link
							>
						</div>
						<div class="mt-3">
							<small>To request data</small><br />
							<router-link exact to="/requestdata"
								><v-btn small color="#413A76" class="text-light my-1"
									>REQUEST DATA</v-btn
								></router-link
							>
						</div>
						<small class="text-danger">
							You can request specific data without a subscription
						</small>
					</div>
				</div>
				<div class="col-md-3 col-sm-12 bg-light">
					<h5>HEALTHTHINK BLOG</h5>
					<img :src="DataPic4" class="" height="60%" width="100%" />
					<div class="d-flex justify-content-center py-1">
						<v-btn small color="#413A76" class="text-light my-1"
							><a
								href="https://healththink.org/"
								target="__blank__"
								style="color:white"
								>VISIT BLOG</a
							></v-btn
						>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import DataPic from "../../assets/images/dashImg3.png";
import DataPic4 from "../../assets/images/dashImg4.png";

export default {
	name: "PlanPage",
	data() {
		return {
			DataPic,
			DataPic4,
			dialog: false
		};
	}
};
</script>

<style scoped>
.DashImg1 {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("../../assets/images/dashImg1.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 250px;
}
a {
	text-decoration: none;
}
</style>
