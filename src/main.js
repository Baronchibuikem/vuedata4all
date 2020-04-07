import Vue from "vue";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Popper from "popper.js";
import jQuery from "jquery";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import axios from "axios";
import * as VeeValidate from "vee-validate";
global.Popper = Popper;
global.jQuery = jQuery;

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
const accessToken = localStorage.getItem("access_token");

if (accessToken) {
	Vue.prototype.$http.defaults.headers.common["Authorization"] = accessToken;
}

Vue.use(VeeValidate);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

var filter = function(text, length, clamp) {
	clamp = clamp || "...";
	var node = document.createElement("div");
	node.innerHTML = text;
	var content = node.textContent;
	return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter("truncate", filter);

new Vue({
	store,
	router,
	BootstrapVue,
	vuetify,
	render: h => h(App)
}).$mount("#app");
