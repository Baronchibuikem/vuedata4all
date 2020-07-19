<template>
	<v-footer color="#413A76">
		<div class="container mt-5 text-light">
			<div class="row">
				<div class="col-md-8 col-sm-12">
					<div class="row">
						<div class="col-md-3 col-sm-12 text-center">
							<img
								src="../../assets/images/logo.jpg"
								class="img-responsive"
								width="100%"
							/>
							HealthData4You<br>
							<small
								>
								<span style="text-decoration: underline"
									>Product of Data for all community</span
								></small
							>
						</div>
						<div class="col-md-2 col-sm-12">
							<ul class="list-unstyled">
								<h6>ABOUT</h6>
								<li><small>Our Data</small></li>
								<li><small>HealthData4You Analytics</small></li>
								<li><small>Pricing</small></li>
								<li><small>Privacy Policy</small></li>
								<li><small>Terms & Conditions</small></li>
							</ul>
						</div>
						<div class="col-md-2 col-sm-12">
							<ul class="list-unstyled">
								<h6>SOLUTIONS</h6>
								<li><small>Data Broking</small></li>
								<li>
									<small
										><router-link to="/submitdata"
											>Submit Data</router-link
										></small
									>
								</li>
								<li>
									<small
										><router-link to="/requestdata"
											>Request Data</router-link
										></small
									>
								</li>
								<li><small>On-Demand Consultancy</small></li>
								<li><small>One-Time Data Access</small></li>
								<li>
									<small><router-link to="/faq">FAQ</router-link></small>
								</li>
							</ul>
						</div>
						<div class="col-md-2 col-sm-12">
							<ul class="list-unstyled">
								<h6>INSIGHTS</h6>
								<li><small>Research Articles</small></li>
								<li><small>Publications</small></li>
								<li><small>Journals</small></li>
								<li><small>White Papers</small></li>
								<li><small>Data4U Blog</small></li>
							</ul>
						</div>
						<div class="col-md-3 col-sm-12">
							<ul class="list-unstyled">
								<h6>CONTACT US</h6>
								<li><small>+2349021720570</small></li>
								<li><small>info@Data4u.com</small></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-12 ">
					<h6 class="mt-4">Subscribe to HealthData4You via Email</h6>
					<div class="row">
						<div class="col-md-8 text-light">
							<input
								class="form-control py-5"
								placeholder="Enter your email address"
								type="text"
							/>
						</div>
						<div class="col-md-3">
							<button
								style="background-color: white"
								class="py-2 px-4 text-dark"
							>
								<small>SUBSCRIBE</small>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</v-footer>
</template>
<script>
export default {};
</script>

<style scoped>
a {
	color: white !important;
}

.input-color {
	color: white !important;
}
</style>
