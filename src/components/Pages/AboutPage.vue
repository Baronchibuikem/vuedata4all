<template>
	<v-app>
		<div class="container-fluid AboutImg2">
			<div class="container align-items-end mt-12 pt-12">
				<h4 class="text-light mt-8 pt-8">About HealthData4You</h4>
			</div>
		</div>
		<div class="container mb-12">
			<div class="row mt-5 shadow bg-white">
				<div class="col-md-6 col-sm-12">
					<div class="pt-12 mt-5 col-md-8 mx-auto ">
						<p>
							HealthData4You provides information, analytics solutions and digital
							tools in the areas of strategic research management, R&D
							performance, clinical decision support, and professional
							education.
						</p>
					</div>
				</div>
				<div class="col-md-6 col-sm-12 AboutImg1"></div>
			</div>

			<div class="row mt-12 bg-white shadow">
				<div class="col-md-5 col-sm-12 AboutImg3"></div>
				<div class="col-md-6 col-sm-12">
					<div class="ml-5">
						<h1>Our Mission</h1>
						<p>
							Advance the state-of-the-art of health data analytics,
							visualization, and civic engagement through collaboration and
							innovation.
						</p>
						<h1>Our Vision</h1>
						<p>
							We envision a world where everyone counts and is engaged; where
							healthcare projects are data-driven and have impact measured;
							where healthcare research is strongly supported and coordinated
							and where governments are open and accountable.
						</p>
					</div>
				</div>
			</div>

			<div class="my-12">
				<h1>Solutions</h1>
				<div class="row">
					<div class="col-md-3 col-sm-12">
						<img src="../../assets/images/AboutImg4.png" width="20%" />
						<h6>On-demand health data & analytics</h6>
					</div>
					<div class="col-md-3 col-sm-12">
						<img
							src="../../assets/images/AboutImg11.png"
							class="rounded-circle"
							width="20%"
						/>
						<h6>Cleaned and structured, health data tailored to your needs</h6>
					</div>
					<div class="col-md-3 col-sm-12">
						<img
							src="../../assets/images/AboutImg5.png"
							class="rounded-circle"
							width="20%"
						/>
						<h6>Free health information for general knowledge</h6>
					</div>
					<div class="col-md-3 col-sm-12">
						<img
							src="../../assets/images/AboutImg7.png"
							class="rounded-circle"
							width="20%"
						/>
						<h6>Detailed health information down to the local level</h6>
					</div>
					<div class="row mt-5 bg-white shadow">
						<div class="col-md-6 col-sm-12">
							<div class="pt-5 mt-5 col-md-8 mx-auto">
								<h4>Our Data</h4>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat, sed diam voluptua. At vero eos et accusam et
									justo duo dolores et ea rebum. Stet clita kasd gubergren, no
								</p>
								<v-btn large color="#413A76" class="text-light"
									>LEARN MORE</v-btn
								>
							</div>
						</div>
						<div class="col-md-6 col-sm-12 AboutImg9"></div>
					</div>

					<div class="row mt-5 bg-white mt-12 shadow">
						<div class="col-md-6 col-sm-12 AboutImg10"></div>
						<div class="col-md-6 col-sm-12">
							<div class="pt-5 mt-5 col-md-8 mx-auto">
								<h4>HealthData4You Analytics</h4>
								<p>
									Sometimes, data is all you need. Other times, you need the
									benefit of data that has been aggregated, synthesized and
									formatted to provide greater insight. Our information database
									powers some of the health industry’s leading research and
									analytic tools
								</p>
								<v-btn large color="#413A76" class="text-light"
									>LEARN MORE</v-btn
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	name: "Aboutpage",
	data() {
		return {
			tab: null,
			items: [
				{
					img: "../../assets/images/AboutImg4.png",
					text: `On-demand health data & analytics`
				},
				{
					img: "../../assets/images/AboutImg11.png",
					text: `Cleaned and structured, health data tailored to your needs`
				},
				{
					img: "../../assets/images/AboutImg5.png",
					text: `Free health information for general knowledge`
				},
				{
					img: "../../assets/images/AboutImg7.png",
					text: `Detailed health information down to the local level`
				}
			]
		};
	}
};
</script>

<style scoped>
.AboutImg1 {
	background-image: url("../../assets/images/AboutImg1.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 300px;
}
.AboutImg3 {
	background-image: url("../../assets/images/AboutImg3.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 320px;
}
.AboutImg2 {
	background-image: url("../../assets/images/AboutImg2.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 250px;
}
.AboutImg9 {
	background-image: url("../../assets/images/AboutImg9.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 370px;
}
.AboutImg10 {
	background-image: url("../../assets/images/AboutImg10.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 370px;
}
</style>
