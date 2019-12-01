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
const showCurrentWeather = obj => {
    currentCity.innerText = obj.name;
    currentTemperature.innerText = obj.main.temp.toFixed(1);
    weatherDesc.innerText = obj.weather[0].description;
    todayMinTemperature.innerText = obj.main.temp_min.toFixed(1);
    todayMaxTemperature.innerText = obj.main.temp_max.toFixed(1);
    currentPressure.innerText = obj.main.pressure;
    currentHumidity.innerText = obj.main.humidity;
    console.log("-----Aktualna Pogoda------");
    console.log(obj); //całe dane już przerobione z json 
    console.log("-----------");
}

export default showCurrentWeather;
