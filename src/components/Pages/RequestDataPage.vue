<template>
	<v-app>
		<div class="container-fluid AboutImg2">
			<div class="container align-items-end mt-12 pt-12">
				<h4 class="text-light mt-8 pt-8">Request Data</h4>
			</div>
		</div>
		<div class="container-fluid RequestDataImg"></div>
		<div class="container my-12">
			<h3>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod
			</h3>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
				voluptatem sequi nesciunt. Neque porro quisquam est, qui
			</p>
			<div class="card border">
				<div class="p-5">
					<p>
						Please fill in the online form below supplying as much detail as
						possible regarding the data you require
					</p>
					<p>Note: All “*” fields are required</p>
					<h6 class="mt-12 ml-3">Name</h6>
					<form @submit.prevent="formSubmit">
						<div class="container row">
							<div class="col-md-2 col-sm-12">
								<v-overflow-btn
									class="my-0"
									:items="prefixes"
									label="prefix"
									v-model="prefix"
									target="#dropdown-example"
								></v-overflow-btn>
							</div>
							<div class="col-md-5 col-sm-12">
								<v-text-field
									label="First Name"
									outlined
									v-model="first_name"
								></v-text-field>
							</div>
							<div class="col-md-5 col-sm-12">
								<v-text-field
									label="Last Name *"
									outlined
									v-model="last_name"
								></v-text-field>
							</div>

							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="Title/Designation *"
									outlined
									v-model="designation"
								></v-text-field>
							</div>
							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="Affiliation(Organization, Institute) *"
									outlined
									v-model="affilation"
								></v-text-field>
							</div>
							<div class="col-md-12 col-sm-12">
								<v-text-field
									label="Address *"
									outlined
									v-model="address"
								></v-text-field>
							</div>
							<div class="col-md-12 col-sm-12">
								<v-text-field
									label="Street Address *"
									outlined
									v-model="street_address"
								></v-text-field>
							</div>
							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="City"
									outlined
									v-model="city"
								></v-text-field>
							</div>
							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="State/Province/Region"
									outlined
									v-model="state"
								></v-text-field>
							</div>
							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="Zip/Postal Code"
									outlined
									type="number"
									v-model="zip_code"
								></v-text-field>
							</div>
							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="Country"
									outlined
									v-model="country"
								></v-text-field>
							</div>

							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="Email *"
									outlined
									type="email"
									v-model="email"
								></v-text-field>
							</div>
							<div class="col-md-6 col-sm-12">
								<v-text-field
									label="Phone Number *"
									outlined
									type="number"
									v-model="phone_number"
								></v-text-field>
							</div>

							<div class="col-md-12 col-sm-12">
								<v-textarea v-model="purpose" outlined>
									<template v-slot:label>
										<div>
											PURPOSE OF REQUEST (A SPECIFIC PURPOSE MAY HELP US
											DETERMINE THE MOST APPROPRIATE DATA SET TO SEND YOU
											<small>*</small>
										</div>
									</template>
								</v-textarea>
							</div>
						</div>
						<span class=" ml-3">
							Time period for which data is required: *
						</span>
						<div class="container row">
							<div class="col-md-3 col-sm-12">
								<label>From</label>
								<input type="date" v-model="start_date" class="form-control" />
							</div>
							<div class="col-md-3 col-sm-12">
								<label>To</label>
								<input type="date" v-model="end_date" class="form-control" />
							</div>
						</div>

						<div class="col-md-12 col-sm-12">
							<v-textarea v-model="description" outlined>
								<template v-slot:label>
									<div>
										Specific Data Request/Description (Please provide a detailed
										description of the data requested, including key variables
										needed)
										<small>*</small>
									</div>
								</template>
							</v-textarea>
						</div>
						<v-btn
							large
							color="#413A76"
							class="text-light mt-4 ml-3"
							type="submit"
							>SEND REQUEST</v-btn
						>
					</form>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import ApiCalls from "../../apiRoots/api_calls";

const { PostRequestData } = ApiCalls.PostMethods;

export default {
	name: "RequestDataPage",
	data() {
		return {
			prefix: "",
			first_name: "",
			last_name: "",
			designation: "",
			affilation: "",
			address: "",
			street_address: "",
			city: "",
			state: "",
			zip_code: "",
			country: "",
			email: "",
			phone_number: "",
			purpose: "",
			start_date: "",
			end_date: "",
			description: "",
			prefixes: [" Mr", "Mrs", "Miss", "Master"]
		};
	},
	methods: {
		formSubmit() {
			const data = {
				prefix: this.prefix,
				first_name: this.first_name,
				last_name: this.last_name,
				designation: this.designation,
				affilation: this.affilation,
				address: this.address,
				street_address: this.street_address,
				city: this.city,
				state: this.state,
				zip_code: this.zip_code,
				country: this.country,
				email: this.email,
				phone_number: this.phone_number,
				purpose: this.purpose,
				start_date: this.start_date,
				end_date: this.end_date,
				description: this.description
			};
			const vm = this;
			PostRequestData(data)
				.then(res => {
					if (res.status === 201) {
						vm.$router.push("/success");
					}
				})
				.catch(err => console.error(err));
		}
	}
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
	height: 220px;
}
.btn-info {
	color: #fff !important;
	background-color: #413a76 !important;
}
.RequestDataImg {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("../../assets/images/RequestDataImg1.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
	height: 300px;
}
</style>
