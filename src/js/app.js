import '../css/reset.css'
import '../css/style.css'
import countriesCodes from "./countriesCodes.js"
import geolocation from "./geolocation.js"
import askForData from "./askForData"
import displayDates from "./getDate"
import graphInChart from "./graphInChart"


const searchBtn = document.getElementById("js_searchBtn");
const form = document.querySelector(".inputs");

//get data from inputs on search click
searchBtn.addEventListener('click', () => {
    askForData(form.elements.namedItem("js_inputType").value,
               form.elements.namedItem("js_textInputType").value,
               form.elements.namedItem("js_textInputType2").value);
})  

//window onload functions
countriesCodes(); //generate codes for country input
displayDates();
askForData(); //default query for Poznań
graphInChart("Poznań");
geolocation(); //get weather data based on current geolocation after giving permission
