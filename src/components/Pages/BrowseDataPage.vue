<template>
	<div class="container my-12">
		<div class="my-12 py-12">
			<h4>Please select a program area to begin</h4>
			<div class=" container row py-12">
				<v-card
					class=" my-5 mx-3"
					width="250px"
					v-for="item in items"
					:key="item.title"
					elevation="10"
				>
					<div class="text-center py-7">
						<img :src="item.image" alt="" width="30%" />
						<h5>{{ item.title }}</h5>
					</div>
				</v-card>
			</div>
			<div class="row col-md-10 mx-auto mb-5 bg-light">
				<div class="col-md-6 col-sm-12 text-center mx-auto">
					Searching for something specific? Send us a request. We can help you
					with that
				</div>
				<div class="col-md-6 col-sm-12 text-center">
					<v-btn large color="#413A76" class="text-light"
						><router-link exact to="/requestdata" class="text-light"
							>REQUEST DATA</router-link
						></v-btn
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import population from "../../assets/images/ResourcePopulation.png";
import hiv from "../../assets/images/ResourceHIV.png";
import tb from "../../assets/images/ResourceTC.png";
import health from "../../assets/images/ResourceMentalHealth.png";
import child from "../../assets/images/ResourceChild.png";
import malaria from "../../assets/images/ResourceMalaria.png";
import maternal from "../../assets/images/ResourceNaternalHealth.png";
import lifestyle from "../../assets/images/ResourceLifespan.png";
import nutrition from "../../assets/images/ResourceNutrition.png";
import environment from "../../assets/images/ResourceHealth.png";
import familyhealth from "../../assets/images/ResourceFamilyPlanning.png";
import pham from "../../assets/images/ResourcePham.png";

export default {
	name: "BrowseDataPage",
	data() {
		return {
			items: [
				{
					image: population,
					title: "Population"
				},
				{
					image: hiv,
					title: "HIV/AIDS"
				},
				{
					image: tb,
					title: "Tuberculosis"
				},
				{
					image: health,
					title: "Mental Health"
				},
				{
					image: child,
					title: "Child Health"
				},
				{
					image: malaria,
					title: "Malaria"
				},
				{
					image: maternal,
					title: "Maternal Health"
				},
				{
					image: lifestyle,
					title: "Lifestyle"
				},
				{
					image: nutrition,
					title: "Nutrition"
				},
				{
					image: pham,
					title: "Pharm"
				},
				{
					image: familyhealth,
					title: "Family Health"
				},
				{
					image: environment,
					title: "Environmental Health"
				}
			]
		};
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
}
</style>
