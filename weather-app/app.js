const request = require('request');

const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

request({
	url: API_URL,
	json: true
}, (error, response, body) => {
	console.log(body);
});