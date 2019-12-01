const icons = document.querySelectorAll('.smallCard__icon')

const dates = [];

//get dates for four next days
function getDates() {
    const today = new Date();
    const nextDay = new Date(today);
    for(let i = 1; i <= 4; i++) {
        nextDay.setDate(today.getDate()+i);
        const nextDate = nextDay.toISOString().slice(0, 10); //get date in format yyyy-mm-dd
        dates.push(nextDate);
    }
}
//store needed data in one object
function getAllDaysData(arg) {
    const allDaysData = []
    arg.list.map((i) => {
        allDaysData.push({
            date: i.dt_txt.split(' ')[0],
            time: i.dt_txt.split(' ')[1],
            tempMax: i.main.temp_max,
            icon: i.weather[0].icon
        })
    })
    console.log(allDaysData);
    return allDaysData;
}

function showWeather(arg){
    getDates();
    console.log(dates)
    console.log("-----Pogoda na najbliższe dni------") 
    console.log(arg) //całe dane już przerobione z json
    console.log(arg.city) // miasto jakie wyszukało
    console.log(arg.list) // lista "pogód" na najbliższy czas
    console.log("-----------") 
    getAllDaysData(arg)


    
    //wyciągnij weather[0].icon i zrób url
    icons[0].innerHTML = '<img src="imgs/location.svg">'
    console.log('Icons:', icons)
}

export default showWeather
