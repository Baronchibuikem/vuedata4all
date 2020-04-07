<template>
	<div class="mx-12 mt-12 pt-12">
		<div class="row">
			<div class="col-md-3 col-sm-12 ">
				<!-- Reusuable components for CollapsibleTab starts here -->
				<CollapsibleTab
					title="Insight Type"
					id="1"
					style="background-color: #e5e5e5;"
				>
					<div v-for="item in insights" :key="item.id">
						<input type="checkbox" class="mr-5" />
						<span>{{ item }}</span>
						<v-divider></v-divider>
					</div>
				</CollapsibleTab>
				<CollapsibleTab title="Topic" id="2">
					<div v-for="item in topics" :key="item.id">
						<input type="checkbox" class="mr-5" />
						<span>{{ item }}</span>
						<v-divider></v-divider>
					</div>
				</CollapsibleTab>
				<CollapsibleTab title="Indicator" id="3">
					<div v-for="item in indicators" :key="item.id">
						<input type="checkbox" class="mr-5" />
						<span>{{ item }}</span>
						<v-divider></v-divider>
					</div>
				</CollapsibleTab>
				<CollapsibleTab title="Year" id="4">
					<div v-for="item in years" :key="item.id">
						<input type="checkbox" class="mr-5" />
						<span>{{ item }}</span>
						<v-divider></v-divider>
					</div>
				</CollapsibleTab>
				<CollapsibleTab title="Location" id="5">
					<div v-for="item in locations" :key="item.id">
						<input type="checkbox" class="mr-5" />
						<span>{{ item }}</span>
						<v-divider></v-divider>
					</div>
				</CollapsibleTab>
				<!-- End of reusuable CollasibleTab component -->
			</div>
			<div class="col-md-9 col-sm-12">
				<div class="row">
					<div
						class="col-md-6 col-sm-12"
						v-for="article in allArticles"
						:key="article.id"
					>
						<BlogCardComponent
							:tag="article.category_name"
							:date="article.date_created"
							:file="article.file"
							:image="article.images"
						>
							<h6>
								{{ article.title }}
							</h6>
							<small>
								{{ article.access }}
							</small>
							<p class="">
								{{ article.content | truncate(50, "...") }}
							</p>
						</BlogCardComponent>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CollapsibleTab from "../ReusuableComponents/CollapsibleTab.vue";
import BlogCardComponent from "../ReusuableComponents/BlogCardComponent";
import { mapGetters, mapActions } from "vuex";

export default {
	components: {
		CollapsibleTab,
		BlogCardComponent
	},
	data() {
		return {
			insights: [
				"All",
				"Reports",
				"Publication",
				"Research Papers",
				"Infographics",
				"Definitions",
				"Country Profile"
			],
			topics: [
				"All",
				"Population",
				"HIV/AIDS",
				"Tuberculosis",
				"Mental Health",
				"Family Health",
				"Child Health",
				"Malaria",
				"Lifestyle",
				"Nutrition",
				"Pharma",
				"Maternal Health",
				"Environmental Health"
			],
			indicators: ["All"],
			years: ["All"],
			locations: ["All"]
		};
	},
	computed: mapGetters(["allArticles"]),
	methods: {
		...mapActions(["fetchArticles"])
	},
	created() {
		this.fetchArticles();
	}
};
</script>

<style></style>
