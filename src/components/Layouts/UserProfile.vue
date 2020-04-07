<template>
	<div class="container mt-12 pt-12 min-vh-100">
		<div class="row mt-5 pt-5">
			<div class="col-md-4 col-sm-4">
				<router-link to="/profile"
					><div class=" shadow d-flex py-6 px-6  bg-white">
						<img
							src="../../assets/images/portfolio.png"
							width="20%"
							height="100%"
						/>
						<h5 class="my-4 ml-5">Profile</h5>
					</div></router-link
				>
			</div>
			<div class="col-md-4 col-sm-4">
				<router-link to="myplan" append
					><div class=" shadow d-flex py-6 px-6 bg-white">
						<img
							src="../../assets/images/updateProfile1.png"
							width="20%"
							height="100%"
						/>
						<h5 class="my-4 ml-5">Plan</h5>
					</div></router-link
				>
			</div>
			<div class="col-md-4 col-sm-4">
				<router-link to="/profile"
					><div class=" shadow d-flex py-6 px-6 bg-white">
						<img
							src="../../assets/images/updateProfile2.png"
							width="20%"
							height="100%"
						/>
						<h5 class="my-4 ml-5">Recent Activities</h5>
					</div></router-link
				>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import profileImage from "../../assets/images/updateProfile1.png";
import recentActivityImage from "../../assets/images/updateProfile2.png";
export default {
	name: "UserProfile",
	data() {
		return {
			profileImage,
			recentActivityImage
		};
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
}
</style>
