"use strict";

console.log("MAIN.JS loaded");

let $ = require('jquery'),
    db = require("./api-interactions"),
    Handlebars = require("hbsfy/runtime");
require("bootstrap");

//Gets weather data from API database and displays results on page
$("#submit").click(function(){
    $("#input").focus();
    var inputItem = $("#input").val();
    //get weather info from database
    db.getWeather(inputItem);
    });
};
