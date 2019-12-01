//calback do fetcha - tutaj trzeba będzie powstawiać elementy domu
function showWeather(arg){
    console.log("-----Pogoda na najbliższe dni------") 
    console.log(arg) //całe dane już przerobione z json
    console.log(arg.city) // miasto jakie wyszukało
    console.log(arg.list) // lista "pogód" na najbliższy czas
    console.log("-----------") 
    }

export default showWeather
