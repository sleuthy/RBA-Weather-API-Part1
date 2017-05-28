"use strict";
console.log("api-interactions js loaded");

let $ = require('jquery'),
    weather = require("./api-config");


function getWeather(zipCode) {
    return new Promise(function(resolve, reject){
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?{$zipCode},us`
        }).done(function(weatherData){
            resolve(weatherData);
            console.log(weatherData);
        }).fail(function(error){
            reject(error);
        });
    });
}


module.exports = {
    getWeather
};