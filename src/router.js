import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import Homepage from "./components/Pages/Homepage.vue";
import Aboutpage from "./components/Pages/AboutPage.vue";
import FAQpage from "./components/Pages/FAQPage.vue";
import SubmitDataPage from "./components/Pages/SubmitDataPage.vue";
import ContactPage from "./components/Pages/ContactUsPage.vue";
import UserAuths from "./components/Layouts/UserAuthentication.vue";
import UserProfile from "./components/Layouts/UserProfile.vue";
import updateProfilePage from "./components/Pages/UpdateProfilePage.vue";
import updatePlanPage from "./components/Pages/UpdatePlanPage.vue";
import PlanPage from "./components/Pages/PlanPage.vue";
import DashboardPage from "./components/Pages/DashboardPage.vue";
import RequestDataPage from "./components/Pages/RequestDataPage.vue";
import PaymentPage from "./components/Pages/PaymentPage.vue";
import AnalyticPage from "./components/Pages/AnalyticPage.vue";
import BrowseDataPage from "./components/Pages/BrowseDataPage.vue";
import SuccessMessage from "./components/Common/SuccessMessage.vue";
import ResourcePage from "./components/Pages/ResourcePage.vue";

Vue.use(VueRouter);

let router = new VueRouter({
	mode: "history",

	routes: [
		{
			path: "/",
			name: "Homepage",
			component: Homepage
		},
		{
			path: "/about",
			name: "Aboutpage",
			component: Aboutpage
		},
		{
			path: "/faq",
			name: "FAQpage",
			component: FAQpage
		},
		{
			path: "/browsedata",
			name: "BrowseDataPage",
			component: BrowseDataPage
		},
		{
			path: "/login",
			name: "UserAuths",
			component: UserAuths
		},
		{
			path: "/contact",
			name: "ContactPage",
			component: ContactPage
		},
		{
			path: "/plan",
			name: "PlanPage",
			component: PlanPage
		},
		{
			path: "/dashboard",
			name: "DashboardPage",
			component: DashboardPage
		},
		{
			path: "/analytics",
			name: "AnalyticPage",
			component: AnalyticPage
		},
		{
			path: "/payment",
			name: "PaymentPage",
			component: PaymentPage
		},
		{
			path: "/success",
			name: "SuccessMessage",
			component: SuccessMessage
		},

		{
			path: "/resources",
			name: "ResourcePage",
			component: ResourcePage
		},

		{
			path: "/requestdata",
			name: "RequestDataPage",
			component: RequestDataPage,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: "/submitdata",
			name: "SubmitDataPage",
			component: SubmitDataPage,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: "/profile/",
			component: UserProfile,
			children: [
				{
					path: "",
					component: updateProfilePage
				},
				{
					path: "myplan",
					component: updatePlanPage
				}
			]

			// meta: {
			// 	requiresAuth: true
			// }
		}
	]
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters.isLoggedIn) {
			next();
			return;
		}
		next("/login");
	} else {
		next();
	}
});

export default router;
