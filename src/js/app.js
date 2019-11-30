import countriesCodes from "./countriesCodes.js"
import geolocation from "./geolocation.js"
import askForData from "./askForData"
import showCurrentWeather from "./showCurrentWeather"

countriesCodes();

const searchBtn = document.getElementById("js_searchBtn");
const form = document.querySelector(".inputs");

searchBtn.addEventListener('click', () => {
    askForData(form.elements.namedItem("js_inputType").value,
               form.elements.namedItem("js_textInputType").value,
               form.elements.namedItem("js_textInputType2").value);
})    

const currentCity = document.getElementById("js_currentCity");
const currentTemperature = document.getElementById("js_midTemp");
const weatherDesc = document.getElementById("js_description");
const todayMinTemperature = document.getElementById("js_minTemp");
const todayMaxTemperature = document.getElementById("js_maxTemp");
const currentPressure = document.getElementById("js_pressure");
const currentHumidity = document.getElementById("js_humidity");

const weatherUpdate = obj => {
    currentCity.innerText = obj.name;
    currentTemperature.innerText = obj.main.temp - 273.15.toFixed(1);
    weatherDesc.innerText = obj.weather[0].description;
    todayMinTemperature.innerText = obj.main.temp_min.toFixed(1);
    todayMaxTemperature.innerText = obj.main.temp_max.toFixed(1);
    currentPressure.innerText = obj.main.pressure;
    currentHumidity.innerText = obj.main.humidity;
}

const dates = document.querySelectorAll(".date");
const dayNames = document.querySelectorAll(".js_date");

const dateUpdate = () => {
    const today = new Date()
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dayName = today.getDay();

    // trzeba by było przeiterować się po zmiennych dates i dayNames, np. forEach(el, i) i podorabiać dynamicznie daty

}

dateUpdate();

geolocation() //pobiera dane z lokalizaci użytkownika - proponuje żeby od razu po załadowaniu domu uruchamiała się i wskakiwały ako pierwsze - użytkwonik ma domyślnie pogode dla swoej lokalizacji



//document.querySelector("jakiś super formularz").addEventListener("click",askForData())

askForData() //- funkcja działa docelowo można sobie sprawdzić ZipCode City i GeoLocation

// export {currentCity, currentTemperature, weatherDesc, todayMinTemperature, todayMaxTemperature, currentPressure, currentHumidity}
export default weatherUpdate;
