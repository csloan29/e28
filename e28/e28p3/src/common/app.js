export const axios = require('axios').create({
	baseURL: process.env.VUE_APP_API_URL ?? 'http://e28-api.cartersloan.loc',
	responseType: 'json',
	withCredentials: true,
});