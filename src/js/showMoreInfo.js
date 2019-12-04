const currentCity = document.getElementById("js_currentCity");
const currentTemperature = document.getElementById("js_midTemp");
const weatherDesc = document.getElementById("js_description");
const todayMinTemperature = document.getElementById("js_minTemp");
const todayMaxTemperature = document.getElementById("js_maxTemp");
const currentPressure = document.getElementById("js_pressure");
const currentHumidity = document.getElementById("js_humidity");
const dayOfWeek = document.querySelector(".js_day");
const dateOfWeek = document.querySelector(".js_date");
const smallCard = document.querySelectorAll('.smallCard')

function showMoreInfo(arg, nextDaysData, i) {
    currentCity.innerHTML = arg.city.name
    currentTemperature.innerHTML = nextDaysData[i].tempAvg
    weatherDesc.innerHTML = nextDaysData[i].desc;
    todayMinTemperature.innerHTML = nextDaysData[i].tempMin
    todayMaxTemperature.innerHTML = nextDaysData[i].tempMax
    currentPressure.innerHTML = nextDaysData[i].preasure;
    currentHumidity.innerHTML = nextDaysData[i].humidity;
    dateOfWeek.innerHTML = smallCard[i].querySelector("p.js_day").innerHTML;
    dayOfWeek.innerHTML = smallCard[i].querySelector("p.smallDate").innerHTML;
}


export default showMoreInfo