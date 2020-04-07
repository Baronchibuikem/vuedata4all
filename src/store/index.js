import Vuex from "vuex";
import Vue from "vue";
import userAuth from "./modules/userAuth";
import data from "./modules/data";
import createPersistedState from "vuex-persistedstate";

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		userAuth,
		data
	}
});
