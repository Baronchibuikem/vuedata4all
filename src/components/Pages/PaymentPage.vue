<template>
	<div class="container">
		<transition name="fade">
			<div class="">
				<h3 class="font-weight-bold">You're Almost There</h3>
				<div class="d-flex justify-content-between">
					<span>CHOOSE A SUBSCRIPTION PLAN</span>
					<span
						><router-link exact to=""
							>learn More about our plan</router-link
						></span
					>
				</div>

				<div class="row mt-4 d-flex justify-content-center">
					<div
						class="col-md-3 col-sm-12 text-light shadow text-center"
						style="background-color:#413A76; cursor:pointer"
						@click="price = free"
					>
						<div class="py-12">
							<h6>Basic</h6>
							<h4>{{ free }}</h4>
						</div>
					</div>
					<div
						class="col-md-3 col-sm-12 mx-5 text-light text-center"
						style="background-color:#413A76; cursor:pointer"
						@click="price = standard"
					>
						<div class="py-12">
							<h6>Standard</h6>
							<h4>{{ standard }}</h4>
						</div>
					</div>
					<div
						class="col-md-3 col-sm-12 text-light text-center"
						style="background-color:#413A76; cursor:pointer"
						@click="price = business"
					>
						<div class="py-12">
							<h6>Business</h6>
							<h4>{{ business }}</h4>
						</div>
					</div>
				</div>

				<div class="mt-4">
					<h4>Secure Payment Information</h4>
					<form>
						<div class="my-4">
							<label>NAME OF CARD</label>
							<input type="text" name="" class="form-control" />
						</div>
						<div class="">
							<label>CARD NUMBERS</label>
							<input
								type="number"
								name=""
								class="form-control"
								placeholder="0000 0000 0000 0000"
							/>
						</div>
						<div class="d-flex justify-content-between mt-4">
							<div class="">
								<label>EXPIRY DATE(MM/YY)</label>
								<input type="month" name="" class="form-control" />
							</div>
							<div>
								<label>CVV</label>
								<input
									type="number"
									name=""
									class="form-control"
									placeholder="000"
								/>
							</div>
						</div>
					</form>
					<div class="mt-4">
						<h6>SELECT CARD TYPE</h6>
						<div class="d-flex justify-content-center">
							<img
								src="../../assets/images/visa.jpeg"
								class="img-responsive mx-5"
								width="10%"
							/>
							<img
								src="../../assets/images/masterCard.jpg"
								class="img-responsive"
								width="10%"
							/>
						</div>
						<div class="d-flex justify-content-between my-5 font-weight-bold">
							<h5 class="">Total Billed</h5>
							<h5 class="">{{ price }}</h5>
						</div>
						<p>
							By purchasing, I agree to the Terms and Conditions and Privacy
							Policy. Your subscription will automaticatically renew every year,
							but you can cancel at anytime
						</p>
					</div>
					<div class="d-flex justify-content-center">
						<v-btn
							large
							color="white"
							class=" mx-auto mt-4"
							@click="handlePrevious"
							>PREVIOUS</v-btn
						>

						<v-btn
							@click="register"
							type="submit"
							large
							color="#413A76"
							class="text-light mt-4"
							>START BROWSING DATA</v-btn
						>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	name: "PaymentPage",
	props: ["register", "handlePrevious"],
	data() {
		return {
			price: "",
			standard: "$99.99",
			business: "$149.99",
			free: "FREE"
		};
	}
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
