<template>
	<div class="container">
		<h4>Plan</h4>
		<div class="shadow bg-white">
			<div class="ml-12">
				<h5 class="pt-5">Current Plan</h5>
				<div class="row mt-5 ">
					<div class="col-md-4">You are currently subscribed to:</div>
					<div class="col-md-3"></div>
					<div class="col-md-2">Upgrade</div>
				</div>
				<div class="row">
					<div class="col-md-4">Plan expires:</div>
					<div class="col-md-4"></div>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-12">
						<h5>Auto renew</h5>
					</div>
					<div class="col-md-7 col-sm-12">
						<v-switch v-model="drawer" class="text-center"></v-switch>
						<p>Your plan will be automatically renewed on 20th April 1998</p>
					</div>
				</div>
			</div>
		</div>

		<div class="my-12">
			<h4>Billing</h4>
			<div class="shadow bg-white">
				<h5 class="pt-12 px-12">Payment Methods</h5>
				<div class="row mx-8">
					<div class="col-md-2 col-sm-12">
						<img src="../../assets/images/masterCardLogo.png" width="70%" />
					</div>
					<div class="col-md-6 col-sm-12">
						<h6 class="my-4">MasterCard ending in 4217</h6>
						<h6>Expires: 06/2021</h6>

						<h5 class="my-4">Name on Card</h5>
						<h6>John Doe</h6>

						<v-btn large class="mt-5">DELETE</v-btn>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UpdatePlanPage"
};
</script>

<style></style>
