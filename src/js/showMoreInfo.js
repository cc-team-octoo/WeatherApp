import * as compareFunctions from './compareData.js';
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

function graphForSingleDay(time, temp, day) {
    const timeGraph = time;
    const tempGraph = temp;
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: timeGraph,
            datasets: [{
                data: tempGraph,
                label: "",
                borderColor: "#3e95cd",
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: `${day}`
            }
        }
    });
}


function showMoreInfo(arg, nextDaysData, i) {
    let avgValue = compareFunctions.compareTemp(nextDaysData[i + 1], "avg");
    let timeList = compareFunctions.compareTemp(nextDaysData[i + 1], "time");
    let maxValue = Math.max.apply(null, compareFunctions.compareTemp(nextDaysData[i + 1], "max"))
    let minValue = Math.min.apply(null, compareFunctions.compareTemp(nextDaysData[i + 1], "min"))
    let day = nextDaysData[i + 1][0].date
    currentCity.innerHTML = arg.city.name
    currentTemperature.innerHTML = nextDaysData[i + 1][0].tempAvg.toFixed(1)
    weatherDesc.innerHTML = nextDaysData[i + 1][0].desc;
    todayMinTemperature.innerHTML = minValue.toFixed(1)
    todayMaxTemperature.innerHTML = maxValue.toFixed(1)
    currentPressure.innerHTML = nextDaysData[i + 1][0].preasure;
    currentHumidity.innerHTML = nextDaysData[i + 1][0].humidity;
    dateOfWeek.innerHTML = smallCard[i].querySelector("p.js_day").innerHTML;
    dayOfWeek.innerHTML = smallCard[i].querySelector("p.smallDate").innerHTML;
    graphForSingleDay(timeList, avgValue, day)
}


export default showMoreInfo