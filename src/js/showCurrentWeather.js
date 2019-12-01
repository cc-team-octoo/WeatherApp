import weatherUpdate from './app'

function showCurrentWeather(arg) {
    console.log("-----Aktualna Pogoda------")
    console.log(arg) //całe dane już przerobione z json 
    console.log("-----------")
    weatherUpdate(arg);
    }

export default showCurrentWeather
