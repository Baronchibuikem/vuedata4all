import axios from "axios";
// import baseUrl from "../baseUrl";
import { apiBaseUrl } from "../baseUrl";

const state = {
	user: {},
	users: [],
	error: [],
	status: "",
	token: localStorage.getItem("token") || ""
};

const getters = {
	isLoggedIn: state => !!state.token,
	authStatus: state => state.status,
	user: state => state.user
};

const actions = {
	login({ commit }, user) {
		return new Promise((resolve, reject) => {
			commit("auth_request");
			axios({
				url: `${apiBaseUrl.baseRoute}/api/v1/account/auth/login`,
				data: user,
				method: "POST"
			})
				.then(response => {
					console.log(response);
					const token = response.data.token;
					const user = response.data.user;
					localStorage.setItem("token", token);
					localStorage.setItem("user", user);
					axios.defaults.headers.common["Authorization"] = token;
					commit("auth_success", { token, user });
					resolve(response);
				})
				.catch(err => {
					commit("auth_error");
					// localStorage.removeItem("token");
					reject(err);
				});
		});
	},
	updateImage({ commit }, user) {
		// const { image, id } = user;
		// console.log(image, id, "dfssssssssssssssss");
		// console.log("nothing here....... ", user);
		return new Promise((resolve, reject) => {
			commit("auth_request");
			axios({
				url: `${apiBaseUrl.baseRoute}/api/v1/account/users/${user.id}/`,
				data: user.image,
				method: "PATCH",
				headers: {
					"Content-Type": "multipart/form-data"
				}
			})
				.then(response => {
					//const token = response.data.token;
					const token = localStorage.getItem("token");
					const user = response.data;
					//localStorage.setItem("token", token);
					localStorage.setItem("user", user);
					axios.defaults.headers.common["Authorization"] = token;
					commit("auth_success", { token, user });
					resolve(response);
				})
				.catch(err => {
					commit("auth_error");
					// localStorage.removeItem("token");
					reject(err);
				});
		});
	},
	// deleteImage({ commit }, user) {
	// 	return new Promise((resolve, reject) => {
	// 		commit("auth_request");
	// 		axios({
	// 			url: `${apiBaseUrl.baseRoute}/api/v1/account/users/${user.id}/`,
	// 			data: user.image,
	// 			method: "DELETE"
	// 		})
	// 			.then(response => {
	// 				//const token = response.data.token;
	// 				const token = localStorage.getItem("token");
	// 				const user = response.data;
	// 				//localStorage.setItem("token", token);
	// 				localStorage.setItem("user", user);
	// 				axios.defaults.headers.common["Authorization"] = token;
	// 				commit("auth_success", { token, user });
	// 				resolve(response);
	// 			})
	// 			.catch(err => {
	// 				commit("auth_error");
	// 				// localStorage.removeItem("token");
	// 				reject(err);
	// 			});
	// 	});
	// },
	update({ commit }, user) {
		return new Promise((resolve, reject) => {
			commit("auth_request");
			axios({
				url: `${apiBaseUrl.baseRoute}/api/v1/account/users/${user.id}/`,
				data: user,
				method: "PATCH"
			})
				.then(response => {
					//const token = response.data.token;
					const token = localStorage.getItem("token");
					const user = response.data;
					//localStorage.setItem("token", token);
					localStorage.setItem("user", user);
					axios.defaults.headers.common["Authorization"] = token;
					commit("auth_success", { token, user });
					resolve(response);
				})
				.catch(err => {
					commit("auth_error");
					// localStorage.removeItem("token");
					reject(err);
				});
		});
	},
	logout({ commit }) {
		return new Promise(resolve => {
			commit("logout");
			localStorage.removeItem("token");
			delete axios.defaults.headers.common["Authorization"];
			resolve();
		});
	},
	register({ commit }, user) {
		return new Promise((resolve, reject) => {
			commit("auth_request");
			axios({
				url: `${apiBaseUrl.baseRoute}/api/v1/account/auth/register`,
				data: user,
				method: "POST"
			})
				.then(resp => {
					const token = resp.data.token;
					const user = resp.data.user;
					localStorage.setItem("token", token);
					axios.defaults.headers.common["Authorization"] = token;
					commit("auth_success", { token, user });
					resolve(resp);
				})
				.catch(err => {
					commit("auth_error", err.response);
					localStorage.removeItem("token");
					reject(err);
				});
		});
	},
	getUsers({ commit }) {
		let user = localStorage.getItem("user");
		commit("fetch_users");
		console.log(user.fullname);
	}
};

const mutations = {
	auth_request(state) {
		state.status = "loading";
	},
	auth_success(state, payload) {
		const { token, user } = payload;
		state.status = "success";
		state.token = token;
		state.user = { ...user };
	},
	auth_error(state, payload) {
		const { data } = payload;
		state.status = "error";
		state.isLoading = false;
		state.error = data;
	},
	logout(state) {
		state.status = "";
		state.token = "";
	},
	fetch_users(state, users) {
		state.users = users;
		console.log(state.users);
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
