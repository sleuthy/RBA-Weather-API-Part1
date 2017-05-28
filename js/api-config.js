"use strict";

let $ = require('../lib/node_modules/jquery'),
	api = require("./api-getter.js"),
	apiData = api();

var config = {
	apiKey: apiData.apiKey,
	databaseURL: apiData.databaseURL
};


let weather = {};


weather.getWeatherSettings = function(){
	return config;
};

module.exports = weather;