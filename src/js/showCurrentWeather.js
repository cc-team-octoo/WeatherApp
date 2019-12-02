import graphInChart from "./graphInChart";

const currentCity = document.getElementById("js_currentCity");
const currentTemperature = document.getElementById("js_midTemp");
const weatherDesc = document.getElementById("js_description");
const todayMinTemperature = document.getElementById("js_minTemp");
const todayMaxTemperature = document.getElementById("js_maxTemp");
const currentPressure = document.getElementById("js_pressure");
const currentHumidity = document.getElementById("js_humidity");

// function logCurrentWeather(arg) {
//     console.log("-----Aktualna Pogoda------")
//     console.log(arg) //całe dane już przerobione z json 
//     console.log("-----------")
//     weatherUpdate(arg);
// }

//function to update current weather card
const showCurrentWeather = arg => {
    currentCity.innerText = arg.name;
    currentTemperature.innerText = arg.main.temp.toFixed(1);
    weatherDesc.innerText = arg.weather[0].description;
    todayMinTemperature.innerText = arg.main.temp_min.toFixed(1);
    todayMaxTemperature.innerText = arg.main.temp_max.toFixed(1);
    currentPressure.innerText = arg.main.pressure;
    currentHumidity.innerText = arg.main.humidity;
    console.log(arg.name);
    graphInChart(arg.name);
    console.log("-----Aktualna Pogoda------");
    console.log(arg); //całe dane już przerobione z json 
    console.log("-----------");
}

export default showCurrentWeather;
