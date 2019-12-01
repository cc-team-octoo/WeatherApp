const icons = document.querySelectorAll('.smallCard__icon')

const dates = [];

function getDates() {
    const today = new Date();
    console.log(today)
    const nextDay = new Date(today);
    for(let i = 1; i <= 4; i++) {
        nextDay.setDate(today.getDate()+i);
        console.log(nextDay)
        const nextDate = nextDay.toISOString().slice(0, 10); //get date in format yyyy-mm-dd
        dates.push(nextDate);
    }
}

function showWeather(arg){
    getDates();
    console.log(dates)
    console.log("-----Pogoda na najbliższe dni------") 
    console.log(arg) //całe dane już przerobione z json
    console.log(arg.city) // miasto jakie wyszukało
    console.log(arg.list) // lista "pogód" na najbliższy czas
    console.log("-----------") 

    //dt_txt: "2019-12-02 12:00:00" wyciągnij main.temp_max
    
    //wyciągnij weather[0].icon i zrób url
    icons[0].innerHTML = '<img src="imgs/location.svg">'
    console.log('Icons:', icons)
}

export default showWeather
