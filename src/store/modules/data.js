import axios from "axios";
// import baseUrl from "../baseUrl";
import { apiBaseUrl } from "../baseUrl";

const state = {
	articles: []
};

const getters = {
	allArticles: state => state.articles
};

const actions = {
	async fetchArticles({ commit }) {
		const response = await axios.get(
			`${apiBaseUrl.baseRoute}/api/v1/data/articles/`
		);
		commit("setArticles", response.data);
	}
};

const mutations = {
	setArticles: (state, articles) => (state.articles = articles)
};

export default {
	state,
	getters,
	actions,
	mutations
};
