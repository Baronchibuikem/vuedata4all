<template>
	<v-card class="mx-auto" max-width="344" height="280">
		<div class="card_style">
			<v-card-text class="">
				<h5 class="py-3">
					<div class="row">
						<div class="col-4">
							<img :src="icon" class="mx-3" />
						</div>
						<div class="col-8">{{ title }}</div>
					</div>
				</h5>
				<div class="col-md-10 mx-auto">
					<p class="mb-6">{{ body }}</p>
					<button
						@click="$emit('contact', route)"
						style="background-color:#413A76"
						class="py-2 px-6 text-white"
					>
						<small>{{ name }}</small>
					</button>
				</div>
			</v-card-text>
		</div>
	</v-card>
</template>
<script>
export default {
	name: "CardComponent",
	props: ["title", "body", "icon", "route", "name"],
	created() {
		// console.log(this.icon);
	}
};
</script>

<style>
.card_style:hover {
	background-color: #413a76;
	color: white;
	height: 280px;
}
</style>
