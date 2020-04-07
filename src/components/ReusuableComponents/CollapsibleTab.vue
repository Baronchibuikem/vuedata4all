<template>
	<!-- This template is used to render a reusuable togglable tab component
    contents are passed into it using props[title, body, id]
 -->
	<div>
		<b-card no-body class="mb-1" color="#413A76">
			<b-card-header header-tag="header" class="p-1" role="tab">
				<b-button
					block
					href="#"
					:num="num1"
					v-b-toggle="id"
					variant="info"
					class="text-left"
					>{{ title }}</b-button
				>
			</b-card-header>
			<b-collapse :id="id" visible accordion="my-accordion" role="tabpanel">
				<b-card-body>
					<b-card-text>
						<slot></slot>
					</b-card-text>
				</b-card-body>
			</b-collapse>
		</b-card>
	</div>
</template>

<script>
export default {
	components: "CollapsibleTab",
	props: ["title", "id"]
};
</script>

<style scoped>
.btn-info {
	color: #fff !important;
	background-color: #413a76 !important;
}
</style>
