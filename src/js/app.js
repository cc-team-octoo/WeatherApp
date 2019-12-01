import '../css/reset.css'
import '../css/style.css'
import countriesCodes from "./countriesCodes.js"
import geolocation from "./geolocation.js"
import askForData from "./askForData"
// import showCurrentWeather from "./showCurrentWeather"

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
geolocation() //get weather data based on current geolocation



//document.querySelector("jakiś super formularz").addEventListener("click",askForData())

askForData() //- funkcja działa docelowo można sobie sprawdzić ZipCode City i GeoLocation

// // export {currentCity, currentTemperature, weatherDesc, todayMinTemperature, todayMaxTemperature, currentPressure, currentHumidity}
// export default weatherUpdate;
