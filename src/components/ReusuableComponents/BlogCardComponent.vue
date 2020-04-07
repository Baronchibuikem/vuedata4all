<template>
	<v-card class="" max-width="400">
		<v-img class="white--text" height="200px" :src="image" />
		<div class="col-md-12">
			<div class="d-flex justify-content-between">
				<v-card-subtitle class="pb-0">{{ tag }}</v-card-subtitle>
				<v-card-subtitle class="pb-0">{{ date }}</v-card-subtitle>
			</div>
			<v-card-text class="text--primary">
				<slot></slot>
			</v-card-text>

			<v-card-actions>
				<small class="text-primary">
					<i class="far fa-file-pdf" style="font-size:20px;color:red"></i>
					<a :href="file"> Download PDF</a></small
				>
			</v-card-actions>
		</div>
	</v-card>
</template>

<script>
export default {
	props: ["tag", "date", "file", "image"]
};
</script>

<style></style>
