import showMoreInfo from "./showMoreInfo"
const smallCard = document.querySelectorAll('.smallCard')
const icons = document.querySelectorAll('.js_smallCard__icon');
const maxTemps = document.querySelectorAll('.js_smallMaxTemp')

function getToday() {
    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    return today;
}

//store needed data in one object
function getAllDaysData(arg) {
    const allDaysData = [];
    arg.list.map((i) => {
        allDaysData.push({
            date: i.dt_txt.split(' ')[0],
            time: i.dt_txt.split(' ')[1],
            tempAvg: i.main.temp,
            tempMax: i.main.temp_max,
            tempMin: i.main.temp_min,
            icon: i.weather[0].icon,
            desc: i.weather[0].description,
            preasure: i.main.pressure,
            humidity: i.main.humidity,
        })
    });

    return allDaysData;
}

//get data for 4 next days
function getNextDaysData(arg) {
    const helperArray = []
    const allDaysData = getAllDaysData(arg);
    allDaysData.reduce((prevday, nextDay) => {
        if (prevday.date !== nextDay.date || helperArray.length <= 0) {
            const newArray = []
            newArray.push(nextDay)
            helperArray.push(newArray)
        } else if (helperArray.length >= 0) {
            const lastArray = helperArray[helperArray.length - 1]
            lastArray[lastArray.length] = nextDay
        }
        return nextDay

    })
    return helperArray;
}

//compare function - this will help with gets max and min temp
function compareTemp(arg, param) {
    let compareArray = []
    if (param === "max") {
        arg.map((e) => {
            compareArray.push(e.tempMax)
        })
    }
    if (param === "min") {
        arg.map((e) => {
            compareArray.push(e.tempMin)
        })
    }
    if (param === "logo") {
        arg.map((e) => {
            compareArray.push(e.icon)
        })
    }
    if (param === "desc") {
        arg.map((e) => {
            compareArray.push(e.desc)
        })
    }
    return compareArray
}

function mostCommon(array) {
    let counts = {}
    let compare = 0;
    let mostFrequent;
    array.forEach((e) => {
        let word = e;
        if (counts[word] === undefined) {
            counts[word] = 1;
        } else {
            counts[word] = counts[word] + 1;
        }
        if (counts[word] > compare) {
            compare = counts[word];
            mostFrequent = e;
        }

    })
    return mostFrequent
}
//display weather data in small cards
function showWeather(arg) {
    const nextDaysData = getNextDaysData(arg);
    for (let i = 0; i <= 3; i++) {
        smallCard[i].addEventListener("click", () => {
            showMoreInfo(arg, nextDaysData[i], i)
        })
        let maxValue = Math.max.apply(null, compareTemp(nextDaysData[i + 1], "max"))
        let mostDesc = compareTemp(nextDaysData[i + 1], "desc") //+1 beacuse i will get data for today 
        let mostIcon = compareTemp(nextDaysData[i + 1], "logo")
        maxTemps[i].textContent = maxValue.toFixed(1)
        icons[i].src = `http://openweathermap.org/img/wn/${mostCommon(mostIcon)}@2x.png`,
            icons[i].alt = mostCommon(mostDesc)
        icons[i].title = mostCommon(mostDesc)
    }
}

export default showWeather