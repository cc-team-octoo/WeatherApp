import '../css/reset.css'
import '../css/style.css'
import countriesCodes from "./countriesCodes.js"
import geolocation from "./geolocation.js"
import askForData from "./askForData"
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
// dateUpdate(); //get actual date - Mirek robi funkcję
askForData(); //- funkcja działa docelowo można sobie sprawdzić ZipCode City i GeoLocation

graphInChart("Poznań");

geolocation(); //get weather data based on current geolocation
