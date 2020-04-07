<template>
	<v-app>
		<v-dialog v-model="number" persistent max-width="350">
			<template v-slot:activator="{ on }">
				<v-text
					style="color:#413A76; text-decoration: underline !important; cursor: pointer"
					dark
					v-on="on"
					>{{ title }}</v-text
				>
			</template>
			<v-card>
				<v-card-text class="pt-5">
					<slot></slot>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-app>
</template>

<script>
export default {
	props: ["number", "title"]
};
</script>

<style></style>
