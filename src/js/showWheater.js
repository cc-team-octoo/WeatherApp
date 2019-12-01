const icons = document.querySelectorAll('.smallCard__icon')

function getToday() {
    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    console.log(today)
    return today;
}


//store needed data in one object
function getAllDaysData(arg) {
    const allDaysData = [];
    arg.list.map((i) => {
        allDaysData.push({
            date: i.dt_txt.split(' ')[0],
            time: i.dt_txt.split(' ')[1],
            tempMax: i.main.temp_max,
            icon: i.weather[0].icon
        })
    });
    return allDaysData;
}

//get data for 4 next days at noon
function get4DaysData(arg) {
    const today = getToday();
    const allDaysData = getAllDaysData(arg);
    console.log(today)
    console.log(allDaysData)
    const fourDaysData = allDaysData.filter((n) => {
        return (n.date > today && n.time === "12:00:00")
    })
    console.log(fourDaysData)
}

function showWeather(arg){
    console.log("-----Pogoda na najbliższe dni------") 
    console.log(arg) //całe dane już przerobione z json
    console.log(arg.city) // miasto jakie wyszukało
    console.log(arg.list) // lista "pogód" na najbliższy czas
    console.log("-----------") 
    get4DaysData(arg)


    
    //wyciągnij weather[0].icon i zrób url
    icons[0].innerHTML = '<img src="imgs/location.svg">'
    console.log('Icons:', icons)
}

export default showWeather
