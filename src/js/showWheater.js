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
