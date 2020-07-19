<template>
	<v-app class="">
		<div class="container-fluid AboutImg2">
			<div class="container align-items-end mt-12 pt-12">
				<h4 class="text-light mt-8 pt-8">HealthData4You Analytics</h4>
			</div>
		</div>
		<div class="text-center mt-12 container">
			<h3>Transforming Data Into Actionable Insights</h3>
			<h5 class="col-md-7 text-justify mx-auto">
				Analytical Services provides accurate, unbiased analysis on research
				performance by combining high-quality data sources with technical and
				research metrics expertise accrued over Elsevier’s 130 years in academic
				publishing.
			</h5>
		</div>
		<div class="container-fluid secondbackgroundstyle"></div>
		<div class="container">
			<div class="my-12 py-12 col-md-8 col-sm-12 mx-auto text-center">
				<h5 class="my-12">
					Our analytics team is experienced in serving policymakers, funders and
					academic and corporate research institutions around the world. Our
					offerings range from simple, targeted reports to comprehensive
					multidimensional studies, as well as data delivery and web integration
					services to meet your research management needs.
				</h5>
				<h5>
					Our offerings range from simple, targeted reports to comprehensive
					multidimensional studies, as well as data delivery and web integration
					services to meet your research management needs.
				</h5>
			</div>
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<div class="py-12 px-12">
						<h2>HealthData4You Analytical Services</h2>
						<h5>
							Analytical Services adds value to the data through careful
							analysis and the creation of reports which present clients with
							data-driven key findings and insights. The resulting insights
							answer pressing questions relevant to research management and
							inform decisions related to funding allocations, research policies
							and strategies.
						</h5>
						<ul class="font-weight-bold">
							<li>Descriptive Analytics</li>
							<li>Predictive Analytics</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 col-sm-12 InsightImg3"></div>
			</div>
			<div class="row my-12 py-12">
				<div class="col-md-6 col-sm-12 text-justify px-12 mx-auto w">
					<h3>Descriptive Analytics</h3>
					<h5>
						Together with simple graphic analysis, they form the basis of
						virtually every quantitative analysis of data. We summarise health
						data to provide insight into existing health problems and challenges
						as well as for the induction of further analysis. These include:
					</h5>
					<ul class="my-5 h5 ">
						<li>International comparative performance analysis</li>
						<li>Collaboration and researcher mobility</li>
						<li>Knowledge exchange and economic development</li>
						<li>Research usage of academic publication</li>
						<li>Metropolitan area report</li>
						<li>Emerging topics</li>
					</ul>
				</div>
				<div class="col-md-6 col-sm-12 text-justify px-12 mx-auto">
					<h3>Predictive Analytics</h3>
					<h5>
						A variety of statistical, modelling, data mining and machine
						learning techniques are utilised to study recent and historical
						data. We analyse data and predict future health trends in order to
						guide public health policy and action, including:
					</h5>
					<ul class="my-5 h5 ">
						<li>International comparative performance analysis</li>
						<li>Collaboration and researcher mobility</li>
						<li>Knowledge exchange and economic development</li>
						<li>Research usage of academic publication</li>
						<li>Metropolitan area report</li>
						<li>Emerging topics</li>
					</ul>
				</div>
			</div>
			<div class="text-center my-12 py-12">
				<h1 class="my-12">Need a More Specific Analytical Service?</h1>
				<h5 class="my-6">
					In order to provide the best solution, Analytical Services takes a
					consultative approach to understand your information needs.
				</h5>
				<h5 class="my-6">
					Analytical Services takes the time to understand your goals and
					interests in order to provide the most appropriate analysis.
				</h5>
				<h5 class="my-6">
					Please consult your local Elsevier sales team to discuss how
					Analytical Services can meet your specific needs.
				</h5>
				<router-link to="/contact"
					><v-btn large color="#413A76" class="text-light mt-5"
						>CONTACT US</v-btn
					></router-link
				>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	name: "AnalyticPage"
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

.secondbackgroundstyle {
	position: relative;
	/* height: 600px; */
	min-height: 60vh;
	margin-bottom: -54px;
	background-image: url("../../assets/images/AnalyticsImage.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.InsightImg3 {
	background-image: url("../../assets/images/AnalyticsImage2.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 400px;
}
.w:after {
	content: "";
	background-color: #b8c1c7;
	position: absolute;
	width: 5px;
	height: 100%;
	top: 10px;
	left: 100%;
	display: block;
}
</style>
