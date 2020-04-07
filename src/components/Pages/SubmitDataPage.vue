<template>
	<v-app>
		<div class="jumbotron submitDataBg mb-5"></div>
		<div class="container mt-5">
			<h2>Do You believe in open data?</h2>
			<h2>Do you want your data to be maximally utilized?</h2>
			<h2>Do you want to further contribute to public health knowledge?</h2>
			<p class="mt-5 pt-5">
				If you do, let’s collaborate. Join the Nigeria Health Data
				Collaborative! Submit your data, and you can get more data as well. It
				will be added to our data bank to increase the value of data analysed
				and presented on HealthThink. Together, we can improve public health
				research and promote faster progress towards enhancing the lives of
				Nigerians.
			</p>
			<form v-on:submit.prevent>
				<div class="card">
					<div class="col-md-11 col-sm-12 mt-6 mx-auto">
						<p>
							Note: All "<span class="text-danger ">*</span>" fields are
							required
						</p>
						<label class="font-weight-bold">Name</label><br />
						<div class="row">
							<div class="col-md-2 col-sm-12">
								<input type="text" class="form-control" v-model="prefix" />
								<span>Prefix</span>
							</div>
							<div class="col-md-4 col-sm-12">
								<input type="text" class="form-control" v-model="first_name" />
								<span>First Name</span>
							</div>
							<div class="col-md-4 col-sm-12">
								<input type="text" class="form-control" v-model="last_name" />
								<span>Last Name</span>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span>Research Topic<span class="text-danger ">*</span></span>
								<input
									type="text"
									class="form-control"
									v-model="research_topic"
								/>
							</div>
							<div class="col-md-6 col-sm-12">
								<span
									>Research Location(State)<span class="text-danger "
										>*</span
									></span
								>
								<input
									type="text"
									class="form-control"
									v-model="research_location"
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span
									>Geographical Coverage<span class="text-danger "
										>*</span
									></span
								>
								<input
									type="text"
									class="form-control"
									v-model="geographical_coverage"
								/>
							</div>
							<div class="col-md-3 col-sm-12">
								<span>Start Date</span>
								<input type="date" class="form-control" v-model="start_date" />
							</div>
							<div class="col-md-3 col-sm-12">
								<span>End Date</span>
								<input type="date" class="form-control" v-model="end_date" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span>Study Design<span class="text-danger ">*</span></span>
								<input
									type="text"
									class="form-control"
									v-model="study_design"
								/>
							</div>
							<div class="col-md-3 col-sm-12">
								<span>Study Population<span class="text-danger ">*</span></span>
								<input
									type="number"
									class="form-control"
									v-model="study_population"
								/>
							</div>
							<div class="col-md-3 col-sm-12">
								<span>Sample Size</span>
								<input
									type="number"
									class="form-control"
									placeholder="0000"
									v-model="sample_size"
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span
									>Sampling Technique<span class="text-danger ">*</span></span
								>
								<input
									type="text"
									class="form-control"
									v-model="sampling_technique"
								/>
							</div>
							<div class="col-md-6 col-sm-12">
								<span
									>Sampling Unit(Individual, Household, School)<span
										class="text-danger "
										>*</span
									></span
								>
								<input
									type="text"
									class="form-control"
									v-model="sampling_unit"
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span>Data Collection Tools</span>
								<textarea
									class="form-control"
									rows="4"
									v-model="data_collection_tools"
								></textarea>
							</div>
							<div class="col-md-6 col-sm-12">
								<span
									>Key Variables(Indicate at most 5 key variables available in
									the data)<span class="text-danger ">*</span></span
								>
								<textarea
									class="form-control"
									rows="4"
									v-model="key_variables"
								></textarea>
							</div>
						</div>
						<div class="mt-5">
							<p style="background-color:#eee">{{ selected }}</p>
							<v-checkbox
								v-model="selected"
								label="NON COMMUNICABLE DISEASES (CARDIOVASCULAR DISEASES AND CANCER)"
								value="NON COMMUNICABLE DISEASES (CARDIOVASCULAR DISEASES AND CANCER)"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Malaria"
								value="Malaria"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="HIV/AIDS"
								value="HIV/AIDS"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Tuberculosis"
								value="Tuberculosis"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Other Infectious Disease"
								value="Other Infectious Disease"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Maternal Health"
								value="Maternal Health"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Child Health"
								value="Child Health"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Adolescent Health"
								value="Adolescent Health"
							></v-checkbox>

							<v-checkbox
								v-model="selected"
								label="Reproductive and Family Health"
								value="Reproductive and Family Health"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Community Health"
								value="Community Health"
							></v-checkbox>
							<v-checkbox
								v-model="selected"
								label="Others"
								value="Others"
							></v-checkbox>
						</div>
						<h5>Private Investigator<span class="text-danger ">*</span></h5>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span>Name<span class="text-danger ">*</span></span>
								<input type="text" class="form-control" v-model="name" />
							</div>
							<div class="col-md-6 col-sm-12">
								<span>Affiliation</span>
								<input type="text" class="form-control" v-model="affilation" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span>Contact Number<span class="text-danger ">*</span></span>
								<input
									type="number"
									class="form-control"
									v-model="phone_number"
								/>
							</div>
							<div class="col-md-6 col-sm-12">
								<span>Email Address<span class="text-danger ">*</span></span>
								<input type="email" class="form-control" v-model="email" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span
									>Funder(s)/Sponsor(s)<span class="text-danger ">*</span></span
								>
								<input type="text" class="form-control" v-model="sponsor" />
							</div>
							<div class="col-md-6 col-sm-12">
								<span>Upload Data Codebook</span>
								<!-- <v-file-input
									show-size
									placeholder="Upload your documents"
									label="File input"
									v-model="data_codebook"
								></v-file-input> -->
								<input type="file" name="file" @change="onFileSelected" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<span>Upload Questionnaire</span>
								<!-- <v-file-input
									show-size
									placeholder="Upload your documents"
									label="File input"
									v-model="questionaire"
								></v-file-input> -->
								<input type="file" name="file" @change="onFileSelected" />
							</div>
							<div class="col-md-6 col-sm-12">
								<span>Upload Data</span>
								<v-file-input
									show-size
									placeholder="Upload your documents"
									label="File input"
									v-model="upload_data"
								></v-file-input>
								<!-- <input type="file" name="file" @change="onFileSelected" /> -->
							</div>
						</div>
						<p class="font-weight-bold mt-7">
							BY AGREEING TO THIS, YOU ARE DECLARING THAT YOUR DATA SET IS
							CLEAN, ACCURATE, AND PROTECTS THE CONFIDENTIALITY OF YOUR STUDY
							PARTICIPANTS. WE ATTEST THAT YOUR DATA WILL NOT BE USED FOR ANY
							OTHER PURPOSES THAN TO ADVANCE RESEARCH, AND THAT IT SHALL NOT BE
							SHARED WITH ANY THIRD PARTY EXCEPT WITH YOUR GRANTED PERMISSION.*
						</p>
						<div>
							<input type="checkbox" v-model="permission" /><span class="mx-2"
								>I Agree</span
							>
						</div>
						<v-btn
							large
							color="#413A76"
							class="text-light my-4"
							type="submit"
							v-on:click="formSubmit"
							>SUBMIT</v-btn
						>
					</div>
				</div>
			</form>
		</div>
	</v-app>
</template>

<script>
import ApiCalls from "../../apiRoots/api_calls";

const { PostSubmitData } = ApiCalls.PostMethods;

export default {
	name: "SubmitDataPage",
	data() {
		return {
			prefix: "",
			first_name: "",
			last_name: "",
			research_topic: "",
			research_location: "",
			geographical_coverage: "",
			start_date: "",
			end_date: "",
			study_design: "",
			study_population: "",
			sample_size: "",
			sampling_technique: "",
			sampling_unit: "",
			data_collection_tools: "",
			key_variables: "",
			selected: [],
			name: "",
			affilation: "",
			phone_number: "",
			email: "",
			sponsor: "",
			data_codebook: null,
			questionaire: null,
			upload_data: null,
			permission: false
		};
	},
	methods: {
		formSubmit() {
			const data = {
				prefix: this.prefix,
				first_name: this.first_name,
				last_name: this.last_name,
				research_topic: this.research_topic,
				research_location: this.research_location,
				geographical_coverage: this.geographical_coverage,
				start_date: this.start_date,
				end_date: this.end_date,
				study_design: this.study_design,
				study_population: this.study_population,
				sample_size: this.sample_size,
				sampling_technique: this.sampling_technique,
				sampling_unit: this.sampling_unit,
				data_collection_tools: this.data_collection_tools,
				key_variables: this.key_variables,
				key_indicators: JSON.stringify(this.selected),
				name: this.name,
				affilation: this.affilation,
				phone_number: this.phone_number,
				email: this.email,
				sponsor: this.sponsor,
				data_codebook: this.data_codebook,
				questionaire: this.questionaire,
				upload_data: this.upload_data,
				permission: this.permission
			};
			const vm = this;
			PostSubmitData(data)
				.then(res => {
					if (res.status === 201) {
						vm.$router.push("/success");
					}
				})
				.catch(err => console.error(err));
		},
		onFileSelected(event) {
			(this.data_codebook = event.target.files[0]),
				(this.questionaire = event.target.files[0]),
				(this.upload_data = event.target.files[0]);
		}
	}
};
</script>

<style scoped>
.submitDataBg {
	position: relative;
	height: 400px;
	margin-bottom: -54px;
	background-image: url("../../assets/images/submitDataBg.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
</style>
