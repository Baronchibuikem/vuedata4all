import axios from "axios";
import { apiBaseUrl } from "../store/baseUrl";
import { debug } from "../components/Utilities/debugger";

const PostMethods = {
	// All the methods in this instance are used to send POST request to the server

	// When a user submits the contact us form
	postSubscription(data) {
		debug.logger(data);
		return axios.post(
			`${apiBaseUrl.baseRoute}/api/v1/account/contact-us/`,
			data
		);
	},

	// When a user submits the submit data form
	PostSubmitData(data) {
		debug.logger(data);
		return axios.post(`${apiBaseUrl.baseRoute}/api/v1/data/submit-data/`, data);
	},

	// when a user submits the request data form
	PostRequestData(data) {
		debug.logger(data);
		return axios.post(
			`${apiBaseUrl.baseRoute}/api/v1/data/request-data/`,
			data
		);
	}
};

const GetMethods = {};

const PutMethods = {};

const PatchMethods = {
	PatchRequestData(data) {
		debug.logger(data);
		return axios.patch(
			`${apiBaseUrl.baseRoute}api/v1/account/users/${data.id}/`,
			data
		);
	}
};

const DeleteMethods = {};

export default {
	PostMethods,
	GetMethods,
	DeleteMethods,
	PatchMethods,
	PutMethods
};
